import CardComponent from "./CardComponent";

const CryptoCards = ({ coins }) => {
  return (
    <div>
      <h4 className="text-light mb-4">Market Trends</h4>
      <div className="row text-center">
        {coins.map((coin) => {
          return (
            <div key={coin.name} className="col">
              <CardComponent
                name={coin.name}
                img={coin.image.small}
                symbol={coin.symbol}
                price={coin.market_data.current_price.usd}
                priceChange={coin.market_data.price_change_percentage_24h}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoCards;
