import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-center py-2 md:justify-start lg:pt-12  ">
      <div className="relative ">
        <Link href="/">
          <Image
                src="/img/logo.png"
                alt="wield white Logo"
                width={152}
                height={57}
                priority
              />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
