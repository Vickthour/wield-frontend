import React from "react";
import { Card} from "../base";
import Post from "./Post";
import StoryPane from "./StoryPane";

const MainPane = () => {
  return (
    <div className=" space-y-2 sm:col-span-6 mid:space-y-4">
      <StoryPane />
      <Card>
        <label htmlFor="NewPost" className="text-lg font-semibold">
          New Post
        </label>
        <input
          id="NewPost"
          type={"text"}
          placeholder="What are you posting today, James?"
          className="h-10 w-full rounded-full bg-gray-200   pl-4"
        />
      </Card>
      <Post />
      <Post />
    </div>
  );
};

export default MainPane;
