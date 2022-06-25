import Head from "next/head";
import React from "react";
import { Card } from "../../components/base";
import AppBody from "../../components/inc/AppBody";
import AppNav from "../../components/inc/AppNav";
import ButtomNav from "../../components/inc/ButtomNav";
import LeftPane from "../../components/inc/LeftPane";
import MainPane from "../../components/inc/MainPane";
import Post from "../../components/inc/Post";
import RightPane from "../../components/inc/RightPane";
import StoryPane from "../../components/inc/StoryPane";

const app = () => {
  return (
    <>
      <AppNav />
      <AppBody>
        <LeftPane />
        <MainPane>
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
        </MainPane>
        <RightPane hide="none" />
      </AppBody>
      <ButtomNav />
    </>
  );
};

export default app;
