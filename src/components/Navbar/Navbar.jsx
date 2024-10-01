import { FaApple, FaHeart, FaRegUser } from "react-icons/fa";
import az from "../../img/az.png";
import irsad from "../../img/irsad.png";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { GiScales } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { LuCreditCard } from "react-icons/lu";
const Navbar = () => {
  return (
    <>
        <header className="flex container h-[72px]">
            <nav className="flex justify-between items-center">
                <ul className="flex items-center gap-3 absolute top-[26px] md:top-4 xl:top-4 left-1 text-sm sm:text-base 2xl:left-24">
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black text-gray-500">
                        <a href="/kampaniyalar">
                            Kampaniyalar
                        </a>
                    </li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black text-gray-500">
                        <a href="/magazalar">
                            Mağazalar
                        </a>
                    </li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black text-gray-500 hidden sm:block">
                        <a href="/korporativ">Korporativ</a>
                    </li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black font-bold text-lg hidden md:flex">
                        SAMSUNG
                    </li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black hidden md:flex">
                        <div className="flex items-center">
                            <FaApple size={36}/>
                            <div className="flex flex-col text-[10px] font-medium">
                                <p>Authorized</p>
                                <p>Reseller</p>
                            </div>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black font-bold text-xl hidden md:flex">
                        HONOR
                    </li>
                </ul>
                <div className="md:ml-5 flex items-center gap-5 absolute top-6 right-1 2xl:right-[84px]">
                    <button className="rounded-md py-1 px-2 font-medium text-sm text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white">
                        Outlet
                    </button>
                    <button className="rounded-md py-1 px-2 font-medium text-sm text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white">
                        Kondisionerlər
                    </button>
                </div>
                <ul className="lg:flex items-center gap-5 ml-[545px] xl:ml-[600px] hidden">
                    <li className="cursor-pointer text-[40px] font-bold text-green-600">
                        *<span className="text-[26px] text-black/70">0171</span>
                    </li>
                    <div className="w-[1px] h-7 bg-gray-300 xl:block hidden"></div>
                    <li className="cursor-pointer xl:flex items-center gap-3 hover:text-orange-500 hidden">
                        <img className="h-4 w-6" src={az}/>
                        <p className="text-sm">Azərbaycan dili</p>
                        <MdKeyboardArrowDown size={24}/>
                    </li>
                    <div className="w-[1px] h-7 bg-gray-300"></div>
                    <li className="cursor-pointer flex items-center gap-3 hover:text-orange-500">
                        <FaRegUser />
                        <p className="text-sm">Şəxsi kabinet</p>
                    </li>
                </ul>
            </nav>
        </header>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="flex items-center container">
                    <a href="/"><img className="w-28 h-20 mr-10" src={irsad}/></a>
                    <button className="flex items-center gap-2 sm:ml-44 md:ml-1 bg-green-600 text-white rounded-md px-4 py-2.5 border-[2px] border-green-600 hover:bg-white hover:text-green-600 mr-3">
                        <MdMenu size={26}/><p>Kataloq</p>
                    </button>
                    <div className="relative flex items-center">
                        <input type="text" className="border-[2px] border-gray-300 rounded-lg w-[500px] h-12 pl-6 focus-visible:outline-none hidden xl:block"/>
                        <div className="absolute md:relative flex items-center xl:-left-14 lg:left-[450px] border border-gray-300 w-10 h-10 rounded-xl cursor-pointer xl:border-none">
                            <div className="w-[1px] h-7 bg-gray-300 mr-2.5 hidden xl:block"></div>
                            <IoIosSearch size={24} className="text-black md:text-gray-300 ml-2"/>
                        </div>
                    </div>
                    <ul className="flex ml-12 gap-8">
                        <li className="md:flex flex-col text-center items-center justify-center cursor-pointer hover:text-orange-500 hidden">
                            <a href="/müqayisə" className="flex flex-col text-center items-center justify-center">
                                <GiScales size={24}/>
                                <p>Müqayisə</p>
                            </a>
                        </li>
                        <li className="md:flex flex-col text-center items-center justify-center cursor-pointer hover:text-orange-500 hidden">
                            <a href="/liked" className="flex flex-col text-center items-center justify-center">
                                <FaHeart size={24}/>
                                <p>Bəyəndim</p>
                            </a>
                        </li>
                        <li className="flex flex-col text-center items-center justify-center cursor-pointer hover:text-orange-500">
                            <a href="/cart" className="flex flex-col text-center items-center justify-center border border-gray-300 w-10 h-10 rounded-xl md:border-none md:w-14 md:h-14">
                                <CiShoppingCart size={24}/>
                                <p className="hidden md:block">Səbət</p>
                            </a>
                        </li>
                    </ul>
                    <button className="border-[2px] border-green-600 text-green-600 hidden py-3 px-5 md:flex flex-col text-center justify-center items-center rounded-lg ml-auto hover:bg-green-600 hover:text-white">
                        <LuCreditCard size={24}/>
                        <p className="text-sm font-semibold">Aylıq ödəniş</p>
                    </button>
        </div>
    </>
  );
};

export default Navbar;