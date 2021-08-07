import React from "react";

import LinkButton from "../LinkButton";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const Home = () => {
  let owner = `d93cf0bf-1503-40a9-aa1c-2b57620b2a3a`;
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <h4>Welcome to the homepage</h4>
        </div>

        <div className="row mb-2">
          <div className="col">
            <LinkButton to="/profile">Visit Protected Page</LinkButton>

            <div className="mx-2 mt-2"></div>

            <LinkButton to="/employer">View Employee Page</LinkButton>

            <div className="mt-2">
              <LinkButton to={`/job/${owner}`}>Update Job</LinkButton>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <LoginButton />
            <div className="mt-2"></div>

            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
