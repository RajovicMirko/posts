import "pages/Posts.scss";
import React from "react";

import Layout from "components/Layout";
import PostCard from "components/PostCard";

function Posts() {
  const post = {
    id: "1",
    title: "Test post 1",
    body:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet",
  };

  return (
    <Layout headerTitle="Posts found: 11">
      <div className="container">
        <section className="posts-page">
          <section className="controls">
            <input type="text" placeholder="Search" />
            <select>
              <option value="">Filter by author name</option>
            </select>
          </section>
          <section className="posts">
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
            <PostCard post={post} />
          </section>
        </section>
      </div>
    </Layout>
  );
}

export default Posts;
