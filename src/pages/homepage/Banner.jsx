import React from "react";
import { useState, useEffect } from "react";

import styles from "./Banner.module.css";

import requests from "../../axios.request";
import axios from "../../axios.config";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  function skratit(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchMovies();
  }, []);

  return (
    <div className={styles.banner__wrapper}>
      <div
        className={styles.content__wrapper}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <div className={styles.content}>
          <h2 className={styles.heading}>
            {movie?.name || movie?.title || movie?.origin}
          </h2>
          <div className={styles.buttons__wrapper}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Play</button>
          </div>
          <p className={styles.paragraph}>{skratit(movie?.overview, 156)}</p>
        </div>
      </div>
    </div>
  );
};
