import { useRouter } from "next/router";
import * as React from "react";
import { AppBody, AppNav, LeftPane, MainPane } from "../inc";
import ButtomNav from "../inc/ButtomNav";
import RightPane from "../inc/RightPane";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname, "app layout pathname");
  let toHide: "none" | "suggestion" | "activities";

  if (pathname === "/app/suggested") {
    toHide = "suggestion";
  } else if (pathname === "/app/activites") {
    toHide = "activities";
  } else {
    toHide = "none";
  }
  return (
    <>
      <AppNav />
      <AppBody grid>
        <LeftPane />
        <MainPane>{children}</MainPane>
        <RightPane hide={toHide} />
      </AppBody>
      <ButtomNav />
    </>
  );
};

export default AppLayout;
