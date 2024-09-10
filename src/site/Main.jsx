import { MdOutlineTouchApp } from "react-icons/md";
import image from "../img/image.png";
import car from "../img/car.png";
import cn from "../img/cn.png";
import { GiHomeGarage, GiScales } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { FcMultipleSmartphones } from "react-icons/fc";
import { TbCarSuv } from "react-icons/tb";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { IoGiftOutline } from "react-icons/io5";
const Main = () => {
  return (
    <div className="container mt-5">
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
  )
}

export default Main;