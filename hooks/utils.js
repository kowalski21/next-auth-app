import { useEffect, useState } from "react";
import { getAuthInfo } from "../lib";
import Router from "next/router";

import { useAuthStore } from "../store";

const selector = (state) => state.add;
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const addUser = useAuthStore(selector);

  useEffect(() => {
    console.log("component has mounted");
    let mounted = true;
    const asyncFunc = async () => {
      const [data, error] = await getAuthInfo();
      if (data) {
        console.log(`auth information has been retrieved`);
        console.log(data);
        setUser(data);
        addUser(data);

        // if (data.role.name !== "admin") {
        //   Router.push("/");
        // }
      } else {
        console.log(`oops could not retrive error information`);
        console.log(error);
        setUser(null);
        addUser(null);

        Router.push("/");
      }
    };

    // setTimeout(showInfo, 10000);
    // setTimeout(asyncFunc, 1000);
    if (mounted) {
      asyncFunc();
    }
  }, []);

  return { user };
};

export const useEmployerOnly = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.role.name !== "employer") {
      Router.push("/");
    }

    return () => {
      console.log("component has unmounted");
      useAuth;
    };
  }, [user]);

  return { user };
};

export const useAuthorizedRole = (roleName) => {
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.role.name !== roleName) {
      Router.push("/");
    }
  }, [user]);

  return { user };
};

export const useResourceOwner = (roleName, resourceId) => {
  const { user } = useAuthorizedRole(roleName);
  useEffect(() => {
    if (user && user.id !== resourceId) {
      Router.push("/");
    }
  }, [user]);

  return { user };
};
