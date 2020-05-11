import React from "react";

// maybe store error message in global error store and set it there then reset to null when refreshing

const ErrorMessage = ({
  err = { status: 500, msg: "Oops, can't connect to the server!" },
}) => {
  return (
    <span>
      {err.status} {err.msg}
    </span>
  );
};

export default ErrorMessage;
