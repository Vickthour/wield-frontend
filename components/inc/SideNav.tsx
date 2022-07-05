import React from "react";
import { Card, Avatar, Button } from "../base";
import {
  Bookmark,
  Calendar,
  ConnectionIcon,
  Groups,
  Level,
  MarketStall,
  Messages,
  Refer,
} from "../icons";
import { InfoCard } from "./InfoCard";

const SideNavItems = [
  {
    name: "Connections",
    icon: <ConnectionIcon />,
  },
  {
    name: "Groups",
    icon: <Groups />,
  },
  {
    name: "Messages",
    icon: <Messages />,
  },
  {
    name: "MarketPlace",
    icon: <MarketStall />,
  },
  {
    name: "Saved",
    icon: <Bookmark className="[&>path]:fill-[#FC3E03!important]" />,
  },
  {
    name: "Events & Challenges",
    icon: <Calendar />,
  },
  {
    name: "Referral",
    icon: <Refer />,
  },
];
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
        {SideNavItems.map((item, index) => (
          <InfoCard name={item.name} icon={item.icon} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default SideNav;
