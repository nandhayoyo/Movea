import React, { Component } from "react";
import IntroPage from "../intro/IntroPage";
import NavigationBar from "../navbar/NavigationBar";
import PopularTv from "../popular/PopularTv";
import PopularTheater from "../popular/PopularTheater";
import Footer from "../footer/Footer";
import TrendingTheater from "../trending/TrendingTheater";
import TrendingTv from "../trending/TrendingTv";

export default class LandingPages extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Movea | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <NavigationBar />
        <IntroPage />
        <PopularTv />
        <PopularTheater />
        <TrendingTv />
        <TrendingTheater />
        <Footer />
      </>
    );
  }
}
