import React from "react";

function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" />
        <input type="text" className="form--input" />
        <button type="button" className="form--btn">
          Get a new meme image
        </button>
      </form>
    </main>
  );
}

export default Meme;
