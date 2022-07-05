import React from "react";
import { IconButton } from "../base";
import Avatar from "../base/Avatar";
import Link from "next/link";
import { Home, Message, Messages, Post, Search } from "../icons";
import { useRouter } from "next/router";

const ButtomNav = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 left-0 z-20 flex h-16 w-full items-center  justify-around bg-white py-2 mid:hidden mid:justify-center  mid:gap-6">
      <IconButton.text
        text="Home"
        active={router.asPath === "/app"}
        activeClass="text-primaryColor"
        onClick={() => router.push("/app")}
        icon={<Home className="transition-all duration-500" />}
        activeIcon={
          <Home className="fill-[rgb(252,62,3)!important] transition-all duration-500" />
        }
      />
      <IconButton.text
        text="Explore"
        onClick={() => router.push("/app/Explore")}
        active={router.asPath === "/app/explore"}
        activeClass="text-primaryColor"
        icon={<Search />}
        activeIcon={
          <Search className="[&_path]:fill-[rgb(252,62,3)!important]" />
        }
      />
      <IconButton.text
        active={router.asPath === "/app/account/posts"}
        activeClass="text-primaryColor"
        onClick={() => router.push("/app/account/posts")}
        text="Post"
        icon={<Post />}
        activeIcon={
          <Post className="[&_path]:fill-[rgb(252,62,3)!important]" />
        }
      />
      <IconButton.text
        active={router.asPath === "/app/messages"}
        onClick={() => router.push("/app/messages")}
        activeClass="text-primaryColor"
        text="Messages"
        icon={<Message />}
        activeIcon={
          <Message className="[&_path]:fill-[rgb(252,62,3)!important]" />
        }
      />
      <IconButton.text
        active={router.asPath === "/app/account"}
        onClick={() => router.push("/app/account")}
        activeClass="text-primaryColor"
        text="Profile"
        icon={
          <Avatar
            src="/img/avatar.png"
            size="sm"
            border="none"
            shape="square"
          />
        }
      />
    </div>
  );
};

export default ButtomNav;
