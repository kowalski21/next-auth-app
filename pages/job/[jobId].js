import React from "react";
import Router from "next/router";
import Link from "next/link";
import LoadingIndicator from "../../LoadingIndicator";
import LinkButton from "../../LinkButton";
import { useResourceOwner } from "../../hooks/utils";
const JobsPage = () => {
  const jobId = Router.query["jobId"];
  console.log(jobId);

  const { user } = useResourceOwner("employer", jobId);

  if (user) {
    return (
      <div>
        <div className="container mt-2">
          <h3>Welcome to the job update page</h3>

          <div className="row mt-3">
            <LinkButton to="/">Go Home</LinkButton>
          </div>
        </div>
      </div>
    );
  }

  return <LoadingIndicator />;
};

export default JobsPage;
