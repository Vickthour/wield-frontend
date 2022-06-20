import Image from "next/image";
import React from "react";
import { IconButton } from "../base";
import Avatar from "../base/Avatar";
import Button from "../base/Button";
import { Coin, NotificationP, Wallet } from "../icons";

const AppNav = () => {
  return (
    <nav className="fixed bg-white top-0 left-0 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-2">
        <Image
          src={"/img/logo.svg"}
          quality="100"
          alt="logo"
          width={152}
          height={57}
        />
        <div className="flex items-center gap-4">
          <IconButton
            icon={<NotificationP size="lg" />}
            className="bg-[#FF685B0F]"
          />
          <IconButton icon={<Wallet size="lg" />} className="bg-[#FF685B0F]" />
          <Button
            icon={<Coin size="lg" />}
            size="md"
            shape="rounded"
            iconPosition="left"
            color="pink"
            shadow={false}
          >
            2000
          </Button>
          <Avatar src="/img/avatar.png" border="none" shape="square" />
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
