import React from "react";
import { IconButton } from "../base";
import Avatar from "../base/Avatar";
import { Home, Message, Messages, Post, Search } from "../icons";

const ButtomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-20 flex w-full items-center justify-around  h-16 py-2 mid:justify-center mid:gap-6 bg-white  mid:hidden">
      <IconButton.text
        text="Home"
        icon={<Home className="transition-all duration-500" />}
        activeIcon={
          <Home className="fill-[rgb(252,62,3)!important] transition-all duration-500" />
        }
      />
      <IconButton.text
        text="Search"
        icon={<Search />}
        activeIcon={
          <Search className="[&_path]:fill-[rgb(252,62,3)!important]" />
        }
      />
      <IconButton.text
        text="Post"
        icon={<Post />}
        activeIcon={
          <Post className="[&_path]:fill-[rgb(252,62,3)!important]" />
        }
      />
      <IconButton.text
        text="Messages"
        icon={<Message />}
        activeIcon={
          <Message className="[&_path]:fill-[rgb(252,62,3)!important]" />
        }
      />
      <IconButton.text
        text="Home"
        icon={<Avatar src="/img/avatar.png" size="sm" border="none" shape="square" />}
      />
    </div>
  );
};

export default ButtomNav;
