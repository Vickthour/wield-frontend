import { Card, Input, Button } from "@components/base";
import { Exchange } from "@components/icons";
import React from "react";
const Convert = () => {
  const [stage, setStage] = React.useState<1 | 2>(1);
  return (
    <Card>
      <h1 className="text-lg font-semibold">Convert</h1>
      <p>Convert naira to coin and vice versa</p>
      {/*step 1*/}
      {stage === 1 && (
        <div className="">
          <div className="mt-4 md:mt-8">
            <div>
              <div className="flex justify-end gap-1 ">
                <h5 className="">From:</h5>
                <h5 className="font-medium text-primaryColor">Naira</h5>
              </div>
              <Input.Bare id="deposit" type="number" className="w-full" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2 ">
                <div className="flex min-h-[50px] flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
                  <div className="w-0 flex-1  border-l"></div>
                  <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between text-xs">
                  <p className="-translate-y-1/30">1.50 Naira</p>
                  <p className="translate-y-1/10">1 Coin</p>
                </div>
              </div>
              <Exchange />
            </div>
            <div>
              <div className="flex justify-end gap-1 ">
                <h5 className="">From:</h5>
                <h5 className="font-medium text-primaryColor">Coin</h5>
              </div>
              <Input.Bare id="deposit" type="number" className="w-full" />
            </div>
          </div>
          <div className="mt-3 flex gap-4">
            <Button
              shape="rounded"
              size={"full"}
              className="py-[12px!important]"
              color={"gray"}
              outlined
            >
              Cancel
            </Button>
            <Button
              shape="rounded"
              size={"full"}
              onClick={() => setStage(2)}
              className="py-4"
            >
              Convert
            </Button>
          </div>
        </div>
      )}
      {/*step 2*/}
      {stage == 2 && (
        <div className="mt-4 space-y-4 md:mt-8">
          <div className="flex flex-col ">
            <p>You are converting naira</p>
            <div className="rounded-md bg-peach200 p-4 text-xl font-bold text-primaryColor">
              ₦45,000.00
            </div>
          </div>
          <div className="flex flex-col ">
            <p>to coin</p>
            <div className="rounded-md bg-peach200 p-4 text-xl font-bold text-primaryColor">
              43,764
            </div>
          </div>
          <div className="mt-3 flex gap-4">
            <Button
              shape="rounded"
              size={"full"}
              className="py-[12px!important]"
              color={"gray"}
              outlined
            >
              Cancel
            </Button>
            <Button
              shape="rounded"
              size={"full"}

              className="py-4"
            >
              Confirm
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Convert;
