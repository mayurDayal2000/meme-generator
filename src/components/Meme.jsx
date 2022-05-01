import React from "react";

const Meme = function () {
  return (
    <main>
      <form>
        <input type="text" placeholder="Top Content" />

        <input type="text" placeholder="Bottom Content" />

        <button>Get a new meme image</button>
      </form>

      <div className="meme-display">
        <img src="" alt="" className="meme-img" />

        <h2 className="top-content-text"></h2>
        <h2 className="btm-content-text"></h2>
      </div>
    </main>
  );
};

export default Meme;
