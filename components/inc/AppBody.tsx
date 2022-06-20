import React from "react";
import LeftPane from "./LeftPane";
import MainPane from "./MainPane";
import RightPane from "./RightPane";
import SideNav from "./SideNav";

const AppBody = () => {
  return (
    <main className="mt-20 pt-5 min-h-[calc(100vh_-_80px)] bg-background">
      <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-9 mid:grid-cols-12 gap-4">
        <LeftPane/>
        <MainPane/>
        <RightPane/>
      </div>
    </main>
  );
};

export default AppBody;
