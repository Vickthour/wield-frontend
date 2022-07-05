import React from "react";
import Avatar from "../components/base/Avatar";
import BaseModal from "../components/base/BaseModal";
import Button from "../components/base/Button";
import { EmailIcon } from "../components/icons";
import Navbar from "../components/inc/Navbar";

const ComponentTest = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main>
      <Navbar />
      <div className=" min-h-screen gap-4 bg-gray-200">
        <h1 className="text-xl">Button</h1>
        <Button
          outlined
          shape="rounded"
          size="md"
          icon={<EmailIcon />}
          iconPosition="right"
        >
          Hello
        </Button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          <span
            className="inline-block h-4 w-4 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white"
            role="status"
            aria-label="loading"
          ></span>
          Loading
        </button>
        <Avatar
          src="/img/avatar.png"
          shape="square"
          size="sm"
          color="none"
          alt="avatar"
        />
        <Avatar.Story
          src="/img/avatar.png"
          state="viewed"
          size="lg"
          alt="avatar"
        />
        <Avatar.Group
          images={[
            { src: "/img/avatar.png", alt: "emmanuel-9040" },
            { src: "/img/avatar.png", alt: "emmanuel-9040" },
            { src: "/img/avatar.png", alt: "emmanuel-9040" },
          ]}
          size="sm"
          animated
          space="md"
          color="white"
        />
        <div className="z-1 relative">
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <BaseModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            modalBody="Test Body"
            modalTitle="test 001 002"
          />
        </div>
      </div>
    </main>
  );
};

export default ComponentTest;
