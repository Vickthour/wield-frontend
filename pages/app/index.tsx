import * as React from "react";
import NewPost from "../../components/inc/NewPost";
import Post from "../../components/inc/Post";
import StoryPane from "../../components/inc/StoryPane";
import AppLayout from "../../components/layouts/AppLayout";

const app = () => {
  return (
    <>
      <StoryPane />
      <NewPost/>
      <Post />
      <Post />
    </>
  );
};

app.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
export default app;
