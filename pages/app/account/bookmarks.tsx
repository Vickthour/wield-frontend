import React, { ReactElement } from "react";
import { Card } from "@components/base";
import { Post } from "@components/inc";
import AccountLayout from "@components/layouts/AccountLayout";

const Bookmark = () => {
  return (
    <>
      <Card
        px={"xl"}
        py={"lg"}
        className=" col-span-1 md:col-span-9 lg:col-span-12"
      >
        <h1 className="text-xl font-semibold">Bookmarked Posts</h1>
      </Card>
      <div className="col-span-1 grid gap-4 md:col-span-9 mid:grid-cols-2 lg:col-span-12">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default Bookmark;
Bookmark.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};
