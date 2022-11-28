import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./search.css";

function BasicCard({ result }) {
  return (
    <div className="Movie-wrapper" id="popular">
      <Card
        className="movieImage"
        style={{
          width: 300,
          height: 600,
          margin: 1,
          border: "1px solid rgb(49, 54, 61)",
          backgroundColor: "#0d1117",
          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Card.Title className="text-white titleMovie">
          {result.title}
        </Card.Title>
        <Card.Img
          className="img-fluid"
          variant="top"
          src={`${process.env.REACT_APP_TMDB_IMG_URL}/${result.poster_path}`}
        />
        <Card.Body>
          <Card.Text className="text-left titleRating">
            Rating : <></>
            {result.vote_average}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicCard;
