import React from "react";

function Meme() {
  return (
    <div className="meme">
      <div className="meme--inputs">
        <input type="text" className="meme--input_1" />
        <input type="text" className="meme--input_2" />
      </div>
      <button type="button" className="meme--btn">
        Get a new meme image
      </button>
    </div>
  );
}

export default Meme;
