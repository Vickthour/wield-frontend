import { useRouter } from "next/router";
import React, { createContext, useState } from "react";
import { AppBody, AppNav } from "../inc";
import AccountHeader from "../inc/AccountHeader";
import ButtomNav from "../inc/ButtomNav";

export const TabContext = createContext<{
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { pathname ,asPath} = router;
  console.log(pathname.split('/'), "pathname");
  const [active, setActive] = useState("Settings");
  return (
    <>
      <AppNav />
      <AppBody grid>
        <TabContext.Provider value={{ active, setActive }}>
          <AccountHeader />
          {children}
        </TabContext.Provider>
      </AppBody>

      <ButtomNav />
    </>
  );
};

export default AccountLayout;
