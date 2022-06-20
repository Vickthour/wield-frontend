import React from "react";
import { Card } from "../base";
import BaseModal from "../base/BaseModal";
import Button from "../base/Button";
import Extensible from "./Extensible";
import SideNav from "./SideNav";

const LeftPane = () => {
  return (
    <div className="col-span-3 hidden flex-1 space-y-4  mid:block">
      <SideNav />
      <Card className="pr-0">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Explore</h1>
          <p>see more </p>
        </div>
        <div className="relative">
          <Extensible className=" flex gap-2 overflow-hidden ">
            <Button>product</Button>
            <Button>product</Button>
            <Button>product</Button>
            <Button>product</Button>
          </Extensible>
        </div>
      </Card>
      <BaseModal modalTitle="hey" modalBody="hi" />
    </div>
  );
};

export default LeftPane;
