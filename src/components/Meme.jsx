import React from "react";

function Meme() {
  return (
    <div className="meme">
      <form>
        <div className="meme--inputs">
          <input type="text" className="meme--input_1" />
          <input type="text" className="meme--input_2" />
        </div>
        <button type="button" className="meme--btn">
          <h3>Get a new meme image</h3>
        </button>
      </form>
    </div>
  );
}

export default Meme;
