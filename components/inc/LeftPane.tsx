import React from "react";
import { Card } from "../base";
import Button from "../base/Button";
import Extensible from "./Extensible";
import SideNav from "./SideNav";
import Image from "next/image";

const LeftPane = () => {
  return (
    <div className="col-span-3 hidden flex-1   lg:block">
      <div className="sticky top-[90px] space-y-4 ">
        <SideNav />
        <Card className="pr-0">
          <div className="flex justify-between pr-4">
            <h1 className="text-lg font-bold">Explore</h1>
            <p>see more </p>
          </div>
          <div className="relative">
            <Extensible className=" flex gap-2 overflow-hidden ">
              <Button>product</Button>
              <Button>product</Button>
              <Button>product</Button>
              <Button>product</Button>
            </Extensible>
          </div>
          <div className="mt-4 space-y-2 pr-2">
            
            <div className="grid grid-cols-2 grid-rows-[150px_150px] gap-2">
              <div className="relative w-full">
                <Image
                  src="/img/ex1.png"
                  alt="alke9"
                  layout="fill"
                  className="w-full object-contain"
                  objectFit="contain"
                />
              </div>
              <div className="relative row-span-2 w-full object-contain">
                <Image
                  src="/img/ex2.png"
                  alt="ea9330"
                  className=""
                  layout="fill"
                />
              </div>
              <div className="relative w-full">
                <Image
                  src="/img/ex3.png"
                  alt="alke9"
                  layout="fill"
                  className="w-full object-contain"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-[150px_150px] gap-2">
              <div className="relative row-span-2 w-full object-contain">
                <Image
                  src="/img/ex2.png"
                  alt="ea9330"
                  className=""
                  layout="fill"
                />
              </div>
              <div className="relative w-full">
                <Image
                  src="/img/ex1.png"
                  alt="alke9"
                  layout="fill"
                  className="w-full object-contain"
                  objectFit="contain"
                />
              </div>
              <div className="relative w-full">
                <Image
                  src="/img/ex3.png"
                  alt="alke9"
                  layout="fill"
                  className="w-full object-contain"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LeftPane;
