import "pages/Posts.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Layout from "components/Layout";
import PostCard from "components/PostCard";
import Loading from "components/Loading";

// ACTIONS
import { getPosts } from "store/actions/posts";

function Posts(props) {
  const { posts, postsFound, getPosts, isLoading } = props;

  useEffect(() => getPosts(), []);

  const postsCards = posts.map((post) => (
    <PostCard key={post.id} post={post} />
  ));

  return isLoading ? (
    <Loading text="Loading posts..." />
  ) : (
    <Layout headerTitle={`Posts found: ${postsFound}`}>
      <div className="container">
        <section className="posts-page">
          <section className="controls">
            <input type="text" placeholder="Search" />
            <select>
              <option value="">Filter by author name</option>
            </select>
          </section>
          <section className="posts">{postsCards}</section>
        </section>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { posts, isLoading } = state.posts;

  return {
    posts,
    postsFound: posts.length,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
