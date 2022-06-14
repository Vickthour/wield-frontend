import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center py-2 md:justify-start lg:pt-12  ">
      <div className="relative ">
        <Link href="/">
          <h1 className="text-4xl font-bold text-primaryColor">Logo</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
