import React from "react";
import API_CALL from "../API_CALL.json";

const Meme = function () {
  const [memeFound, setMemeFound] = React.useState([]);
  const [randomMeme, setRandomMeme] = React.useState({
    topContent: "",
    btmContent: "",
    memeUsed: "",
  });

  React.useEffect(() => {
    fetch(API_CALL.API_URL)
      .then((response) => response.json())
      .then((memeData) => setMemeFound(memeData.data.memes));
  }, []);

  const handleNewMeme = function (event) {
    event.preventDefault();
    const randomMeme = Math.floor(Math.random() * memeFound.length);

    setRandomMeme((prev) => {
      return {
        ...prev,
        memeUsed: memeFound[randomMeme],
      };
    });
  };

  const handleContent = function (event) {
    const { name, value } = event.target;

    setRandomMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="Top Content"
          name="topContent"
          onChange={handleContent}
          value={randomMeme.topContent}
        />

        <input
          type="text"
          placeholder="Bottom Content"
          name="btmContent"
          onChange={handleContent}
          value={randomMeme.btmContent}
        />

        <button onClick={handleNewMeme}>Get a new meme image</button>
      </form>

      <div className="meme-display">
        <img
          src={randomMeme.memeUsed.url}
          alt={randomMeme.memeUsed.name}
          className="meme-img"
        />

        <h2 className="top-content-text">{randomMeme.topContent}</h2>
        <h2 className="btm-content-text">{randomMeme.btmContent}</h2>
      </div>
    </main>
  );
};

export default Meme;
