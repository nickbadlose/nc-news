import React from "react";

const ErrorPage = ({
  err = { status: 500, msg: "Oops, can't connect to the server!" }
}) => {
  return (
    <main>
      <h2>Error: {err.status}</h2>
      <h3>{err.msg}</h3>
    </main>
  );
};

export default ErrorPage;
