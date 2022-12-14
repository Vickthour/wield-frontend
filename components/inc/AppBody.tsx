import React from "react";
import LeftPane from "./LeftPane";
import MainPane from "./MainPane";
import RightPane from "./RightPane";
import SideNav from "./SideNav";

const AppBody = ({
  children,
  grid=false,
}: {
  children: React.ReactNode;
  grid?: boolean;
}) => {
  if (grid) {
    return (
      <main className="mt-20 mb-16 min-h-[calc(100vh_-_80px)] bg-background md:pt-5 mid:mb-0 ">
        <div className=" mx-auto grid grid-cols-1 gap-3 sm:px-1 md:grid-cols-9 lg:grid-cols-12 xl:max-w-[1536px]">
          {children}
        </div>
      </main>
    );
  }
  return (
    <main className="mt-20 mb-16 min-h-[calc(100vh_-_80px)] bg-background md:pt-5 mid:mb-0 ">
      {children}
    </main>
  );
};

export default AppBody;
