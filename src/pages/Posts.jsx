import "pages/Posts.scss";
import React from "react";
import Layout from "components/Layout";

function Posts() {
  return (
    <Layout>
      <div className="container">
        <section className="posts-page">
          <section className="controls">
            <input type="text" placeholder="Search" />
            <select>
              <option value="">Filter by author name</option>
            </select>
          </section>
          <section className="posts">
            <h1>posts list</h1>
          </section>
        </section>
      </div>
    </Layout>
  );
}

export default Posts;
