import { FaApple, FaRegUser } from "react-icons/fa";
import az from "../../img/az.png";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <>
        <header className="flex container h-[72px]">
            <nav className="flex">
                <ul className="flex items-center gap-3">
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black text-gray-500">Kampaniyalar</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black text-gray-500">Mağazalar</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black text-gray-500">Korporativ</li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black font-bold text-lg">
                        SAMSUNG
                    </li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black flex items-center">
                        <FaApple size={36}/>
                        <div className="flex flex-col text-[10px] font-medium">
                            <p>Authorized</p>
                            <p>Reseller</p>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:border-b-4 hover:border-b-black font-bold text-xl">
                        HONOR
                    </li>
                </ul>
                <div className="ml-5 flex items-center gap-5">
                    <button className="rounded-md py-1 px-2 font-medium text-sm text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white">
                        Outlet
                    </button>
                    <button className="rounded-md py-1 px-2 font-medium text-sm text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white">
                        Kondisionerlər
                    </button>
                </div>
                <ul className="flex items-center gap-5 ml-[75px]">
                    <li className="cursor-pointer text-[40px] font-bold text-green-600">
                        *<span className="text-[26px] text-black/70">0171</span>
                    </li>
                    <div className="w-[1px] h-7 bg-gray-300"></div>
                    <li className="cursor-pointer flex items-center gap-3 hover:text-orange-500">
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
    </>
  );
};

export default Navbar;