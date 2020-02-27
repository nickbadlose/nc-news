import React from "react";

const ErrorPage = ({ err = { status: 400, msg: "oops" } }) => {
  return (
    <main>
      <h2>Error: {err.status}</h2>
      <h3>{err.msg}</h3>
    </main>
  );
};

export default ErrorPage;
