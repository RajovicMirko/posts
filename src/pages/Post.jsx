import "pages/Post.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { generateClassFromObject } from "utils/helpers";

import Loading from "components/Loading";

// ACTIONS
import { getPosts } from "store/actions/posts";
import { getPost } from "store/actions/post";

function Post(props) {
  const {
    history,
    posts,
    getPosts,
    getPost,
    isLoading,
    post,
    user,
    comments,
    previousId,
    nextId,
  } = props;

  const [currentPostId, setCurrentPostId] = useState(props.match.params.id);

  useEffect(() => {
    if (!posts) getPosts();
    getPost(currentPostId);
  }, [currentPostId]);

  useEffect(() => history.replace(`/posts/${currentPostId}`), [currentPostId]);

  const userFullAddress = `${user.address.city}, ${user.address.zipcode}, ${user.address.street}`;

  const Comment = ({ comment }) => (
    <div className="comment">
      <span className="comment-title">{comment.name}</span>
      <p className="comment-text">{comment.body} </p>
    </div>
  );

  const handlePrevious = () => setCurrentPostId(previousId);
  const handleNext = () => setCurrentPostId(nextId);

  const previousClass = {
    disabled: previousId === null,
  };

  const nextClass = {
    disabled: nextId === null,
  };

  switch (true) {
    case isLoading:
      return <Loading text="Loading post..." />;
    default:
      return (
        <div className="post">
          <div className="container title">
            <span className="title">{post.title}</span>
          </div>

          <hr />

          <div className="container">
            <div className="text">{post.body}</div>
          </div>

          <hr />

          <div className="container">
            <div className="controls">
              <span
                className={generateClassFromObject(previousClass)}
                onClick={handlePrevious}
              >
                Previous article
              </span>
              <span
                className={generateClassFromObject(nextClass)}
                onClick={handleNext}
              >
                Next article
              </span>
            </div>

            <div className="autor">
              <span>
                <small>Autor name</small>
                <p>{user.name}</p>
              </span>

              <span>
                <small>Address</small>
                <p>{userFullAddress}</p>
              </span>
            </div>

            <div className="comments">
              <span className="sub-title">Comments</span>
              {comments &&
                comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  const { posts } = state.posts;
  const { post, user, comments, isLoading, previousId, nextId } = state.post;

  return {
    posts,
    isLoading,
    post,
    user,
    comments,
    previousId,
    nextId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
    getPost: (postId) => dispatch(getPost(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
