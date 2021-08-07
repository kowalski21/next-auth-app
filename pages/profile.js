import React from "react";
import { useAuth } from "../hooks/utils";
import LinkButton from "../LinkButton";
import LoadingIndicator from "../LoadingIndicator";
import LogoutButton from "../LogoutButton";

const profile = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <h4>You must be authenticated before you can login</h4>

            <div className="col">
              <LinkButton to="/">Go back to Home</LinkButton>
            </div>
          </div>
          <div className="row mt-2">
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  return <LoadingIndicator />;
};

export default profile;
