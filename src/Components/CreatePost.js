import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthError,
  selectAuthLoading,
} from "../features/authentication/authSelector";
import { createPost } from "../features/posts/postsThunk";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const loading = useSelector(selectAuthLoading);
  const { hasError, errorMessage } = error;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }))
      .unwrap()
      .then(() => {
        navigate("/posts", { replace: true });
      })
      .catch(() => {
        return;
      });
  };

  return (
    <div className="mid-row">
      {loading && <h1>Loading</h1>}
      {hasError && console.log("error")}
      <form onSubmit={submitHandler}>
        <h1>Create a new post</h1>
        <div>
          <input
            type="text"
            id="title"
            placeholder={"Title"}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <textarea
            name="body"
            id="body"
            cols="25"
            rows="5"
            minLength="1"
            placeholder={"Body"}
            required
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button type="submit" className="submit-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
