import React from "react";
import { Button } from "../../base";
import SettingHeader from "../../layouts/settingHeader";

const DeleteAccount = ({
  setTab,
}: {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <SettingHeader
      title="Account Information"
      sub
      onSubClick={() => setTab("main")}
    >
      <div>
        <h1 className="text-lg font-semibold">
          Your Account will be permanently deleted
        </h1>
        <p>
          You’re about to delete your Wield account. Your display name,
          @username, and public profile will no longer be viewable on wield.com
        </p>
      </div>
      <Button>
        DELETE
      </Button>
    </SettingHeader>
  );
};

export default DeleteAccount;
