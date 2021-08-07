import React from "react";
import { userLogin } from "./lib";
import Router from "next/router";
const LoginButton = () => {
  const handleLogin = async (e) => {
    const [data, error] = await userLogin({
      email: "test@gmail.com",
      password: "test",
    });
    if (data) {
      Router.push("/profile");
    }
    console.log(data);
    console.log(error);
  };
  return (
    <div>
      <button className="btn btn-outline-primary" onClick={handleLogin}>
        Login Button
      </button>
    </div>
  );
};

export default LoginButton;
