import React from "react";
import LinkButton from "../LinkButton";
import { useEmployerOnly } from "../hooks/utils";
import LoadingIndicator from "../LoadingIndicator";
const employer = () => {
  const { user } = useEmployerOnly();
  if (user) {
    return (
      <div>
        <div className="container mt-2">
          <div className="row">
            <h4>Welcome to the employer only page</h4>
          </div>
          <div className="row mt-2">
            <div className="col">
              <LinkButton to="/">Home</LinkButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <LoadingIndicator />;
};

export default employer;
