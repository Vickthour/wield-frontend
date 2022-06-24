import React from "react";
import { Card, IconButton } from "../base";
import Avatar from "../base/Avatar";
import {Plus } from "../icons";
import Extensible from "./Extensible";
const StoryPane = () => {
 
  return (
    <Card py="sm"  className="relative pr-0" px="sm">
      <Extensible Fragment>
        <div className="w-full overflow-hidden  rounded-lg bg-white ">
          <div className="flex w-full gap-2">
            <div className="flex flex-col items-center ">
              <div className="relative">
                <Avatar.Story
                  src="/img/avatar.png"
                  state="viewed"
                  size="md"
                  alt="avatar"
                />
                <IconButton
                  icon={<Plus size="xs" />}
                  className="absolute bottom-0 right-0 "
                  size="xs"
                  color="primary"
                  shadow
                />
              </div>
              <h2 className="text-sm md:text-base text-center">Your Story</h2>
            </div>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <div className="flex flex-col items-center" key={i}>
                  <Avatar.Story
                    src="/img/avatar.png"
                    state="notviewed"
                    size="md"
                    alt="avatar"
                  />
                  <h2 className="text-center text-sm md:text-base mt-[3px]">Victor</h2>
                </div>
              );
            })}
          </div>
        </div>
      </Extensible>
    </Card>
  );
};

export default StoryPane;
