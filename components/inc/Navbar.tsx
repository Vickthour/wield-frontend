import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center py-2 md:justify-start lg:pt-12  ">
      <div className="relative ">
        <Link href="/">
          <Image
            src="/img/wield.png"
            width={142}
            height={40}
            alt="Weild Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
