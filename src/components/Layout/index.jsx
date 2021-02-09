import "components/Layout/Layout.scss";
import React from "react";
import Header from "components/Layout/Header";

const defaultProps = {
  headerTitle: "Title sample",
  children: () => [],
};

function Layout({ headerTitle, children, ...rest }) {
  return (
    <div className="layout">
      <Header title={headerTitle} />
      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = defaultProps;
export default Layout;
