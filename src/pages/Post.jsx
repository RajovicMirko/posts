import "pages/Post.scss";
import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="container title">
        <span className="title">Post title</span>
      </div>

      <hr />

      <div className="container">
        <div className="text">
          lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
          ipsum, lorem ipsum,{" "}
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="controls">
          <span>Previous article</span>
          <span>Next article</span>
        </div>

        <div className="autor">
          <span>
            <small>Autor name</small>
            <p>John Doe</p>
          </span>

          <span>
            <small>Address</small>
            <p>Test author adress, 123</p>
          </span>
        </div>

        <div className="comments">
          <span className="sub-title">Comments</span>
          <div className="comment">
            <span className="comment-title">Some title</span>
            <p className="comment-text">
              Some coment text, Some coment text, Some coment text, Some coment
              text, Some coment text, Some coment text, Some coment text, Some
              coment text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
