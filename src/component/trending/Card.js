import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./trending.css";

function BasicCard({ result }) {
  return (
    <Col className="movieWrapper" id="trendingTv">
      <Card
        className="movieImage"
        style={{
          width: 300,
          height: "100%",
          margin: 1,
          border: "1px solid rgb(49, 54, 61)",
          backgroundColor: "#0d1117",
          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={`${process.env.REACT_APP_TMDB_IMG_URL}/${result.poster_path}`}
        />
        <Card.Body>
          <Card.Title className="text-white">{result.title}</Card.Title>
          <Card.Text className="text-left text-white">
            Overview: <br></br>
            <br></br>
            {result.overview}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BasicCard;
