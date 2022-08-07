import React, { ReactElement } from "react";
import { Card } from "@components/base";
import {
  Location,
  EmailIcon,
  Phone,
  Globe,
  ConnectionIcon,
  FacebookIcon,
} from "@components/icons";
import { MainPane, Post } from "@components/inc";
import Connections from "@components/inc/Connections";
import { InfoCard } from "@components/inc/InfoCard";
import AccountLayout from "@components/layouts/AccountLayout";

const DetailsItem = [
  {
    name: "2,500 Connections",
    icon: <ConnectionIcon className="[&>path]:opacity-75" />,
  },
  {
    name: "Lagos,Nigeria",
    icon: <Location />,
  },
  {
    name: "coporatetumise@gmail.com",
    icon: <EmailIcon className="[&>path]:fill-[#FC3E03B2]" />,
  },
  {
    name: "08101667299",
    icon: <Phone />,
  },
  {
    name: "www.tumise.tech",
    icon: <Globe />,
  },
];
const account = () => {
  
  return (
    <>
      <div className="col-span-3 hidden flex-1   lg:block">
        <Card>
          <h1 className="text-lg font-bold">Personal Details</h1>
          <LeftMenu/>
        </Card>
      </div>
      <MainPane>
        <Card>
          <label htmlFor="NewPost" className="text-lg font-semibold">
            New Post
          </label>
          <input
            id="NewPost"
            type={"text"}
            placeholder="What are you posting today, James?"
            className="h-10 w-full rounded-full bg-gray-200   pl-4"
          />
        </Card>
        <Post />
        <Post />
      </MainPane>
      <div className="col-span-3 hidden flex-1 md:block">
        <Connections />
      </div>
    </>
  );
};


const LeftMenu=()=>{

  return (
    <div
     
      className="flex flex-col "
    >
      {DetailsItem.map((item, index) => (
        <InfoCard icon={item.icon} name={item.name} key={index} />
      ))}
    </div>
  );
}
account.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};
export default account;
