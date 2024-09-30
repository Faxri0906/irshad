import Main from "./Main";
import Items from "./Items";
import Sold from "./Sold";
import Youtube from "./Youtube";
import QrKod from "./QrKod";
import Line from "../components/Irshad-line/Line";
const Home = () => {
  return (
    <>
        <Main />
        <Items />
        <Sold />
        <Youtube />
        <QrKod />
        <Line />
    </>
  );
};

export default Home;