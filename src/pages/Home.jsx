import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CryptoCards from "../components/CryptoCards/CryptoCards";
import Hero from "../components/Hero/Hero";
import MarketTable from "../components/MarketTable/MarketTable";
import NavBar from "../components/NavBar/NavBar";
import api from "../api/api";
import LearnCrypto from "../components/Learn/LearnCrypto";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [shortList, setShortList] = useState([]);

  const getCoins = async () => {
    const coinList = await api.get("/coins");
    const btc = coinList.data[0];
    const eth = coinList.data[1];
    const usdt = coinList.data[2];
    const bnb = coinList.data[4];
    const short = coinList.data.slice(0, 10);
    setShortList(short);
    setCoins([btc, eth, usdt, bnb]);
  };

  useEffect(() => {
    getCoins();
  }, []);
  return (
    <>
      <Container>
        <NavBar />
        <Hero />
        <CryptoCards coins={coins} />
        <MarketTable shortList={shortList} />
        <LearnCrypto />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
