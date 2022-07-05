import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, useEffect, useState } from "react";
import { IconButton } from "../base";
import Avatar from "../base/Avatar";
import Button from "../base/Button";
import { useMid } from "../utils/hooks/useMediaQuery";
import { Coin, Hamburger, NotificationP, Wallet } from "../icons";
import  {ResponsiveVariant as RV} from "../utils/responsiveVariant";
const AppNav = () => {
     const mid = useMid();
  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-2">
        <div className="relative h-12 w-24 mid:h-20 mid:w-48">
          <Link href={"/app"} passHref>
            <a href="#">
              <Image
                src={"/img/logo.svg"}
                quality="100"
                alt="logo"
                layout="fill"
                className="w-[20px!important]"
              />
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <IconButton
            icon={<NotificationP size={"lg"} />}
            // className="bg-[#FF685B0F]"
            color={RV({
              "@initial": "white",
              "@md": "primary",
              "@lg":"pink",
              "@xl":"gray"
            })}
            size={mid ? "lg" : "md"}
          />
          {/* <IconButton icon={<Wallet size={mid?"lg":"md"} />} 
            size={mid?"lg":"md"}
          className="bg-[#FF685B0F]" /> */}
          <IconButton
            className="md:hidden"
            color="white"
            icon={<Hamburger />}
          />
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
          <Link href="/app/account" passHref>
            <a href="#">
              <Avatar
                src="/img/avatar.png"
                border="none"
                shape="square"
                className="hidden md:block"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
