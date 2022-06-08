import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center py-2 lg:pt-12 md:justify-start  ">
      <div className="relative ">
        <Link href="/">
          <Image
            src="/../public/img/logo.png"
            width={152}
            height={57}
            alt="Weild Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;