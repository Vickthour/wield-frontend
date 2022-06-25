import Link from "next/link";
import React, { useState } from "react";
import { Card, IconButton } from "../base";
import Avatar from "../base/Avatar";
import { useMid } from "../hooks/useMediaQuery";
import { AddedPerson, AddPerson } from "../icons";

const Activities = ({ main = false }: { main?: boolean }) => {
  const mid = useMid();
  return (
    <Card
      className="font-montserrat"
      px={main ? "xl" : "md"}
      py={main ? "xl" : "md"}
    >
      <div
        className={`${main ? "mb-8" : "mb-4"} item-center flex justify-between`}
      >
        {main ? (
          <h2 className="text-3xl font-semibold">Activities</h2>
        ) : (
          <h2 className="text-xl font-semibold">Activity</h2>
        )}
        <Link href="/app/activities" passHref>
            <a href="#" className={`${main ? "hidden" : ""} text-xl text-gray-400`}>
              See all
            </a>
        </Link>
      </div>
      <p className="text-semibold text-xl">Story about you</p>
      <div
        className={`${
          main ? "mb-8 mt-2" : "mb-2 mt-1"
        } flex items-center gap-2`}
      >
        <Avatar.Group
          images={[
            { src: "/img/avatar.png", alt: "emmanuel-9040" },
            { src: "/img/avatar.png", alt: "emmanuel-9040" },
            { src: "/img/avatar.png", alt: "emmanuel-9040" },
          ]}
          size={mid ? (main ? "lg" : "md") : main ? "md" : "sm"}
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
      <h3 className="font-semibold s text-xl mb-2">New</h3>
      <div className="space-y-4">
        <Notification />
        <Notification add />
        <Notification />
        <Notification add />
        <Notification />
      </div>
    </Card>
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

export default Activities;
