import {ReactNode} from "react";
import { AppBody, AppNav } from "../inc";
import AccountHeader from "../inc/AccountHeader";
import ButtomNav from "../inc/ButtomNav";

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppNav />
      <AppBody grid>
          <AccountHeader />
          {children}
      </AppBody>

      <ButtomNav />
    </>
  );
};

export default AccountLayout;
