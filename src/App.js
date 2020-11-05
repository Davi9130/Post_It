import React from "react";
import Home from "./Home";
import { PostStorage } from "./postStorage";

const App = () => {
  return (
    <div>
      <PostStorage>
        <Home />
      </PostStorage>
    </div>
  );
};

export default App;
