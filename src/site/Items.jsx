import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GiHomeGarage, GiScales } from "react-icons/gi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import toy from "../img/toy.png";
import thing from "../img/thing.png";
import tv from "../img/tv.png";
import clock from "../img/clock.png";
import stars from "../img/stars.png";
import acer from "../img/acer.png";
import asus from "../img/asus.png";
import beko from "../img/beko.png";
import bosch from "../img/bosch.png";
import canon from "../img/canon.png";
import hp from "../img/hp.png";
const images = [
    {
        src: asus,
    },
    {
        src: acer,
    },
    {
        src: beko,
    },
    {
        src: bosch,
    },
    {
        src: canon,
    },
    {
        src: hp,
    },
];
const Items = () => {
  return (
    <div className="container mb-10">
        <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                        <h1 className="text-4xl font-semibold">Populyar məhsullar</h1>
                        <h1 className="text-4xl font-semibold text-black/40">Yeni məhsullar</h1>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-[60px] h-[60px] bg-white cursor-pointer shadow-2xl items-center justify-center flex rounded-full hover:bg-black hover:text-white">
                            <IoArrowBack size={32}/>
                        </div>
                        <div className="w-[60px] h-[60px] bg-white cursor-pointer shadow-2xl items-center justify-center flex rounded-full hover:bg-black hover:text-white">
                            <IoArrowForward size={32}/>  
                        </div>
                    </div>
        </div>
        <div className="flex">
                    <div className="h-[700px] w-[320px] border-[2px] border-gray-300 rounded-l-3xl p-5">
                        <div className="flex justify-end gap-5">
                            <GiScales size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                            <FaHeart size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={thing}/>
                        <div className="mt-3 flex flex-col gap-2">
                            <p className="text-gray-400">Elektro ülgüc</p>
                            <h1 className="font-medium text-lg">Zelmer ZNT0300</h1>
                            <div className=" w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>1</p>
                                </div>
                            </div>
                            <ul className="flex flex-col text-sm gap-2 font-bold items-start">
                                <li className="text-orange-500 p-1.5 rounded-md bg-white border-[2px] border-orange-500 hover:text-white hover:bg-orange-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda - Məhdud sayda</p>
                                </li>
                                <li className="text-blue-600 p-1.5 rounded-md bg-blue-100 hover:text-blue-100 hover:bg-blue-600 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="mt-12 flex gap-2">
                            <div className="">
                                <h2 className="line-through font-bold text-gray-400 text-sm">39.99 AZN</h2>
                                <h1 className="font-semibold text-[22px]">29.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-20 w-40 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500">
                                    <li>6 ay</li>
                                    <li>12 ay</li>
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">18 ay</li>
                                </ul>
                                <h1 className="text-lg font-medium">2.22 AZN</h1>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-4 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
                    <div className="h-[700px] w-[320px] border-[2px] border-gray-300 p-5">
                        <div className="flex justify-end gap-5">
                            <GiScales size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                            <FaHeart size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={toy}/>
                        <div className="mt-3 flex flex-col gap-2">
                            <p className="text-gray-400">Oyuncaqlar</p>
                            <h1 className="font-medium text-lg">Computer Learning Machine Bei Tian BT-246R Toys</h1>
                            <div className=" w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>1</p>
                                </div>
                            </div>
                            <ul className="flex flex-col text-sm gap-2 font-bold items-start">
                                <li className="text-orange-500 p-1.5 rounded-md bg-white border-[2px] border-orange-500 hover:text-white hover:bg-orange-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda - Məhdud sayda</p>
                                </li>
                                <li className="text-blue-600 p-1.5 rounded-md bg-blue-100 hover:text-blue-100 hover:bg-blue-600 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="mt-5 flex gap-8 items-center">
                            <div className="">
                                <h1 className="font-semibold text-[22px]">49.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-20 w-32 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500">
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">6 ay</li>
                                </ul>
                                <h1 className="text-lg font-medium">8.33 AZN</h1>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-4 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
                    <div className="h-[700px] w-[320px] border-[2px] border-gray-300 p-5">
                        <div className="flex justify-end gap-5">
                            <GiScales size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                            <FaHeart size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={tv}/>
                        <div className="mt-3 flex flex-col gap-2">
                            <p className="text-gray-400">Televizorlar</p>
                            <h1 className="font-medium text-lg">Samsung 50" LED Smart TV 4K UHD (QE50Q60DAUXRU)</h1>
                            <div className=" w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>1</p>
                                </div>
                            </div>
                            <ul className="flex flex-col text-sm gap-2 font-bold items-start">
                                <li className="text-blue-500 p-1.5 rounded-md bg-white border-[2px] border-blue-500 hover:text-white hover:bg-blue-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda var</p>
                                </li>
                                <li className="text-blue-600 p-1.5 rounded-md bg-blue-100 hover:text-blue-100 hover:bg-blue-600 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="mt-3.5 flex gap-2">
                            <div className="">
                                <h2 className="line-through font-bold text-gray-400 text-sm">2299.99 AZN</h2>
                                <h1 className="font-semibold text-[22px]">2069.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-20 w-40 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500">
                                    <li>12 ay</li>
                                    <li>18 ay</li>
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">24 ay</li>
                                </ul>
                                <h1 className="text-lg font-medium">95.83 AZN</h1>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-4 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
                    <div className="h-[700px] w-[320px] border-[2px] border-gray-300 rounded-r-3xl p-5">
                        <div className="flex justify-end gap-5">
                            <GiScales size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                            <FaHeart size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={clock}/>
                        <div className="mt-3 flex flex-col gap-2">
                            <p className="text-gray-400">Smart saat</p>
                            <h1 className="font-medium text-lg">Haylou Solar LS05-1 Black</h1>
                            <div className=" w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>1</p>
                                </div>
                            </div>
                            <ul className="flex flex-col text-sm gap-2 font-bold items-start">
                                <li className="text-orange-500 p-1.5 rounded-md bg-white border-[2px] border-orange-500 hover:text-white hover:bg-orange-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda - Məhdud sayda</p>
                                </li>
                                <li className="text-blue-600 p-1.5 rounded-md bg-blue-100 hover:text-blue-100 hover:bg-blue-600 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="mt-12 flex gap-2 items-center">
                            <div className="">
                                <h1 className="font-semibold text-[22px]">59.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-20 w-40 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500">
                                    <li>6 ay</li>
                                    <li>12 ay</li>
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">18 ay</li>
                                </ul>
                                <h1 className="text-lg font-medium">3.33 AZN</h1>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-4 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
        </div>
        <div className="flex justify-between mt-14 items-center">
            {images.map((img , index) => (
                <div className="border border-gray-300 rounded-lg w-[200px] h-[100px] flex items-center justify-center" key={index}>
                    <img src={img.src}></img>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Items;