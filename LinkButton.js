import React from "react";
import Link from "next/link";
const LinkButton = ({ children, to }) => {
  return (
    <Link href={to}>
      <button className="btn btn-outline-success">{children}</button>
    </Link>
  );
};

export default LinkButton;
