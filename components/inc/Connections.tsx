import React from 'react'
import Link from 'next/link'
import {Card,Avatar} from '../base'
const Connections = () => {
  return (
    <Card className="font-montserrat">
      <div className={` item-center flex justify-between`}>
        <h2 className={` font-semibold`}>Suggested for You</h2>
        <Link href={"/app/account"} passHref>
          <a href="#" className={`  cursor-pointer text-xl text-gray-400`}>
            See all
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="min flex  flex-col gap-1">
          <Avatar
            src="/img/avatar.png"
            size="wFull"
            border="none"
            shape="square"
            className="min-h-[150px]"
          />
          <h3 className="font-semibold">Ayomide Adewunmi</h3>
        </div>
        <div className="flex flex-col gap-1">
          <Avatar
            src="/img/avatar2.png"
            size="wFull"
            border="none"
            shape="square"
            className="min-h-[150px]"
          />
          <h3 className="font-semibold">Ellaquita Florence</h3>
        </div>
      </div>
    </Card>
  );
}

export default Connections