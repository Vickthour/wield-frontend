import React from 'react'
import { Card,Input,Button } from '@components/base';
const Transfer = () => {
  const [stage, setStage] = React.useState<1 | 2|3>(1);

  const navigate=()=>{
    switch (stage) {
        case 1:
            setStage(2);
            break;
        case 2:
            setStage(3);
        default:
            break;
    }
  }
  return (
    <Card>
      <h1 className="text-lg font-semibold">Transfer</h1>
      {stage === 1 && (
        <div className="mt-4 md:mt-8">
          <p className="mb-2">Enter the amount of coin you want to transfer</p>
          <Input.Bare id="deposit" type="number" className="w-full" />
        </div>
      )}
      {stage === 2 && (
        <div className="mt-4 md:mt-8">
          <p className="mb-2">Enter the username you’re transfering to</p>
          <Input.Bare id="deposit" type="number" className="w-full" />
        </div>
      )}
      {
        stage===3 &&(
         <div className="mt-4 space-y-4 md:mt-8">
          <div className="flex flex-col ">
            <p>You are transfering</p>
            <div className="rounded-md bg-peach200 p-4 text-xl font-bold text-primaryColor">
              2,000
            </div>
          </div>
          <div className="flex flex-col ">
            <p>to </p>
            <div className="rounded-md bg-peach200 p-4 text-xl font-bold text-primaryColor">
              @ellaray
            </div>
          </div>
          </div>

        )
      }
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
        <Button shape="rounded" size={"full"} onClick={navigate} className="py-4">
          Continue
        </Button>
      </div>
    </Card>
  );
}

export default Transfer