import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header--brand">
        <img className="header--brand_img" src="/src/images/trollFace.png" />
        <h3 className="header--brand_title">Meme Generator</h3>
      </div>
      <p className="header--text">React course - Project 3</p>
    </div>
  );
}

export default Header;
