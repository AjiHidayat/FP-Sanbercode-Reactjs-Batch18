import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TableGame.css";

import SideBar from "../SideBar/SideBar";
import Btn from "../Button/Button";

const TableGame = () => {
  const [daftarGame, setDaftarGame] = useState(null);
  const [input, setInput] = useState({
    id: null,
    name: "",
    genre: "",
    singlePlayer: null,
    multiplayer: null,
    platform: "",
    release: "",
    image_url: "",
  });

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

  const handleDelete = (event) => {
    // let idDaftarGame = parseInt(event.target.value);
    let idDaftarGame = event.target.id;
    axios
      .delete(
        `https://backendexample.sanbersy.com/api/data-game/${idDaftarGame}`
      )
      .then(() => {
        setDaftarGame(null);
      });
  };

  const handleEdit = (event) => {
    let idDaftarGame = event.target.value;
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${idDaftarGame}`)
      .then((res) => {
        let dataGame = res.data;
        setInput({
          id: idDaftarGame,
          name: dataGame.name,
          genre: dataGame.genre,
          singlePlayer: dataGame.singlePlayer,
          multiplayer: dataGame.multiplayer,
          platform: dataGame.platform,
          release: dataGame.release,
          image_url: dataGame.image_url,
        });
      });
    console.log(idDaftarGame);
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "name": {
        setInput({ ...input, name: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "single player": {
        setInput({ ...input, singlePlayer: event.target.value });
        break;
      }
      case "multi player": {
        setInput({ ...input, multiplayer: event.target.value });
        break;
      }
      case "platform": {
        setInput({ ...input, platform: event.target.value });
        break;
      }
      case "release": {
        setInput({ ...input, release: event.target.value });
        break;
      }
      case "image_url": {
        setInput({ ...input, image_url: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.id === null) {
      axios
        .post(`https://backendexample.sanbersy.com/api/data-game`, {
          id: input.id,
          name: input.name,
          genre: input.genre,
          singlePlayer: input.singlePlayer,
          multiplayer: input.multiplayer,
          platform: input.platform,
          release: input.release,
          image_url: input.image_url,
        })
        .then((res) => {
          setDaftarGame([
            ...daftarGame,
            {
              id: res.id,
              name: input.name,
              genre: input.genre,
              singlePlayer: input.singlePlayer,
              multiplayer: input.multiplayer,
              platform: input.platform,
              release: input.release,
              image_url: input.image_url,
            },
          ]);
        });
    } else {
      axios
        .put(`https://backendexample.sanbersy.com/api/data-game/${input.id}`, {
          name: input.name,
          genre: input.genre,
          singlePlayer: input.singlePlayer,
          multiplayer: input.multiplayer,
          platform: input.platform,
          release: input.release,
          image_url: input.image_url,
        })
        .then(() => {
          let dataGame = daftarGame.find((el) => el.id === input.id);
          dataGame.name = input.name;
          dataGame.genre = input.genre;
          dataGame.singlePlayer = input.singlePlayer;
          dataGame.multiplayer = input.multiplayer;
          dataGame.platform = input.platform;
          dataGame.release = input.release;
          dataGame.image_url = input.image_url;
          setDaftarGame([...daftarGame]);
        });
    }
    setInput({
      id: null,
      name: "",
      genre: "",
      singlePlayer: null,
      multiplayer: null,
      platform: "",
      release: "",
      image_url: "",
    });
  };

  return (
    <div className="table-game-page">
      <SideBar />
      <div className="container-table-game">
        <table className="table-game">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Single Player</th>
              <th>Multi Player</th>
              <th>Platform</th>
              <th>Release</th>
              <th>Image</th>
              <th>Adjust</th>
            </tr>
          </thead>
          <tbody>
            {daftarGame !== null &&
              daftarGame.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.genre}</td>
                    <td>{item.singlePlayer}</td>
                    <td>{item.multiplayer}</td>
                    <td>{item.platform}</td>
                    <td>{item.release}</td>
                    <td>
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="image-table-movie"
                      />
                    </td>
                    <td className="btn-adjust-table-game">
                      <div className="btn-game">
                        <Btn click={handleEdit} name="Edit" />
                      </div>
                      <div className="btn-game">
                        <Btn click={handleDelete} name="Delete" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td className="tagline-table-game" colSpan="9">
                For You Gamer's
              </td>
            </tr>
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            required
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <label>Genre:</label>
          <input
            type="text"
            required
            name="genre"
            value={input.genre}
            onChange={handleChange}
          />
          <label>Single Player:</label>
          <input
            type="number"
            required
            name="single player"
            value={input.singlePlayer}
            onChange={handleChange}
          />
          <label>Multi Player:</label>
          <input
            type="number"
            required
            name="multi player"
            value={input.multiplayer}
            onChange={handleChange}
          />
          <label>Platform:</label>
          <input
            type="text"
            required
            name="platform"
            value={input.platform}
            onChange={handleChange}
          />
          <label>Release:</label>
          <input
            type="text"
            required
            name="release"
            value={input.release}
            onChange={handleChange}
          />
          <label>Image:</label>
          <input
            type="text"
            required
            name="image_url"
            value={input.image_url}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TableGame;
