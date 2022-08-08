import { Button, Card, IconButton, Modal } from "../../base";
import SettingHeader from "../../layouts/settingHeader";
import React, { useState } from "react";
import { Edit } from "../../icons";

const AccountInformation = ({
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
      <div className="info-grid">
        {Edittable.map((Edit) => {
          return <InforEditor key={Edit.id} {...Edit} />;
        })}
      </div>
    </SettingHeader>
  );
};
const InforEditor = ({ label, value }: { label: string; value: string }) => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <label className="self-center">{label}</label>
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
      <Modal open={showModal} onClose={onClose}>
        <Card>
          <div className="mb-3 flex flex-col gap-4">
            <label htmlFor="account-name" className="text-lg font-medium">
              Change {label}
            </label>
            <input
              type="text"
              id="account-name"
              className="ring-none rounded-md border border-gray-300 py-4 px-2 outline-none focus:border-2 focus:border-orange-400"
            />
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
    </>
  );
};

const Edittable = [
  {
    id: 1,
    label: "Name",
    value: "hamzat victor olubori",
  },
  {
    id: 2,
    label: "Username",
    value: "CodeVictor",
  },
  {
    id: 3,
    label: "Email Address",
    value: "Oluwabori@test.com",
  },
  {
    id: 4,
    label: "Phone Number",
    value: "08063335678",
  },
  {
    id: 5,
    label: "Ocupation",
    value: "Software Engineer",
  },
  {
    id: 6,
    label: "Gender",
    value: "Male",
  },
  {
    id: 7,
    label: "Country",
    value: "Nigeria",
  },
  {
    id: 8,
    label: "Bio",
    value: "UI/UX Designer, UI Developer, full blooded Man Utd fan.",
  },
];
export default AccountInformation;
