import "./card.css";
import uparrow from "../../assets/uparrow.png";

const CardComponent = ({ name, img, symbol, price, priceChange }) => {
  const priceChanged = priceChange.toFixed(2);

  const priceColor = () => {
    if (priceChange > 0) {
      return "positiveText";
    } else {
      return "negativeText";
    }
  };
  return (
    <>
      <div className="cryptoCard py-4 my-2">
        <div className="d-flex align-items-center justify-content-around">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <h3 className="uppercase text-light">{symbol}</h3>
          </div>
          <div>
            <h6 className="cryptoName">{name}</h6>
          </div>
          <div>
            <img src={uparrow} alt="" />
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-around">
          <div>
            <h3 className="text-light">{"$" + price}</h3>
          </div>
          <div>
            <h4 className={priceColor()}>{priceChanged + "%"}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
