import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListGame.css";

import SideBar from "../SideBar/SideBar";

const ListGame = () => {
  const [daftarGame, setDaftarGame] = useState(null);

  useEffect(() => {
    if (daftarGame === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game`)
        .then((res) => {
          setDaftarGame(
            res.data.map((el) => {
              return {
                id: el.id,
                name: el.name,
                genre: el.genre,
                singlePlayer: el.singlePlayer,
                multiplayer: el.multiplayer,
                platform: el.platform,
                release: el.release,
                image_url: el.image_url,
              };
            })
          );
        });
    }
  }, [daftarGame]);
  
  return (
    <div className="list-game-page">
      <SideBar />
      <div className="container-card-game">
        {daftarGame !== null &&
          daftarGame.map((item, index) => {
            return (
              <div key={index}>
                <div className="card">
                  <div className="image-card">
                    <img src={item.image_url} alt={item.name} />
                  </div>
                  <div className="title-card">
                    <h2>{item.name}</h2>
                    <p className="genre-card">{item.release}</p>
                    <p>{item.platform}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListGame;
