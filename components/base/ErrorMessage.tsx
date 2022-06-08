import React from "react";

 const ErrorMessage = ({ error }: { error?: string; }) => {
   return (
     <p className="text-red-500 mt-[0!important] text-sm">
       {error}
     </p>
   );

};
export default ErrorMessage;