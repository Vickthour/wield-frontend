import { Card, Input,Button } from "@components/base";
import React from "react";

const Deposit = () => {
  return (
    <Card>
      <h1 className="text-lg font-semibold">Deposit</h1>
      <div className="mt-4 md:mt-8">
        <p className="mb-2">Enter the amount you want to deposit</p>
        <Input.Bare id="deposit" type="number" className="w-full" />
      </div>
      <div className="flex gap-4 mt-3">
        <Button
          shape="rounded"
          size={"full"}
          className="py-[12px!important]"
          color={"gray"}
          outlined
        >
          Cancel
        </Button>
        <Button shape="rounded" size={"full"} className="py-4">
          Continue
        </Button>
      </div>
    </Card>
  );
};

export default Deposit;
