import { Button } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
  return (
    <div className="text-center text-light sections">
      <h2>Start and Build Your Crypto Portfolio Here</h2>
      <p className="mb-4 textoHero mt-4">
        Only at CryptoCap, you can build a good portfolio and learn best
        <br />
        practices about cryptocurrency.
      </p>
      <Button className="botonHero mt-1 py-2 px-5">Get Started</Button>
    </div>
  );
};

export default Hero;
