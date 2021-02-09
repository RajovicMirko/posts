import "./Loading.scss";
import React from "react";

function Loading({ text }) {
  return (
    <div className="loading">
      <h2>{text}</h2>
    </div>
  );
}

export default Loading;
