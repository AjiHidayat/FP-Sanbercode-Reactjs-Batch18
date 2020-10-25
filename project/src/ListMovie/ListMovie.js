import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListMovie.css";

import SideBar from "../SideBar/SideBar";

const ListMovie = () => {
  const [daftarMovie, setDaftarMovie] = useState(null);

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
    <div className="list-movie-page">
      <SideBar />
      <div className="container-card-movie">
        {daftarMovie !== null &&
          daftarMovie.map((item, index) => {
            return (
              <div key={index}>
                <div className="card">
                  <div className="image-card">
                    <img src={item.image_url} alt={item.title} />
                  </div>
                  <div className="title-card">
                    <h2>{item.title}</h2>
                    <p className="year-card">{item.year}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListMovie;
