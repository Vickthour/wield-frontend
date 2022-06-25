import Link from "next/link";
import React, { useState } from "react";
import { Card, IconButton } from "../base";
import Avatar from "../base/Avatar";
import { AddedPerson, AddPerson } from "../icons";

const Suggestion = ({ main }: { main: boolean }) => {
  return (
    <Card className="font-montserrat" px={main ? "xl" : "md"}>
      <div
        className={`${main ? "mb-8" : "mb-4"} item-center flex justify-between`}
      >
        <h2 className={`${main ? "text-3xl" : "text-xl"} font-semibold`}>
          Suggested for You
        </h2>
        <Link href={"/app/suggested"} passHref>
          <a
            href="#"
            className={`${
              main ? "hidden" : ""
            } cursor-pointer text-xl text-gray-400`}
          >
            See all
          </a>
        </Link>
      </div>
      <div className="space-y-3">
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </div>
    </Card>
  );
};
const SuggestionItem = () => {
  const [clicked, setClicked] = useState(false);
  const mockNames = [
    "James Brown",
    "Ayomide Adewunmi",
    "Joshua King",
    "Mani Queen",
  ];
  const mockReasons = [
    "Suggested for you",
    "Followed by Ella Ray",
    "Followed by Kemi Smallz",
  ];
  const mockUsers = ["avatar", "avatar2", "avatar3", "avatar4"];
  const [mockData, setMockData] = useState({
    name: mockNames[1],
    reason: mockReasons[2],
    user: mockUsers[2],
  });

  return (
    <div className="font-montserrat flex items-center gap-2 leading-4">
      <Avatar src={`/img/${mockData.user}.png`} />

      <div className="flex flex-1 flex-col">
        <h3 className="font-semibold">{mockData.name}</h3>
        <p className="text-sm text-gray-400">{mockData.reason}</p>
      </div>
      <IconButton
        icon={clicked ? <AddedPerson size="md" /> : <AddPerson size="md" />}
        color={clicked ? "gray" : "pink"}
        onClick={() => setClicked(!clicked)}
      />
    </div>
  );
};

export default Suggestion;
