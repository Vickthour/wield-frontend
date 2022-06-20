import React from "react";
import { Card } from "../base";
import Avatar from "../base/Avatar";
import Button from "../base/Button";
import { Connections, Groups, Level, Messages } from "../icons";

const SideNav = () => {
  return (
    <Card className="">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Avatar src="/img/avatar.png" border="none" shape="square" />
          <h2 className="font-semibold">Segun James</h2>
        </div>
        <Button color="pink" icon={<Level />} iconPosition="left">
          Lv1
        </Button>
      </div>
      <div>
        <div className="flex gap-2 rounded-lg py-3 px-1 hover:bg-[#FF685B0F]">
          <Connections />
          <h1 className="font-medium">Connections</h1>
        </div>
        <div className="flex gap-2 rounded-lg py-3 px-1 hover:bg-[#FF685B0F]">
          <Groups />
          <h1 className="font-medium">Groups</h1>
        </div>
        <div className="flex gap-2 rounded-lg py-3 px-1 hover:bg-[#FF685B0F]">
          <Messages />
          <h1 className="font-medium">Groups</h1>
        </div>
        <div className="flex gap-2 rounded-lg py-3 px-1 hover:bg-[#FF685B0F]">
          <Connections />
          <h1 className="font-medium">Connections</h1>
        </div>
        <div className="flex gap-2 rounded-lg py-3 px-1 hover:bg-[#FF685B0F]">
          <Groups />
          <h1 className="font-medium">Groups</h1>
        </div>
        <div className="flex gap-2 rounded-lg py-3 px-1 hover:bg-[#FF685B0F]">
          <Messages />
          <h1 className="font-medium">Groups</h1>
        </div>
      </div>
    </Card>
  );
};

export default SideNav;
