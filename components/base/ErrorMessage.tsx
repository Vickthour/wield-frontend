import React from "react";

 const ErrorMessage = ({ error }: { error?: string; }) => {
   const [readMore,setReadMore] = React.useState(false);
   if (!error) return null;
   if(error.length>40){
     if (readMore){
       return <p className="text-red-500 mt-[0!important] text-sm">
       {error} 
       {" "}
       <span className="cursor-pointer" onClick={()=>setReadMore(false)}>Read Less</span>
     </p>
     }
    return <p className="text-red-500 mt-[0!important] text-sm">
       {error.substring(0,40)}...
       <span className="cursor-pointer" onClick={()=>setReadMore(true)}>Read More</span>
     </p>

   }
   return (
     <p className="text-red-500 mt-[0!important] text-sm">
       {error}
     </p>
   );

};
export default ErrorMessage;