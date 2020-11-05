import React from "react";
import Post from "./Post";
import { PostStorage } from "./postStorage";

const Posts = () => {
  return (
    <div>
      <PostStorage>
        <Post />
      </PostStorage>
    </div>
  );
};

export default Posts;
