import React from "react";
import * as htmlToImage from "html-to-image";
import { toJpeg } from "html-to-image";

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
      .then((data) => setAllMemes(data.data.memes));
  }, []);

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

  function downloadImage() {
    htmlToImage
      .toJpeg(document.getElementById("content"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "myMeme.jpeg";
        link.href = dataUrl;
        link.click();
      });
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
          name="bottomText"
        />
        <button type="button" className="form--btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme" id="content">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      <button type="button" className="download--btn" onClick={downloadImage}>
        Download Meme
      </button>
    </main>
  );
}

export default Meme;
