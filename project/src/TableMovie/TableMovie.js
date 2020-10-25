import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TableMovie.css";
import Btn from "../Button/Button";

import SideBar from "../SideBar/SideBar";

const TableMovie = () => {
  const [daftarMovie, setDaftarMovie] = useState(null);
  const [input, setInput] = useState({
    id: null,
    title: "",
    description: "",
    year: null,
    duration: null,
    genre: "",
    rating: null,
    review: "",
    image_url: "",
  });

  useEffect(() => {
    if (daftarMovie === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then((res) => {
          setDaftarMovie(
            res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
                review: el.review,
                image_url: el.image_url,
              };
            })
          );
        });
    }
  }, [daftarMovie]);

  return (
    <div className="table-movie-page">
      <SideBar />
      <div className="container-table-movie">
        <table className="table-movie">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Year</th>
              <th>Duration</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Image</th>
              <th>Adjust</th>
            </tr>
          </thead>
          <tbody>
            {daftarMovie !== null &&
              daftarMovie.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.year}</td>
                    <td>{item.duration}</td>
                    <td>{item.genre}</td>
                    <td>{item.rating}</td>
                    <td>{item.review}</td>
                    <td>
                      <img className="image-table-movie" src={item.image_url} />
                    </td>
                    <td className="btn-adjust-table-game">
                      <div className="btn-game">
                        <Btn name="Edit" />
                      </div>
                      <div className="btn-game">
                        <Btn name="Delete" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td className="tagline-table-movie" colSpan="10">
                Keep Enjoy !
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableMovie;
