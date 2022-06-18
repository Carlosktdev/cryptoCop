import { Container } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-light ">
            <h3>
              Crypto<span className="cop">Cop</span>
            </h3>
          </div>
          <div className="text-light">
            <h5>2021 CoinMarketCap. All rights reserved</h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
