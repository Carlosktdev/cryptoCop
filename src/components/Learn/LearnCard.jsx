import { Card } from "react-bootstrap";
import "./learnCrypto.css";

const LearnCard = ({ img, name, title, text, link }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <Card style={{ width: "18rem" }} className="learnCard mt-2">
          <Card.Img variant="top" src={img} />
          <Card.Body className="text-dark text-start align-items-center">
            <Card.Text className="greyBG text-light">{name}</Card.Text>
            <Card.Title className="my-2 text-light">{title}</Card.Title>
            <Card.Text className="text-light">{text}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
};

export default LearnCard;
