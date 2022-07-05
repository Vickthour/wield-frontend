import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Head from "next/head";
import React, { useRef } from "react";
import { Card } from "../../components/base";
import AppBody from "../../components/inc/AppBody";
import AppNav from "../../components/inc/AppNav";
import ButtomNav from "../../components/inc/ButtomNav";
import LeftPane from "../../components/inc/LeftPane";
import MainPane from "../../components/inc/MainPane";
import Post from "../../components/inc/Post";
import RightPane from "../../components/inc/RightPane";
import StoryModal from "../../components/inc/StoryModal";
import StoryPane from "../../components/inc/StoryPane";

const app = () => {
  return (
    <>
      <ProgressIndicator />
      <AppNav />
      <AppBody grid>
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
      <StoryModal />
      <ButtomNav />
    </>
  );
};

export default app;

const ProgressIndicator = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  //set window with in useEffect
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, windowWidth]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  console.log(scrollYProgress);
  return (
    <motion.div
      className="fixed top-0 left-0 z-40 h-1 bg-primaryColor"
      style={{ width: pathLength }}
    ></motion.div>
  );
};
