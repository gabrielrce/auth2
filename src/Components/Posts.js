import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  useEffect(() => {});

  return (
    <>
      <Navbar />
      <h1>Welcome</h1>
    </>
  );
};

export default Posts;
