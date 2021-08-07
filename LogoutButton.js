import React from "react";
import { userLogout } from "./lib";
import Router from "next/router";
const LogoutButton = () => {
  const handleLogout = async (e) => {
    const [data, error] = await userLogout();
    if (!error) {
      Router.push("/");
    }

    console.log(error);
  };
  return (
    <div>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
