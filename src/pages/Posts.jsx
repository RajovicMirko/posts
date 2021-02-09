import "pages/Posts.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Layout from "components/Layout";
import PostCard from "components/PostCard";
import Loading from "components/Loading";
import Pagination from "components/Pagination";

// ACTIONS
import { getPosts } from "store/actions/posts";

function Posts(props) {
  const { posts, postsFound, getPosts, isLoading } = props;
  const [perPage, setPerPage] = useState(11);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => getPosts(), []);

  useEffect(() => {
    doPagination();
    if (searchValue) doSearch();
  }, [posts, currentPage, searchValue]);

  const doSearch = () => {
    const searchedPosts = posts.filter((post) => {
      return (
        post.title.indexOf(searchValue) !== -1 ||
        post.body.indexOf(searchValue) !== -1
      );
    });

    setFilteredPosts(searchedPosts);
  };

  const doPagination = () => {
    const to = perPage * currentPage;
    const from = to - perPage;
    const postsVisible = posts.slice(from, to);
    setFilteredPosts(postsVisible);
  };

  const handleSearch = (event) => setSearchValue(event.target.value);
  const handlePagination = (currentPage) => setCurrentPage(currentPage);

  const postsCards = filteredPosts.map((post) => (
    <PostCard key={post.id} post={post} />
  ));

  return isLoading ? (
    <Loading text="Loading posts..." />
  ) : (
    <Layout headerTitle={`Posts found: ${postsFound}`}>
      <div className="container">
        <section className="posts-page">
          <section className="controls">
            <input type="text" placeholder="Search" onChange={handleSearch} />
            <select>
              <option value="">Filter by author name</option>
            </select>
          </section>

          <section className="posts">{postsCards}</section>

          {filteredPosts.length >= perPage && (
            <Pagination
              dataLength={posts.length}
              perPage={perPage}
              currentPage={currentPage}
              onClick={handlePagination}
            />
          )}
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
