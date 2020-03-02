import React from "react";

const ErrorMessage = ({ err }) => {
  return (
    <span>
      {err.status} {err.msg}
    </span>
  );
};

export default ErrorMessage;
