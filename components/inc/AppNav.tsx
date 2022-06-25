import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconButton } from "../base";
import Avatar from "../base/Avatar";
import Button from "../base/Button";
import { useMid } from "../hooks/useMediaQuery";
import { Coin, NotificationP, Wallet } from "../icons";

const AppNav = () => {
  const mid=useMid()
  return (
    <nav className="fixed bg-white top-0 left-0 w-full z-20">
      <div className="container mx-auto flex h-20 items-center justify-between px-2">
        <div className="relative h-12 w-24 mid:h-20 mid:w-48">
          <Link href={"/app"}>
            <Image
              src={"/img/logo.svg"}
              quality="100"
              alt="logo"
              layout="fill"
              className="w-[20px!important]"
            />
          </Link>
        </div>
       
        <div className="flex items-center gap-4">
          <IconButton
            icon={<NotificationP size={mid?"lg":"md"} />}
            className="bg-[#FF685B0F]"
            size={mid?"lg":"md"}
            />
          <IconButton icon={<Wallet size={mid?"lg":"md"} />} 
            size={mid?"lg":"md"}
          className="bg-[#FF685B0F]" />
          <Button
            icon={<Coin size="lg" />}
            size="md"
            shape="rounded"
            iconPosition="left"
            color="pink"
            shadow={false}
            className="hidden md:flex"
          >
            2000
          </Button>
          <Avatar src="/img/avatar.png" border="none" shape="square" className="hidden md:block" />
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
