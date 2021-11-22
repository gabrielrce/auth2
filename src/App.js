import Index from "./Components/Index";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Posts from "./Components/Posts";
import PostView from "./Components/PostView";
import { useSelector, useDispatch } from "react-redux";
import NotFound from "./Components/NotFound";
import React, { useEffect } from "react";
import CreatePost from "./Components/CreatePost";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { getPosts } from "./features/posts/postsThunk";
import PostCard from "./Components/PostCard";

function RequireAuth({ children }) {
  var userLogined = JSON.parse(localStorage.getItem("userlogined"));
  let location = useLocation();
  const previousPath = location.state?.from || "/";

  return !userLogined ? (
    <Navigate to="/Index" state={{ from: previousPath }} />
  ) : (
    children
  );
}
//redux saga
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Index" element={<Index />}></Route>
        <Route path="/posts" element={<PostCard />}></Route>
        <Route
          path="/posts/:id"
          element={
            // <RequireAuth> //don't know why if userLogined ===true, render stays blank
            <PostView />
            /* </RequireAuth> */
          }
        />
        <Route path="/postss/:id" element={<PostView />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
