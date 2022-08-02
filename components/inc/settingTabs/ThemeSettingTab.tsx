import React from "react";
import {useForm} from 'react-hook-form'
import { Modal,Card,ListBox, Button } from "../../base";
import SettingHeader from "../../layouts/settingHeader";
import { useToggle } from "../../utils/hooks";
import MoreOptions from "../MoreOptions";

interface languages{
    language:string
}
const ThemeSettingTab = () => {
    const [showModal,setShowModal]=useToggle()
      const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
      } = useForm<languages>();
  return (
    <SettingHeader
      title="Themes and Languages"
      p="Switch between themes and langauges"
    >
      <div className="mb-4 space-y-4 ">
        <div className="flex items-center justify-between ">
          <h4>Light</h4>
          <input
            type="checkbox"
            className="flex h-6 w-10 items-center justify-center rounded-full bg-gray-200 p-1"
          />
        </div>
        <div className="flex justify-between">
          <h4>Dark</h4>
          <input
            type="checkbox"
            className="flex h-6 w-10 items-center justify-center rounded-full bg-gray-200 p-1"
          />
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold">Languages</h1>
        <MoreOptions name="Deafault language(English)" onClick={setShowModal} />
        <Modal open={showModal} onClose={setShowModal}>
          <Card>
            <h1 className="mb-4 font-semibold">Change Language</h1>
            <ListBox<languages>
              control={control}
              name="language"
              className="mb-4"
              label="Select Language"
              options={[
                {
                  name: "English",
                  id: "1",
                },
                {
                  name: "French",
                  id: "2",
                },
                {
                  name: "Spanish",
                  id: "3",
                },
              ]}
            />
            <div className="flex gap-[20%] ">
              <Button
                shape="rounded"
                size="full"
                color="gray"
                outlined
                type="submit"
              >
                Save
              </Button>
              <Button shape="rounded" size="full" type="submit">
                Save
              </Button>
            </div>
          </Card>
        </Modal>
      </div>
    </SettingHeader>
  );
};

export default ThemeSettingTab;
