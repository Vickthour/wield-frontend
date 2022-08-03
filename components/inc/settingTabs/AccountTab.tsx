import React, { useState } from "react";
import { MoreOptions } from '..';
import SettingHeader from "../../layouts/settingHeader";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Card, IconButton } from "../../base";
import { useToggle } from "../../utils/hooks";
import Modal from "../../base/Modal";
import { DeleteAccount, AccountInformation } from ".";
const AccountSettingTab = () => {
  const [activeTab, setActiveTab] = useState("main");
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className=""
    >
      <AnimatePresence exitBeforeEnter>
        {activeTab === "main" && <Main setTab={setActiveTab} />}
        {activeTab === "acc-info" && (
          <AccountInformation setTab={setActiveTab} />
        )}
        {activeTab === "delete" && <DeleteAccount setTab={setActiveTab} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccountSettingTab;

const Main = ({
  setTab,
}: {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showModal, setShowModal] = useToggle(false);
  const [display,setDisplay]=useToggle(false)
  return (
    <SettingHeader
      title="Account"
      p="Account information, contact display settings, deactivate account."
    >
      <MoreOptions
        onClick={() => setTab("acc-info")}
        name="Account information"
      />
      <MoreOptions
        name={"Display contact in profile"}
        icon={
          <div className="flex items-center gap-0.5">
            <p>{display ? "on" : "off"}</p>
            <Switch
              label={"display contact in profile"}
              checked={display}
              onChange={setDisplay}
            />
          </div>
        }
      />
      <MoreOptions name={"Change Password"} onClick={setShowModal} />
      <Modal open={showModal} onClose={setShowModal}>
        <Card>
          <h1>Change Password</h1>
        </Card>
      </Modal>

      <MoreOptions name={"Delete account"} onClick={() => setTab("delete")} />
    </SettingHeader>
  );
};


