import React from "react";

const ErrorMessage = ({ err }) => {
  return (
    <section>
      <p>{err.status}</p>
      <p>{err.msg}</p>
    </section>
  );
};

export default ErrorMessage;
