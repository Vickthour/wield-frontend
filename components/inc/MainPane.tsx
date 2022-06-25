import React from "react";

const MainPane = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=" space-y-2 sm:col-span-6 mid:space-y-4">
      {children}
    </div>
  );
};

export default MainPane;
