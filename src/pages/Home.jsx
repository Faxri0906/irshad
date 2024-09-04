import { MdMenu, MdOutlineTouchApp } from "react-icons/md";
import irsad from "../img/irsad.png";
import { IoIosSearch } from "react-icons/io";
import { GiHomeGarage, GiScales } from "react-icons/gi";
import { FaFacebook, FaHeart, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { LuCreditCard } from "react-icons/lu";
import image from "../img/image.png";
import cn from "../img/cn.png";
import car from "../img/car.png";
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
import iphone15 from "../img/iphone15.png";
import a55 from "../img/a55.png";
import s24 from "../img/s24.png";
import ps5 from "../img/ps5.png";
import woman from "../img/woman.png";
import man from "../img/man.png";
import man2 from "../img/man2.png";
import qrKod from "../img/qr-kod.png";
import google from "../img/google.png";
import iphoneStore from "../img/iphoneStore.png";
import { BsShop } from "react-icons/bs";
import { FcMultipleSmartphones } from "react-icons/fc";
import { TbCarSuv } from "react-icons/tb";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { IoArrowBack, IoArrowForward, IoGiftOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { RxTriangleRight } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { TfiTwitter, TfiYoutube } from "react-icons/tfi";
import { AiFillTikTok, AiOutlineLinkedin } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
const Home = () => {
  return (
    <>
        <div className="">
            <div className="container mt-5">
                <div className="flex items-center">
                    <img className="w-28 h-20 mr-10" src={irsad}/>
                    <button className="flex items-center gap-2 bg-green-600 text-white rounded-md px-4 py-2.5 border-[2px] border-green-600 hover:bg-white hover:text-green-600 mr-3">
                        <MdMenu size={26}/><p>Kataloq</p>
                    </button>
                    <input type="text" className="border-[2px] border-gray-300 rounded-lg w-[500px] h-12 pl-6 focus-visible:outline-none"/>
                    <div className="absolute left-[865px] flex items-center">
                        <div className="w-[1px] h-7 bg-gray-300 mr-2.5"></div>
                        <IoIosSearch size={24} color="gray"/>
                    </div>
                    <ul className="flex ml-12 gap-8">
                        <li className="flex flex-col text-center items-center justify-center cursor-pointer hover:text-orange-500">
                            <GiScales size={24}/>
                            <p>Müqayisə</p>
                        </li>
                        <li className="flex flex-col text-center items-center justify-center cursor-pointer hover:text-orange-500">
                            <FaHeart size={24}/>
                            <p>Bəyəndim</p>
                        </li>
                        <li className="flex flex-col text-center items-center justify-center cursor-pointer hover:text-orange-500">
                            <CiShoppingCart size={24}/>
                            <p>Səbət</p>
                        </li>
                    </ul>
                    <button className="border-[2px] border-green-600 text-green-600 py-3 px-5 flex flex-col text-center justify-center items-center rounded-lg ml-auto hover:bg-green-600 hover:text-white">
                        <LuCreditCard size={24}/>
                        <p className="text-sm font-semibold">Aylıq ödəniş</p>
                    </button>
                </div>
                <div className="gap-5 flex mt-5">
                    <img src={image} className="rounded-xl border-[2px] border-gray-400"/>
                    <div className="w-full border-[2px] border-yellow-400 rounded-xl">
                        <div className="flex bg-yellow-400 font-semibold p-4 rounded-t-lg justify-between">
                            <p>Həftənin təklifi</p>
                            <p>01 Gün 00:00:00</p>
                        </div>
                        <div className="flex p-4">
                            <h1 className="text-xl font-bold">
                                Uşaqlar üçün elektromobil V8
                                Black
                            </h1>
                            <img className="w-[76px] h-8" src={cn}/>
                        </div>
                        <div className="flex p-4 justify-between">
                            <img className="max-w-[170px] max-h-[200px]" src={car}/>
                            <ul className="flex flex-col text-xs gap-3 font-bold items-end">
                                <li className="text-blue-600 p-1.5 rounded-md bg-blue-100 hover:text-blue-100 hover:bg-blue-600 flex gap-1.5 cursor-pointer">
                                    <GiHomeGarage size={16}/>
                                    <p>Stokda var</p>
                                </li>
                                <li className="text-orange-500 bg-orange-100 p-1 rounded-md cursor-pointer hover:text-orange-100 hover:bg-orange-500">-50 AZN nağd alışda endirim</li>
                                <li className="text-blue-600 p-1.5 rounded-md bg-blue-100 hover:text-blue-100 hover:bg-blue-600 cursor-pointer">Faizsiz təklif</li>
                            </ul>
                        </div>
                        <div className="flex gap-2.5 p-4">
                            <div className="flex flex-col">
                                <h2 className="line-through font-bold text-gray-400 text-sm">499.99 AZN</h2>
                                <h1 className="font-semibold text-[22px]">449.99 AZN</h1>
                            </div>
                            <div className="flex gap-[5px]">
                                <button className="bg-orange-500 text-white flex gap-2 items-center text-lg font-semibold px-4 rounded-lg border-[2px] border-orange-500 hover:text-orange-500 hover:bg-white">
                                    <MdOutlineTouchApp size={24}/>
                                    <p>Bir kliklə al</p>
                                </button>
                                <button className="bg-green-600 text-white p-3 rounded-lg border-[2px] border-green-600 hover:bg-white hover:text-green-600">
                                    <CiShoppingCart size={28}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 mt-[22px] w-full rounded-xl h-40 flex justify-between px-14 py-10 mb-16">
                    <div className="flex flex-col items-center justify-center text-center font-semibold text-lg">
                        <BsShop color="green" size={40}/>
                        <p>46 mağaza</p>
                    </div>
                    <div className="w-[1px] h-20 bg-gray-300"></div>
                    <div className="flex flex-col items-center justify-center text-center font-semibold text-lg">
                        <FcMultipleSmartphones color="green" size={40}/>
                        <p>40 mindən çox seçim</p>
                    </div>
                    <div className="w-[1px] h-20 bg-gray-300"></div>
                    <div className="flex flex-col items-center justify-center text-center font-semibold text-lg">
                        <TbCarSuv color="green" size={40}/>
                        <p>Sürətli çatdırılma</p>
                    </div>
                    <div className="w-[1px] h-20 bg-gray-300"></div>
                    <div className="flex flex-col items-center justify-center text-center font-semibold text-lg">
                        <HiOutlineCheckBadge color="green" size={40}/>
                        <p>Rəsmi zəmanət</p>
                    </div>
                    <div className="w-[1px] h-20 bg-gray-300"></div>
                    <div className="flex flex-col items-center justify-center text-center font-semibold text-lg">
                        <IoGiftOutline color="green" size={40}/>
                        <p>Bonus proqramı</p>
                    </div>
                    <div className="w-[1px] h-20 bg-gray-300"></div>
                    <div className="flex flex-col items-center justify-center text-center font-semibold text-lg">
                        <CiShoppingCart color="green" size={40}/>
                        <p>Sürətli alış-veriş</p>
                    </div>
                </div>
            </div>
            <div className="container mb-10">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                        <h1 className="text-4xl font-semibold">Populyar məhsullar</h1>
                        <h1 className="text-4xl font-semibold text-black/40">Yeni məhsullar</h1>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-[60px] h-[60px] bg-white cursor-pointer shadow-2xl items-center justify-center flex rounded-full hover:bg-black hover:text-white">
                            <IoArrowBack    size={32}/>
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
                    <div className="border border-gray-300 rounded-lg px-5 py-2">
                        <img src={asus}/>
                    </div>
                    <div className="border border-gray-300 rounded-lg px-5 py-2">
                        <img src={acer}/>
                    </div>
                    <div className="border border-gray-300 rounded-lg px-5 py-2">
                        <img src={beko}/>
                    </div>
                    <div className="border border-gray-300 rounded-lg px-5 py-2">
                        <img src={bosch}/>
                    </div>
                    <div className="border border-gray-300 rounded-lg px-5 py-8">
                        <img src={canon}/>
                    </div>
                    <div className="border border-gray-300 rounded-lg px-5 py-2">
                        <img src={hp}/>
                    </div>
                </div>
            </div>
            <div className="container mt-16 mb-16">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                        <h1 className="text-4xl font-semibold">Çox satılanlar</h1>
                        <h1 className="text-4xl font-semibold text-black/40">Endirimli məhsullar</h1>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-[60px] h-[60px] bg-white cursor-pointer shadow-2xl items-center justify-center flex rounded-full hover:bg-black hover:text-white">
                            <IoArrowBack    size={32}/>
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
                            <FaHeart size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
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
                            <FaHeart size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
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
                            <FaHeart size={28} className="text-gray-300 hover:text-red-500 cursor-pointer"/>
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
            <div className="container mb-16">
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <h1 className="text-4xl font-semibold">Məhsul icmalı</h1>
                        <h1 className="text-4xl font-semibold text-black/40">İrşad Youtube</h1>
                    </div>
                    <button className="flex items-center gap-4 bg-red-500 text-white p-3 text-lg font-medium rounded-xl hover:bg-white hover:text-red-500 border-[2px] border-red-500">
                        <PiYoutubeLogoFill size={28}/>
                        <p>Youtube hesabına keç</p>
                    </button>
                </div>
                <div className="mt-10 flex gap-[23px]">
                    <div className="max-w-[450px] flex flex-col gap-6">
                        <div className="relative cursor-pointer">
                            <img src={woman} className="max-w-[450px] h-[300px] rounded-xl relative"/>
                            <div className="w-20 h-20 bg-white absolute top-24 rounded-full left-48 text-green-600 hover:bg-green-600 hover:text-white items-center justify-center flex">
                                <RxTriangleRight size={64}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold text-black/80">Artıq SAMSUNG vaxtıdır.4 MƏHSUL bir arada!</h1>
                            <p className="text-black/50">Bu dəfəki yenilikləri ancaq icmalımıza sığdıra bilərdik!<span className="text-black">😍</span>
                                SAMSUNG Galaxy Z Fold6, Z Flip6, smart saatları və qulaqlığı<span className="text-black">👌🏻</span>
                                SAMSUNG'un növbəti qatlana bilən Galaxy Z Fold6 və Z Flip6 modelləri Galaxy AI sistemi ilə bütün sərhədləri aşıb!<span className="text-black">😉</span>
                                İcmalı dinlədikcə anladıq ki, bu sezon Galaxy'də əyləncənin ucu-bucağı görünmüyəcək!<span className="text-black">🤩</span>
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[450px] flex flex-col gap-6">
                        <div className="relative cursor-pointer">
                            <img src={man} className="max-w-[450px] h-[300px] rounded-xl relative"/>
                            <div className="w-20 h-20 bg-white absolute top-24 rounded-full left-48 text-green-600 hover:bg-green-600 hover:text-white items-center justify-center flex">
                                <RxTriangleRight size={64}/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-semibold text-black/80">Tıxaclardan yan keç, məsafələr gözünə görünməsin!😎</h1>
                            <p className="text-black/50 mt-4">
                                Həyatın doğru seçimlərlə dolub-daşsın deyə, növbəti məlumat dolu icmalla qarşındayıq!<span className="text-black">🥳</span>
                            </p>
                            <p className="text-black/50">
                                Seçdiyin velosipedi 18 aylıq KOMİSSİYASIZ, faizsiz və ilkin ödənişsiz şərtlərlə sənə uyğun ünvandan sifariş edə bilərsən!<span className="text-black">💚</span>
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[450px] flex flex-col gap-6">
                        <div className="relative cursor-pointer">
                            <img src={man2} className="max-w-[450px] h-[300px] rounded-xl relative"/>
                            <div className="w-20 h-20 bg-white absolute top-24 rounded-full left-48 text-green-600 hover:bg-green-600 hover:text-white items-center justify-center flex">
                                <RxTriangleRight size={64}/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-semibold text-black/80">Eşitdik ki, seçim arasında qalmısan.😉</h1>
                            <p className="text-black/50 mt-4">
                                Özümüzü tez çatdırdıq!<span className="text-black">😍</span>
                            </p>
                            <p className="text-black/50">SamsungGalaxyA35 və #SamsungGalaxyA55 5G modelləri ilə yaxından tanış ol, sizə yaxın mağazamıza gələrək və ya onlayn qaydada sifariş edərək sahib ol!<span className="text-black">💚</span></p>
                            <p className="text-black/50">
                                12 mayadək modelləri #KOMİSSİYASIZ, faizsiz və ilkin ödənişsiz şərtlərlə əldə edə bilərsən!<span className="text-black">🥳</span>
                            </p>
                            <p className="text-black/50">
                                <span className="text-black">✅</span>Mobil tətbiqdən sifariş et, 2 QAT bonus qazan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col pt-8 bg-gray-700 h-[400px] w-full rounded-3xl mb-40">
                <div className="flex gap-16 items-center pl-8 pr-8">
                    <div className="flex flex-col gap-20">
                        <h1 className="text-4xl text-white font-medium">Skan et, Qeydiyyatdan keç 20 AZN BONUS qazan!</h1>
                        <button className="flex px-14 py-3 w-64 h-14 justify-center items-center bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <p>Daha ətraflı</p>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 pr-28">
                        <img className="rounded-xl w-[250px] h-[250px]" src={qrKod}/>
                        <p className="text-gray-200 text-lg">Yükləmək üçün skan et</p>
                    </div>
                </div>
                <div className="mt-10 flex">
                    <div className="h-3 w-72 bg-green-600"></div>
                    <div className="w-5 h-5 bg-white rounded-full absolute left-[340px] top-[3789px]"></div>
                    <div className="h-3 w-full bg-orange-500"></div>
                </div>
            </div>
            <div className="mt-10 flex">
                <div className="h-3 w-[450px] bg-green-600"></div>
                <div className="w-5 h-5 bg-white rounded-full absolute left-[340px] top-[3983px]"></div>
                <div className="h-3 w-full bg-orange-500"></div>
            </div>
            <div className="bg-black/90 w-full h-[750px] flex flex-col text-gray-400 p-20 pl-28 pr-16 gap-32">
                <div className="flex gap-20">
                    <div className="flex flex-col border-[2px] border-gray-400 px-14 py-10 rounded-3xl max-w-72 gap-5">
                        <img className="rounded-lg w-44 h-44" src={qrKod}/>
                        <p className="w-44 text-center">Skan et, Qeydiyyatdan keç 20 AZN BONUS qazan!</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-2xl text-white font-semibold">Şirkət</h1>
                        <ul className="flex flex-col gap-4 text-lg font-medium w-44">
                            <li>Haqqımızda</li>
                            <li>Mağazalar</li>
                            <li>Vakansiyalar</li>
                            <li>Kampaniyalar</li>
                            <li>Şərtlərimiz</li>
                            <li>Çatdırılma qaydaları</li>
                            <li>Bonuslardan istifadə qaydaları</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-2xl text-white font-semibold">Müştəri üçün</h1>
                        <ul className="flex flex-col gap-4 text-lg font-medium">
                            <li>Sual-Cavab</li>
                            <li>Hissə-hissə ödəniş</li>
                            <li>Məxfilik siyasəti</li>
                            <li>Korporativ satışlar</li>
                            <li>İstifadə qaydaları</li>
                            <li>Bloq</li>
                            <li>Şikayət və təkliflər</li>
                        </ul>
                    </div>
                    <div className="ml-6">
                        <h1 className="text-2xl text-white font-semibold">Əlaqə</h1>
                        <div className="py-10 flex gap-3 items-center">
                            <p className="cursor-pointer text-[48px] font-bold text-green-600">
                                *<span className="text-[36px] text-white">0171</span>
                            </p>
                            <div className="w-16 h-16 cursor-pointer flex hover:bg-gray-400 justify-center items-center border-[2px] border-gray-400 rounded-full">
                                <GoHomeFill color="white" size={36}/>
                            </div>
                            <div className="flex flex-col text-lg text-white font-medium">
                                <p>Əhməd Rəcəbli 1/9,</p>
                                <p>Azərbaycan, Bakı şəhəri</p>
                            </div>
                        </div>
                        <div className="w-[380px] h-[1px] bg-gray-400"></div>
                        <div className="flex flex-col mt-6 gap-6">
                            <h1 className="text-lg text-white font-semibold">Bizi izləyin</h1>
                            <div className="flex text-3xl gap-5 cursor-pointer">
                                <RiFacebookCircleLine />
                                <FaInstagram />
                                <TfiYoutube />
                                <FaWhatsapp />
                                <FaTelegramPlane />
                                <AiFillTikTok />
                                <AiOutlineLinkedin />
                                <TfiTwitter />
                            </div>
                            <div className="flex gap-5 cursor-pointer">
                                <img className="w-44 h-14" src={google}/>
                                <img className="w-44 h-14" src={iphoneStore}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <img className="w-28 h-20" src={irsad}/>
                    <p>İrşad © 2000 - 2024. Bütün hüquqlar qorunur.</p>
                    <p>Site by Fakhri</p>
                </div>
            </div>
        </div>
    </>
  );
};

export default Home;