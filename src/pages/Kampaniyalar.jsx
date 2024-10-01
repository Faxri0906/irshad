import { IoIosArrowForward } from "react-icons/io";
import car1 from "../img/car1.png";
import car2 from "../img/car2.png";
import endirim from "../img/endirim.png";
import mekteb from "../img/mekteb.png";
import redmi from "../img/redmi.png";
import redmi2 from "../img/redmi2.png";
const cards = [
    {
        img: endirim,
        subText: "6 Sentyabr - 8 Sentyabr",
        text: "6,7,8 sentyabr bizim ünvanda növbəti YAŞIL CÜMƏDİR! 🔥",
        time: "1 Gün 00:00:00",
    },
    {
        img: car1,
        subText: "1 Avqust - 15 Sentyabr",
        text: "Oyun oynamadan, alış etmədən avtomobil qazanan görmüşdün?😉",
        time: "8 Gün 00:00:00",
    },
    {
        img: car2,
        subText: "1 Sentyabr - 20 Oktyabr",
        text: "Biz Naxçıvandayıq, özü də maşınla😍",
        time: "43 Gün 00:00:00",
    },
    {
        img: mekteb,
        subText: "15 Avqust - 15 Sentyabr",
        text: "Məktəbə hazırsınız?😉Biz sizin hazır olmağınız üçün tam hazırıq!😎",
        time: "8 Gün 00:00:00",
    },
    {
        img: redmi,
        subText: "15 Avqust - 8 Sentyabr",
        text: "XİAOMİ Redmi Note 13 modelinə 150 AZN-dək endirim!🥳",
        time: "1 Gün 00:00:00",
    },
    {
        img: redmi2,
        subText: "23 Avqust - 15 Sentyabr",
        text: "Sənə hədiyyəmiz var!😊",
        time: "8 Gün 00:00:00",
    },
];
const Kampaniyalar = () => {
  return (
    <div className="container flex flex-col gap-5 mb-40 cursor-pointer">
        <p className="text-gray-400 flex gap-3 items-center">Irşad<div className="bg-black w-1 h-1 rounded-full"></div><span className="text-black">Kampaniyalar</span></p>
        <h1 className="text-4xl font-semibold">Kampaniyalar</h1>
        <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 gap-4">
            {cards.map((card , index) => (
                <div className="border-gray-400 border-[2px] rounded-xl w-[400px] h-[450px]" key={index}>
                    <img src={card.img} className="rounded-t-xl"/>
                    <div className="flex flex-col p-5 gap-20">
                        <div className="">
                            <p className="text-gray-500 text-sm font-medium">{card.subText}</p>
                            <h1 className="text-xl font-semibold">{card.text}</h1>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-orange-500 text-xl border-[2px] border-orange-500 py-2 px-5 rounded-lg">{card.time}</p>
                            <button className="flex items-center border-gray-400 border-[2px] py-2 px-5 rounded-lg text-gray-600 hover:bg-gray-600 hover:text-white hover:border-gray-600">Ətraflı<IoIosArrowForward /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Kampaniyalar;