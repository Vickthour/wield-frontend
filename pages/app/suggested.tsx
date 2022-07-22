import React from "react";
import AppBody from "../../components/inc/AppBody";
import AppNav from "../../components/inc/AppNav";
import ButtomNav from "../../components/inc/ButtomNav";
import LeftPane from "../../components/inc/LeftPane";
import MainPane from "../../components/inc/MainPane";
import RightPane from "../../components/inc/RightPane";
import Suggestion from "../../components/inc/Suggestion";

const suggested = () => {
  return (
    <>
      <AppNav />
      <AppBody grid>
        <LeftPane />
        <MainPane>
          <Suggestion main />
        </MainPane>
        <RightPane hide="suggestion" />
      </AppBody>
      <ButtomNav />
    </>
  );
};

export default suggested;
