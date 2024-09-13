import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GiHomeGarage, GiScales } from "react-icons/gi";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import iphone15 from "../img/iphone15.png";
import a55 from "../img/a55.png";
import s24 from "../img/s24.png";
import ps5 from "../img/ps5.png";
import stars from "../img/stars.png";
import { useState } from "react";
const Sold = () => {
    const [liked, setLiked] = useState(false);
  return (
    <div className="container mt-16 mb-16">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                        <h1 className="text-4xl font-semibold">Çox satılanlar</h1>
                        <h1 className="text-4xl font-semibold text-black/40">Endirimli məhsullar</h1>
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
                            <button onClick={() => setLiked(!liked)}>
                                <FaHeart className="heart" color={liked ? "#FF8585" : "EAEAEA"} fill={liked ? "#FF8585" : "rgb(209 213 219)"}  size={28}/>
                            </button>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={s24}/>
                        <div className="mt-3 flex flex-col gap-1.5">
                            <p className="text-gray-400">Telefon</p>
                            <h1 className="font-medium text-lg">Samsung Galaxy S24 Ultra (SM-S928) 12 GB / 256 GB Titanium Black</h1>
                            <div className="flex gap-2">
                                <div className=" w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                </div>
                                <div className=" w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                                </div>
                                <div className=" w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                                </div>
                                <div className=" w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center">
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>1</p>
                                </div>
                            </div>
                            <ul className="flex text-sm gap-2 font-bold items-start">
                                <li className="text-blue-500 p-1.5 rounded-md bg-white border-[2px] border-blue-500 hover:text-white hover:bg-blue-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda var</p>
                                </li>
                                <li className="text-blue-700 p-1.5 rounded-md border-[2px] border-blue-100 hover:border-blue-700 bg-blue-100 hover:text-blue-100 hover:bg-blue-700 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="flex gap-2 mt-8">
                            <div className="">
                                <h2 className="line-through font-bold text-gray-400 text-sm">2699.99 AZN</h2>
                                <h1 className="font-semibold text-[22px]">2499.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-20 w-40 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500">
                                    <li>6 ay</li>
                                    <li>12 ay</li>
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">18 ay</li>
                                </ul>
                                <h1 className="text-lg font-medium">150 AZN</h1>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-[18px] bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
                    <div className="h-[700px] w-[320px] border-[2px] border-gray-300 p-5">
                        <div className="flex justify-end gap-5">
                            <GiScales size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                            <button onClick={() => setLiked(!liked)}>
                                <FaHeart className="heart" color={liked ? "#FF8585" : "EAEAEA"} fill={liked ? "#FF8585" : "rgb(209 213 219)"}  size={28}/>
                            </button>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={a55}/>
                        <div className="mt-3 flex flex-col gap-2">
                            <p className="text-gray-400">Telefon</p>
                            <h1 className="font-medium text-lg">Samsung Galaxy A55 (SM-A556) 8 GB / 256 GB Light Blue</h1>
                            <div className="flex gap-2">
                                <div className=" w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                </div>
                                <div className=" w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                                </div>
                                <div className=" w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                                </div>
                                <div className=" w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center">
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>1</p>
                                </div>
                            </div>
                            <ul className="flex text-sm gap-2 font-bold items-start">
                                <li className="text-blue-500 p-1.5 rounded-md bg-white border-[2px] border-blue-500 hover:text-white hover:bg-blue-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda var</p>
                                </li>
                                <li className="text-blue-700 p-1.5 rounded-md border-[2px] border-blue-100 hover:border-blue-700 bg-blue-100 hover:text-blue-100 hover:bg-blue-700 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="mt-10 flex gap-3 items-center">
                            <div className="">
                                <h1 className="font-semibold text-[22px]">749.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-20 w-36 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500 gap-1">
                                    <li>6 ay</li>
                                    <li>12 ay</li>
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">18 ay</li>
                                </ul>
                                <h1 className="text-lg font-medium">50 AZN</h1>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-9 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
                    <div className="h-[700px] w-[320px] border-[2px] border-gray-300 p-5">
                        <div className="flex justify-end gap-5">
                            <GiScales size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                            <button onClick={() => setLiked(!liked)}>
                                <FaHeart className="heart" color={liked ? "#FF8585" : "EAEAEA"} fill={liked ? "#FF8585" : "rgb(209 213 219)"}  size={28}/>
                            </button>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={iphone15}/>
                        <div className="mt-3 flex flex-col gap-2">
                            <p className="text-gray-400">Telefon</p>
                            <h1 className="font-medium text-lg">iPhone 15 Pro Max 256 GB Natural Titanium</h1>
                            <div className="flex gap-2">
                                <div className=" w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                </div>
                                <div className=" w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center">
                                </div>
                                <div className=" w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                </div>
                                <div className=" w-5 h-5 bg-white rounded-full flex items-center justify-center border-[1px] border-dashed border-gray-400">
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>2</p>
                                </div>
                            </div>
                            <ul className="flex text-sm gap-2 font-bold items-start">
                                <li className="text-blue-500 p-1.5 rounded-md bg-white border-[2px] border-blue-500 hover:text-white hover:bg-blue-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda var</p>
                                </li>
                                <li className="text-blue-700 p-1.5 rounded-md border-[2px] border-blue-100 hover:border-blue-700 bg-blue-100 hover:text-blue-100 hover:bg-blue-700 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="mt-10 flex gap-2">
                            <div className="">
                                <h2 className="line-through font-bold text-gray-400 text-sm">3299.99 AZN</h2>
                                <h1 className="font-semibold text-[22px]">2939.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-20 w-40 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500">
                                    <li>6 ay</li>
                                    <li>12 ay</li>
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">18 ay</li>
                                </ul>
                                <h1 className="text-lg font-medium">188.33 AZN</h1>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-8 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
                    <div className="h-[700px] w-[320px] border-[2px] border-gray-300 rounded-r-3xl p-5">
                        <div className="flex justify-end gap-5">
                            <GiScales size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
                            <button onClick={() => setLiked(!liked)}>
                                <FaHeart className="heart" color={liked ? "#FF8585" : "EAEAEA"} fill={liked ? "#FF8585" : "rgb(209 213 219)"}  size={28}/>
                            </button>
                        </div>
                        <img className="w-[250px] h-[200px] flex items-center justify-center ml-5" src={ps5}/>
                        <div className="mt-3 flex flex-col gap-2">
                            <p className="text-gray-400">Oyun konsolları</p>
                            <h1 className="font-medium text-lg">Sony PlayStation 5 Slim 1TB</h1>
                            <div className=" w-5 h-5 bg-white rounded-full flex items-center justify-center border-[1px] border-dashed border-gray-400">
                                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="w-40 h-10" src={stars}/>
                                <div className="gap-1 flex items-center text-gray-500 cursor-pointer hover:text-orange-500">
                                    <FaRegMessage />
                                    <p>4</p>
                                </div>
                            </div>
                            <ul className="flex flex-col text-sm gap-2 font-bold items-start">
                                <li className="text-blue-500 p-1.5 rounded-md bg-white border-[2px] border-blue-500 hover:text-white hover:bg-blue-500 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda var</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-[94.5px] flex items-center justify-between">
                            <div className="">
                                <h1 className="font-semibold text-[22px]">1199.99 AZN</h1>
                            </div>
                            <div className="bg-gray-100 h-auto w-36 rounded-xl flex flex-col p-3">
                                <ul className="flex justify-between text-sm items-center text-gray-500">
                                    <li>6 ay</li>
                                    <li>12 ay</li>
                                    <li className="border-[2px] border-black p-0.5 rounded-md text-black">18 ay</li>
                                </ul>
                            </div>
                        </div>
                        <button className="flex gap-1.5 px-14 py-3 mt-10 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <CiShoppingCart size={28}/>
                            <p>Səbətə əlavə et</p>
                        </button>
                    </div>
                </div>
    </div>
  );
};

export default Sold;