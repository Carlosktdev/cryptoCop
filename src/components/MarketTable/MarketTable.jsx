import "./marketTable.css";
import { AiOutlineMenu } from "react-icons/ai";

const priceColor = (x) => {
  if (x > 0) {
    return "positiveText textSize";
  } else {
    return "negativeText textSize";
  }
};

const MarketTable = ({ shortList }) => {
  return (
    <div className="section">
      <h4 className="text-light mb-4">Market Update</h4>
      <div className="tableContainer p-3 text-center text-light">
        <div className="row">
          <div className="col noCol d-none d-sm-block">
            <h5>NO</h5>
          </div>
          <div className="col text-start largeCol">
            <h5 className="textSize">NAME</h5>
          </div>
          <div className="col text-start d-none d-sm-block">
            <h5 className="textSize">PRICE</h5>
          </div>
          <div className="col text-start">
            <h5 className="textSize text-center">24H</h5>
          </div>
          <div className="col">
            <h5 className="textSize">DETAILS</h5>
          </div>
        </div>
        {shortList.map((row, index) => {
          return (
            <div className="row my-4 align-items-center tableRow">
              <div className="col noCol d-none d-sm-block">{index + 1}</div>
              <div className="col d-flex align-items-center largeCol">
                <img
                  src={row.image.small}
                  alt=""
                  className="me-2 d-none d-sm-block"
                />
                <h5 className="textSize text-start">
                  {row.name}
                  <span className="uppercase d-none d-sm-inline">
                    {" | " + row.symbol}
                  </span>
                  <span className="textSize d-block d-sm-none">
                    <br />
                    {"$" + row.market_data.current_price.usd}
                  </span>
                </h5>
                <br />
              </div>
              <div className="col text-start d-none d-sm-block">
                <h5 className="textSize">
                  {"$" + row.market_data.current_price.usd}
                </h5>
              </div>
              <div className="col text-center">
                <h6
                  className={priceColor(
                    row.market_data.price_change_percentage_24h
                  )}
                >
                  {row.market_data.price_change_percentage_24h.toFixed(2) + "%"}
                </h6>
              </div>
              <div className="col clible">
                <AiOutlineMenu size={20} className="size" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketTable;
