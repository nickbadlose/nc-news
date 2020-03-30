import React from "react";

const ErrorMessage = (
  err = { status: 500, msg: "Oops, can't connect to the server!" }
) => {
  return (
    <span>
      {err.status} {err.msg}
    </span>
  );
};

export default ErrorMessage;
