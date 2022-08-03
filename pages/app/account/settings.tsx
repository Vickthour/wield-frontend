import { Card } from "../../../components/base";
import { ChevronLeft } from "../../../components/icons";
import React, { ReactElement } from "react";
import AccountLayout from "../../../components/layouts/AccountLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useQueryState } from "../../../components/utils/hooks";
import {
  AccountSettingTab,
  HelpSettingTab,
  PaymentMethodsTab,
  PrivacySettingTab,
  ThemeSettingTab,
} from "../../../components/inc/settingTabs";
import NotificationSettingTab from "../../../components/inc/settingTabs/NotificationSettingTab";

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

const Settings = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useQueryState({
    id: "tab",
    query: "Account",
  });
  return (
    <Card
      py="none"
      px="none"
      className=" font-roboto col-span-12 flex divide-x-2"
    >
      <div className="max-w-md flex-1">
        <h1 className="font-montserrat mt-5 py-2 pl-10 text-xl font-semibold">
          Settings
        </h1>
        {tabs.map((tab, i) => (
          <div
            key={i}
            className="relative flex items-center justify-between py-4 pl-10 pr-4 text-sm font-medium hover:bg-[#FF685B0F]
            "
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {activeTab === tab.name && (
              <motion.div
                layoutId="settingsTabSelect"
                className=" absolute right-0 top-0 h-full w-0.5 bg-primaryColor"
              ></motion.div>
            )}
            <ChevronLeft size="xs" />
          </div>
        ))}
      </div>
      <div className="flex-1 pl-10">
        <AnimatePresence exitBeforeEnter>
          {activeTab === "Account" && <AccountSettingTab />}
          {activeTab === "Payment methods" && <PaymentMethodsTab />}
          {activeTab === "Privacy and Security" && <PrivacySettingTab />}
          {activeTab === "Themes and Languages" && <ThemeSettingTab />}
          {activeTab === "Notifications" && <NotificationSettingTab />}
          {activeTab === "Help" && <HelpSettingTab />}
        </AnimatePresence>
      </div>
    </Card>
  );
};

Settings.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};
export default Settings;
