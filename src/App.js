import "./App.css";
import Search from "./component/search/Search";
import LandingPages from "./component/landingPages/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPages />}></Route>
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
