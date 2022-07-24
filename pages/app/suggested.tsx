import React, { ReactElement } from "react";
import Suggestion from "../../components/inc/Suggestion";
import AppLayout from "../../components/layouts/AppLayout";

const suggested = () => {
  return <Suggestion main />;
};

suggested.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
export default suggested;
