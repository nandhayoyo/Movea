import React from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../footer/Footer";
import "./search.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BasicCard from "./Card";
import { searchMovie } from "./api";

const Search = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular?page=1&`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query.results);
    }
  };

  const MovieList = () => {
    return movies.map((result, index) => {
      return <BasicCard result={result} key={index} />;
    });
  };

  return (
    <>
      <NavigationBar />
      <div>
        <h3>Find ur movies favorite</h3>
        <input
          placeholder="type by name of movies"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <MovieList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
