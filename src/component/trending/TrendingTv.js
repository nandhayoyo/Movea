import React from "react";
import Slider from "react-slick";
import "./trending.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicCard from "./Card";

import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/trending/tv/week?page=1&`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <section className="container">
      <div className="padding-card" id="trendingTv" style={{ marginTop: 90 }}>
        <h4 style={{ textAlign: "left" }}>Trending TV series..</h4>

        <Slider ref={slider} {...settings}>
          {movies.map((result, index) => {
            return <BasicCard result={result} key={index} />;
          })}
        </Slider>
      </div>
    </section>
  );
}
