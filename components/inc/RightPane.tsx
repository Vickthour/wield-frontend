import React, { useState,useEffect } from "react";

import Activities from "./Activities";
import Suggestion from "./Suggestion";
import WalletCard from "./WalletCard";

const RightPane = ({ hide }: { hide: "activities" | "suggestion"|"none" }) => {
  return (
    <div className="col-span-3 hidden flex-1 md:block">
      <div className="sticky top-[90px] space-y-4">
        <WalletCard />
        {hide === "activities" ? null : (
          <Activities/>
        )}
        {hide === "suggestion" ? null : <Suggestion main={false} />}
      </div>
    </div>
  );
};

export default RightPane;
