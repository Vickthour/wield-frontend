import React, { ReactElement } from "react";
import Activities from "../../components/inc/Activities";
import AppLayout from "../../components/layouts/AppLayout";

const activities = () => {
  return <Activities main />;
};

activities.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
export default activities;
