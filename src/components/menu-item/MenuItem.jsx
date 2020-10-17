import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.scss";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="content">
        <Link to={`/${linkUrl}`}>
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </Link>
      </div>
    </div>
  );
}

export default MenuItem;
