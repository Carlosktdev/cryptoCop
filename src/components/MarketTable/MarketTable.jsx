import { Button } from "react-bootstrap";
import "./marketTable.css";

const priceColor = (x) => {
  if (x > 0) {
    return "positiveText";
  } else {
    return "negativeText";
  }
};

const MarketTable = ({ shortList }) => {
  return (
    <div className="section">
      <h4 className="text-light mb-4">Market Update</h4>
      <div className="tableContainer">
        <div className="row">
          <div className="col noCol">
            <h5>NO</h5>
          </div>
          <div className="col text-start largeCol">
            <h5>NAME</h5>
          </div>
          <div className="col text-start">
            <h5>PRICE</h5>
          </div>
          <div className="col text-start">
            <h5>CHANGE 24H</h5>
          </div>
          <div className="col">
            <h5>DETAILS</h5>
          </div>
        </div>
        {shortList.map((row, index) => {
          return (
            <div className="row my-4 align-items-center">
              <div className="col noCol">{index + 1}</div>
              <div className="col d-flex align-items-center largeCol">
                <img src={row.image.small} alt="" className="me-2" />
                <h5>
                  {row.name + " | "}{" "}
                  <span className="uppercase">{row.symbol}</span>
                </h5>
              </div>
              <div className="col text-start">
                <h5>{"$" + row.market_data.current_price.usd}</h5>
              </div>
              <div className="col text-start">
                <h6
                  className={priceColor(
                    row.market_data.price_change_percentage_24h
                  )}
                >
                  {row.market_data.price_change_percentage_24h.toFixed(2) + "%"}
                </h6>
              </div>
              <div className="col">
                <Button>More Details</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketTable;
