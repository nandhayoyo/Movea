import "./App.css";

import IntroPage from "./component/intro/IntroPage";
import NavigationBar from "./component/navbar/NavigationBar";
import TrendingTv from "./component/trending/TrendingTv";
import TrendingTheater from "./component/trending/TrendingTheater";

import PopularTv from "./component/popular/PopularTv";
import PopularTheater from "./component/popular/PopularTheater";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <IntroPage />
      <PopularTv />
      <PopularTheater />
      <TrendingTv />
      <TrendingTheater />
      <Footer />
    </div>
  );
}

export default App;
