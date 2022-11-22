import React, { useState } from "react";
import "./intropage.css";
// import { Form } from "react-bootstrap";
import ImageHero from "../../assets/image/joker3.jpg";
import TypeWriter from "typewriter-effect";

const IntroPage = () => {
  const [state] = useState({
    titleOne: "What movie do u want..",
    image: ImageHero,
  });

  // // const location = useLocation();

  // // const getNavLinkClass = (path) => {
  // //   return location.pathname === path ? " active" : "";
  // };
  return (
    <section className="container">
      <div className="home">
        <div className="col home-intro search-content justify-content-center align-items-center">
          <div className="row-auto">
            <div className="row">
              <h2 className="titleOne">{state.titleOne}</h2>
            </div>
            <div className="title">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Horror..", "Action..", "etc.."],
                }}
              />
            </div>
            {/* <div className={`nav-item${getNavLinkClass("/search")}`}>
              <Button className="button" type="link" href="/search">
                Find More Movies
              </Button>
            </div> */}
          </div>
        </div>
        <div className="home-image ">
          <img
            className="img-image img-1"
            style={{ marginTop: 100 }}
            src={state.image}
            alt="profilefoto"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
