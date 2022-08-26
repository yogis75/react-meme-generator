import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header--brand">
        <img
          className="header--brand_img"
          src="https://i.postimg.cc/908CDzzv/troll-Face.png"
        />
        <h3 className="header--brand_title">Meme Generator</h3>
      </div>
    </header>
  );
}

export default Header;
