import "./learnCrypto.css";
import learn_1 from "../../assets/learn_1.png";
import learn_2 from "../../assets/learn_2.png";
import learn_3 from "../../assets/learn_3.png";
import learn_4 from "../../assets/learn_4.png";
import learn_5 from "../../assets/learn_5.png";
import learn_6 from "../../assets/learn_6.png";
import learn_7 from "../../assets/learn_7.png";
import LearnCard from "./LearnCard";

const cards = [
  {
    img: learn_2,
    name: "CRYPTO BASIC",
    link: "https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency",
    title: "What is cryptocurrency? all you need to know",
    text: "Cryptocurrencies are basically digital assets. It is secured by cryptography.. ",
  },
  {
    img: learn_3,
    name: "CRYPTO BASIC",
    link: "https://coinmarketcap.com/alexandria/article/will-cryptocurrencies-and-blockchain-replace-banking-and-finance",
    title: "Can crypto really replace your bank account?",
    text: "From direct deposit to earning yield, key ways crypto can help you take control..",
  },
  {
    img: learn_4,
    name: "TIPS & TRICKS",
    link: "https://www.coinbase.com/es/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet",
    title: "How to setup crypto wallet in your account",
    text: "A crypto wallet is a place where you can securely keep your crypto.. ",
  },
  {
    img: learn_5,
    name: "CRYPTO BASIC",
    link: "https://wp.nyu.edu/dispatch/6-must-know-facts-about-cryptocurrency/",
    title: "The fact about bitcoin must you know",
    text: "Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure.. ",
  },
  {
    img: learn_6,
    name: "TIPS & TRICKS",
    link: "https://www.coinbase.com/es/learn/tips-and-tutorials/dollar-cost-averaging",
    title: "When is the best time to invest in crypto?",
    text: "When prices are fluctuating, how do you know when to buy?",
  },
  {
    img: learn_7,
    link: "https://www.livemint.com/opinion/online-views/why-decentralized-finance-isn-t-just-the-wild-west-of-wall-street-11651164024463.html",
    name: "TIPS & TRICKS",
    title: "What Is DeFi? Inside the Wild West of Cryptocurrency.",
    text: "Welcome to decentralized finance or DeFi, the new frontier of crypto that will..",
  },
];

const link =
  "https://accounts.binance.com/es/register?source=nft&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gclid=Cj0KCQjwqPGUBhDwARIsANNwjV6dNC3J5fxew5OQGgFJyleH7Ls8LWB37DdskM4CcPTNQeXL0rOUsgsaAng9EALw_wcB";

const LearnCrypto = () => {
  return (
    <div className="text-center text-light">
      <h2>Learn About Cryptocurrency</h2>
      <p>Learn all about cryptocurrency to start investing</p>
      <div className="row">
        <div className="col-lg-6 col sm-12 learn_1">
          <div className="learnContainer d-none d-sm-block text-start">
            <a href={link} target="_blank" rel="noreferrer">
              <img src={learn_1} alt=""></img>
              <div className="children">
                <h3 className="mb-3 text-light">
                  All About Investing in NFTs and related risks
                </h3>
                <p className="greyBG text-light">CRYPTO BASIC</p>
              </div>
            </a>
          </div>
        </div>
        {cards.map((card) => {
          return (
            <div className="col-lg-3 col-sm-4 col-xs-12">
              <LearnCard
                img={card.img}
                name={card.name}
                link={card.link}
                title={card.title}
                text={card.text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnCrypto;
