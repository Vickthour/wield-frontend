import {
  Button,
  Card,
  ErrorMessage,
  Input,
  ListBox,
} from "../../../components/base";
import { ChevronLeft, Edit } from "../../../components/icons";
import React, { ReactElement, useEffect } from "react";
import AccountLayout from "../../../components/layouts/AccountLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../components/base/Modal";
import { useQueryState } from "../../../components/utils/hooks";



const Settings = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useQueryState({
    id: "tab",
    query: "Account",
  });
  console.log(activeTab, "activeTab");
  return (
    <Card
      py="none"
      px="none"
      className=" font-roboto col-span-12 flex divide-x-2"
    >
      <div className="max-w-md flex-1">
        <h1 className="font-montserrat mt-5 py-2 pl-10 text-xl font-semibold">
          Settings
        </h1>
        {tabs.map((tab, i) => (
          <div
            key={i}
            className="relative flex items-center justify-between py-4 pl-10 pr-4 text-sm font-medium hover:bg-[#FF685B0F]
            "
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {activeTab === tab.name && (
              <motion.div
                layoutId="settingsTabSelect"
                className=" absolute right-0 top-0 h-full w-0.5 bg-primaryColor"
              ></motion.div>
            )}
            <ChevronLeft size="xs" />
          </div>
        ))}
      </div>
      <div className="flex-1 pl-10">
        <AnimatePresence exitBeforeEnter>
          {activeTab === "Account" && <AccountSettingTab />}
          {activeTab === "Payment methods" && <PaymentMethodsTab />}
          {activeTab === "Privacy and Security" && <PaymentMethodsTab />}
        </AnimatePresence>
      </div>
    </Card>
  );
};

const AccountSettingTab = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className=""
    >
      <h1 className="font-montserrat mt-5 py-2  text-xl font-semibold">
        Account
      </h1>
      <p>Account information, contact display settings, deactivate account.</p>
      <div
        className="relative flex items-center justify-between py-4     pr-4 text-sm font-medium hover:bg-[#FF685B0F]
            "
      >
        Account Information
        <ChevronLeft size="xs" />
      </div>
      <div
        className="relative flex items-center justify-between py-4 pr-4 text-sm font-medium hover:bg-[#FF685B0F]
            "
      >
        Display contact in profile
        <ChevronLeft size="xs" />
      </div>
      <div
        className="relative flex items-center justify-between py-4 pr-4 text-sm font-medium hover:bg-[#FF685B0F]
            "
      >
        Change Password
        <ChevronLeft size="xs" />
      </div>
      <div
        className="relative flex items-center justify-between py-4 pr-4 text-sm font-medium hover:bg-[#FF685B0F]
            "
      >
        Delete Account
        <ChevronLeft size="xs" />
      </div>
    </motion.div>
  );
};

interface paymentMethodForm {
  accountName: string;
  bank: string;
  accountNumber: string;
}
const PaymentMethodsTab = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [accounts, setAccounts] = React.useState([
    {
      accountName: "AJAYI AYOBAMI JOSHUA",
      bank: "United Bank of Africa",
      accountNumber: "1234567890",
    },
  ]);
  const onClose = () => {
    setShowModal(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<paymentMethodForm>();
  const onSubmit: SubmitHandler<paymentMethodForm> = (data) => {
    setAccounts([...accounts, data]);
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className=""
    >
      <h1 className="font-montserrat mt-5 py-2  text-xl font-semibold">
        Payment Methods
      </h1>
      <p>Your account details to get paid are saved here.</p>
      <div className="mt-4">
        <h4 className="mb-2 text-sm">Bank Details</h4>
        <div className="flex flex-col gap-4">
          {accounts.map((account, i) => (
            <div
              key={i}
              className="flex max-w-md items-center justify-between rounded-md bg-stone-200 p-3 pr-5"
            >
              <div>
                <h1 className="font-semibold uppercase">
                  {account.accountName}
                </h1>
                <h2 className="">{account.bank}</h2>
                <p>{account.accountNumber}</p>
              </div>
              <Edit size="md" />
            </div>
          ))}
        </div>
        <div
          className="max-w-md cursor-pointer text-center text-primaryColor"
          onClick={() => setShowModal(true)}
        >
          + Add new bank account
        </div>
        <Modal open={showModal} onClose={onClose}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card className="flex flex-col gap-4">
              <h1 className="font-medium">Add new bank account</h1>
              <ListBox
                control={control}
                formName="bank"
                label="Select Bank"
                options={[
                  {
                    name: "UBA",
                    id: "1",
                  },
                  {
                    name: "GTB",
                    id: "2",
                  },
                  {
                    name: "Acccess Bank",
                    id: "3",
                  },
                ]}
              />
              <ErrorMessage error={errors.bank?.message} />
              <Input
                label="Account number"
                type="number"
                register={register("accountNumber", {
                  required: "account number required",
                })}
                id="account number"
              />
              <ErrorMessage error={errors.accountNumber?.message} />
              <Input
                label="Account name"
                register={register("accountName", {
                  required: "account name required",
                })}
                id="account name"
              />
              <ErrorMessage error={errors.accountName?.message} />
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
          </form>
        </Modal>
      </div>
    </motion.div>
  );
};

const tabs = [
  {
    name: "Account",
  },
  {
    name: "Payment methods",
  },
  {
    name: "Contact syncing",
  },
  {
    name: "Privacy and Security",
  },
  {
    name: "Themes and Languages",
  },
  {
    name: "Notifications",
  },
  {
    name: "Help",
  },
];

Settings.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};
export default Settings;
