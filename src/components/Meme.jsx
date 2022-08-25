import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.memes));
  });

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          placeholder="Top text"
          type="text"
          className="form--input"
          onChange={handleChange}
          name="topText"
        />
        <input
          placeholder="Bottom text"
          type="text"
          className="form--input"
          onChange={handleChange}
          name="botomText"
        />
        <button type="button" className="form--btn">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">Here we go</h2>
        <h2 className="meme--text bottom">Again</h2>
      </div>
    </main>
  );
}

export default Meme;
