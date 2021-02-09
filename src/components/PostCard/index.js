import "./post-card.scss";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <Link to={`/posts/${post.id.toString()}`} className="post-card">
    <span className="title">{post.title}</span>
    <p className="desc">{post.body.slice(0, 100)}...</p>
    <span className="link">
      Read More <i className="fas fa-arrow-right"></i>
    </span>
  </Link>
);

export default PostCard;
