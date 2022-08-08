import React from "react";
import {motion,AnimatePresence} from "framer-motion"
import { Card, Input, Button, } from "@components/base";



const Withdraw = () => {
const [stage,setStage]=React.useState(0);
const [account,setAccount]=React.useState("");
  return (
    <Card>
      <h1 className="text-lg font-semibold">Withdraw</h1>
      {/*step 1*/}
      <AnimatePresence initial={false} >
        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
          >
            <div className="mt-4 md:mt-8">
              <div className="mb-2  flex justify-between">
                <p className="">How much do you want to withdraw</p>
                <div className="flex items-end gap-1">
                  <h5 className="text-sm text-gray-500">Wallet Balance</h5>
                  <h5 className="font-semibold text-primaryColor">230,050</h5>
                </div>
              </div>
              <Input.Bare id="deposit" type="number" className="w-full" />
            </div>
            <div className="mt-4 md:mt-8">
              <p className="mb-2">Select account</p>
              <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="w-full rounded border-2 border-gray-200 bg-gray-50 py-4 px-2 text-base  text-gray-900 outline-none focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
              </select>
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
                onClick={() => setStage(1)}
                className="py-4"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        )}
        {/* step 2 */}
        {stage === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
          >
            <div className="mt-4 md:mt-8">
              <p className=" mb-2">
                An OTP has been sent to your email, enter it below to confirm
                withdraw
              </p>
              <Input.Bare id="deposit" type="number" className="w-full" />
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
                onClick={() => setStage(1)}
                className="py-4"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default Withdraw;
