import qrKod from "../../img/qr-kod.png";
import google from "../../img/google.png";
import iphoneStore from "../../img/iphoneStore.png";
import { GoHomeFill } from "react-icons/go";
import { TfiTwitter, TfiYoutube } from "react-icons/tfi";
import { AiFillTikTok, AiOutlineLinkedin } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import irsad from "../../img/irsad.png";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black/90 w-full h-[1700px] sm:h-[1200px] xl:h-[750px] flex flex-col text-gray-400 p-5 pl-10 lg:p-20 lg:pl-28 lg:pr-16 gap-32">
                <div className="flex flex-col gap-20 xl:flex-row">
                    <div className="flex justify-between">
                        <div className="lg:flex hidden flex-col border-[2px] border-gray-400 px-14 py-10 rounded-3xl max-w-72 gap-5 2xl:mr-20 xl:mr-3">
                            <img className="rounded-lg w-44 h-44" src={qrKod}/>
                            <p className="w-44 text-center">Skan et, Qeydiyyatdan keç 20 AZN BONUS qazan!</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between">
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
                        </div>
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
                            <div className="lg:flex text-3xl gap-5 grid grid-cols-4">
                                <a href="https://www.facebook.com/irshad0171" className="hover:text-white">
                                    <RiFacebookCircleLine/>
                                </a>
                                <a href="https://www.instagram.com/irshad" className="hover:text-white">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.youtube.com/c/irshad" className="hover:text-white">
                                    <TfiYoutube />
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=994777770171" className="hover:text-white">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://t.me/irshad" className="hover:text-white">
                                    <FaTelegramPlane />
                                </a>
                                <a href="https://www.tiktok.com/@irshad.az" className="hover:text-white">
                                    <AiFillTikTok />
                                </a>
                                <a href="https://www.linkedin.com/company/irshad" className="hover:text-white">
                                    <AiOutlineLinkedin />
                                </a>
                                <a href="https://x.com/irshad" className="hover:text-white">
                                    <TfiTwitter />
                                </a>
                            </div>
                            <div className="flex gap-5 cursor-pointer">
                                <a href="https://play.google.com/store/apps/details?id=az.irshad.irshad&hl=en&gl=US">
                                    <img className="w-44 h-14" src={google}/>
                                </a>
                                <a href="https://apps.apple.com/tr/app/irshad-az/id1645503622">
                                    <img className="w-44 h-14" src={iphoneStore}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between flex-col xl:flex-row">
                    <a href="/"><img className="w-28 h-20" src={irsad}/></a>
                    <p>İrşad © 2000 - 2024. Bütün hüquqlar qorunur.</p>
                    <p className="cursor-pointer">Site by <a href="https://github.com/Faxri0906" className="hover:border-b-2 hover:border-b-gray-400">Fakhri Mammedzade</a></p>
                </div>
    </div>
  );
};

export default Footer;