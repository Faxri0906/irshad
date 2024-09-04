import Main from "./Main";
import Items from "./Items";
import Sold from "./Sold";
import Youtube from "./Youtube";
import QrKod from "./QrKod";
import Line from "../components/Irshad-line/Line";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
        <Main />
        <Items />
        <Sold />
        <Youtube />
        <QrKod />
        <Line />
        <Footer />
    </>
  );
};

export default Home;