import { motion } from "framer-motion";
import React from "react";
import { Card } from "../base";
import { ChevronLeft } from "../icons";

export const SettingsTab = () => {
  const [activeTab,setActiveTab] = React.useState(tabs[0].name);
  return (
    <Card py="none" px="none" className=" col-span-12 flex divide-x-2 ">
      <div className="max-w-md flex-1">
        <h1 className="font-montserrat mt-5 py-2 pl-10 text-xl font-semibold">
          Settings
        </h1>
        {tabs.map((tab, i) => (
          <div
            key={i}
            className="flex relative items-center justify-between py-4 pl-10 pr-4 text-sm font-medium hover:bg-[#FF685B0F]
            "
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {
              activeTab === tab.name && (
                <motion.div layoutId="settingsTabSelect" className=" h-full w-0.5 bg-primaryColor right-0 top-0 absolute">
                </motion.div>
              )
            }
            <ChevronLeft size="xs" />
          </div>
        ))}
      </div>
      <div className="flex-1 pl-10">
        <h1 className="font-montserrat mt-5 py-2  text-xl font-semibold">
          Account
        </h1>
        <p className="font-roboto">
          Account information, contact display settings, deactivate account.
        </p>
      </div>
    </Card>
  );
};
const tabs = [
  {
    name: "Account",
  },
  {
    name: "Payment methods",
  },
  {
    name: "Contact syncing",
  },
  {
    name: "Privacy and Security",
  },
  {
    name: "Themes and Languages",
  },
  {
    name: "Notifications",
  },
  {
    name: "Help",
  },
];

