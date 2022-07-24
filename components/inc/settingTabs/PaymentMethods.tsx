import {
  Button,
  Card,
  ErrorMessage,
  Input,
  ListBox,
} from "../../../components/base";
import {Edit } from "../../../components/icons";
import React, { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../../components/base/Modal";
import SettingHeader from "../../layouts/settingHeader";

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
    <SettingHeader
      title="Payment Methods"
      p="Your account details to get paid are saved here."
    >
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
              <ListBox<paymentMethodForm>
                control={control}
                name="bank"
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
    </SettingHeader>
  );
};

export default PaymentMethodsTab
