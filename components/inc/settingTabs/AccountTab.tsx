import { ChevronLeft, Edit } from "../../../components/icons";
import React, { useState } from "react";
import SettingHeader from "../../layouts/settingHeader";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Card, IconButton } from "../../base";
import Modal from "../../base/Modal";
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
        {activeTab==='main' && (
         <Main setTab={setActiveTab}/>
        )}
        {activeTab==='acc-info' && (
          <AccountInformation setTab={setActiveTab}/>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccountSettingTab;



const Main= ({setTab}:{setTab:React.Dispatch<React.SetStateAction<string>>})=>{
return (
  <SettingHeader
    title="Account"
    p="Account information, contact display settings, deactivate account."
  >
    <div
    onClick={()=>setTab('acc-info')}
      className="relative flex items-center justify-between py-4     pr-4 text-sm font-medium hover:bg-[#FF685B0F]"
    >
      Account Information
      <ChevronLeft size="xs" />
    </div>
    <div className="relative flex items-center justify-between py-4 pr-4 text-sm font-medium hover:bg-[#FF685B0F]">
      Display contact in profile
      <ChevronLeft size="xs" />
    </div>
    <div className="relative flex items-center justify-between py-4 pr-4 text-sm font-medium hover:bg-[#FF685B0F]">
      Change Password
      <ChevronLeft size="xs" />
    </div>
    <div className="relative flex items-center justify-between py-4 pr-4 text-sm font-medium hover:bg-[#FF685B0F]">
      Delete Account
      <ChevronLeft size="xs" />
    </div>
  </SettingHeader>
);
}
const AccountInformation= ({setTab}:{setTab:React.Dispatch<React.SetStateAction<string>>})=>{
  return (
    <SettingHeader
      title="Account Information"
      sub
      onSubClick={() => setTab("main")}
    >
      {
        Edittable.map(Edit=>{

          return <InforEditor key={Edit.id} {...Edit}/>
        })
      }
    </SettingHeader>
  );
}
const InforEditor=({label,value}:{label:string,value:string})=>{
  const [showModal,setShowModal]=useState(false)
  const onClose=() => {
      setShowModal(false);
    };
  
  return (
    <div className="flex w-full items-center gap-4">
      <label>{label}</label>
      <input
        type="text"
        className="h-12 flex-1 rounded-md bg-gray-300 pl-4 font-medium capitalize"
        value={value}
        disabled
      />
      <IconButton
        icon={<Edit size="md" />}
        color="white"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <Modal
        open={showModal}
        onClose={onClose}
      >
        <Card>
          <div className="flex flex-col gap-4 mb-3">
            <label htmlFor="account-name" className="text-lg font-medium">
              Change {label}
              </label>
            <input type="text" id="account-name" className="border outline-none border-gray-300 ring-none rounded-md py-4 px-2 focus:border-2 focus:border-orange-400"/>
          </div>

          <div className="flex justify-between">
            <Button
              shape="rounded"
              size="lg"
              outlined
              color="gray"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button shape="rounded" size="lg" type="submit">
              Save
            </Button>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
const Edittable=[
  {
    id:1,
    label:"Name",
    value:"hamzat victor olubori",
  },
  {
    id:2,
    label:"Username",
    value:"CodeVictor",
  },
  {
    id:3,
    label:"Email Address",
    value:"Oluwabori@test.com",
  },
  {
    id:4,
    label:"Phone Number",
    value:"08063335678",
  },
  {
    id:5,
    label:"Ocupation",
    value:"Software Engineer",
  },
  {
    id:6,
    label:"Gender",
    value:"Male",
  },
  {
    id:7,
    label:"Country",
    value:"Nigeria",
  },
  {
    id:8,
    label:"Bio",
    value:"UI/UX Designer, UI Developer, full blooded Man Utd fan."
  },
]