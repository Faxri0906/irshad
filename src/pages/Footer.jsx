import qrKod from "../img/qr-kod.png";
import google from "../img/google.png";
import iphoneStore from "../img/iphoneStore.png";
import { GoHomeFill } from "react-icons/go";
import { TfiTwitter, TfiYoutube } from "react-icons/tfi";
import { AiFillTikTok, AiOutlineLinkedin } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import irsad from "../img/irsad.png";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
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
  );
};

export default Footer;