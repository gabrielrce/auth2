import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated } from "../features/authentication/authSelector";

const PostCard = ({ postData }) => {
  const { id, title } = postData;
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuthenticated);

  const readHandler = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div key={id} className={`card`}>
      <div className={`card-content`}>
        <p>{title}</p>
        <button className="card-btn" onClick={readHandler}>
          Read
        </button>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default PostCard;
