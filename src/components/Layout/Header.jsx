import React from "react";

const defaultProps = {
  title: "Title sample",
};

function Header({ title }) {
  return (
    <header>
      <div className="container">
        <span className="title">{title}</span>
      </div>
    </header>
  );
}

export default Header;
