import React from "react";

const Forbidden = () => {
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <h4>You have been forbidden from this page</h4>
          <p className="text-danger">
            Contact your IT adminstrator for support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
