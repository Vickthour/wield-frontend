import React from "react";

const ErrorMessage = ({ error }: { error?: string }) => {
  return <p className="mt-[0!important] text-sm text-red-500">{error}</p>;
};
export default ErrorMessage;
