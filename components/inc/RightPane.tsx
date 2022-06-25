import React, { useState } from "react";
import { Card, IconButton } from "../base";
import Avatar from "../base/Avatar";
import { useMid } from "../hooks/useMediaQuery";
import { AddedPerson, AddPerson } from "../icons";

const RightPane = () => {
  const mid = useMid();

  return (
    <div className="col-span-3 hidden flex-1 md:block">
      <div className="sticky top-[90px] space-y-4">
        <Card className="font-montserrat">
          <div className="item-center flex justify-between">
            <h2 className="text-xl font-semibold">Activity</h2>
            <h3 className="text-xl text-gray-400">See all</h3>
          </div>
          <p className="text-semibold text-xl">Story about you</p>
          <div className="flex items-center">
            <Avatar.Group
              images={[
                { src: "/img/avatar.png", alt: "emmanuel-9040" },
                { src: "/img/avatar.png", alt: "emmanuel-9040" },
                { src: "/img/avatar.png", alt: "emmanuel-9040" },
              ]}
              size={mid ? "md" : "sm"}
              space={mid ? "lg" : "md"}
              border="white"
            />
            <div>
              <h3 className="text-sm font-semibold md:text-base">Mentions</h3>
              <p className="text-xs font-medium text-gray-400 md:text-sm">
                {" "}
                2 stories mentions you
              </p>
            </div>
          </div>
          <h3 className="text-semibold s text-xl">New</h3>
          <div className="space-y-4">
            <Notification />
            <Notification add />
            <Notification />
            <Notification add />
            <Notification />
          </div>
        </Card>
        <Card className="font-montserrat">
          <div className="item-center flex justify-between">
            <h2 className="text-xl font-semibold">suggested for you</h2>
            <h3 className="text-xl text-gray-400">See all</h3>
          </div>
          <div className="space-y-4">
            <Notification add />
            <Notification add />
            <Notification add />
            <Notification add />
            <Notification add />
          </div>
        </Card>
      </div>
    </div>
  );
};
const Notification = ({ add }: { add?: boolean }) => {
  const [clicked, setClicked] = useState(false);
  if (add) {
    return (
      <div className="font-montserrat flex items-center gap-2 leading-4">
        <Avatar src="/img/avatar.png" />

        <h4 className="flex-1">
          <span className="font-medium">Ella Ray</span> Started following you.{" "}
          <span className="text-gray-400">4m</span>
        </h4>
        <IconButton
          icon={clicked ? <AddedPerson size="md" /> : <AddPerson size="md" />}
          color={clicked ? "gray" : "pink"}
          onClick={() => setClicked(!clicked)}
        />
      </div>
    );
  }
  return (
    <div className="font-montserrat flex items-center gap-2 leading-4">
      <Avatar src="/img/avatar.png" />

      <h4 className="flex-1">
        <span className="font-medium">Ella Ray</span> Started following you.{" "}
        <span className="text-gray-400">4m</span>
      </h4>
      <Avatar src="/img/avatar.png" border="none" />
    </div>
  );
};

export default RightPane;
