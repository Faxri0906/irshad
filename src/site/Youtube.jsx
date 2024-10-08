import { PiYoutubeLogoFill } from "react-icons/pi";
import { RxTriangleRight } from "react-icons/rx";
import woman from "../img/woman.png";
import man from "../img/man.png";
import man2 from "../img/man2.png";
const Youtube = () => {
  return (
    <div className="container mb-16">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="flex gap-4">
                        <h1 className="text-[26px] lg:text-4xl font-semibold">Məhsul icmalı</h1>
                        <h1 className="text-[26px] lg:text-4xl font-semibold text-black/40">İrşad Youtube</h1>
                    </div>
                    <button className="bg-red-500 text-white p-3 text-lg font-medium rounded-xl hover:bg-white hover:text-red-500 border-[2px] border-red-500 w-[300px]">
                        <a className="flex items-center gap-4" href="https://www.youtube.com/c/irshad">
                            <PiYoutubeLogoFill size={28}/>
                            <p>Youtube hesabına keç</p>
                        </a>
                    </button>
                </div>
                <div className="mt-10 flex gap-[23px]">
                    <div className="lg:max-w-[450px] flex flex-col gap-6 max-w-[350px]">
                        <div className="relative cursor-pointer">
                            <img src={woman} className="max-w-[350px] lg:max-w-[450px] h-[300px] rounded-xl relative"/>
                            <div className="w-20 h-20 bg-white absolute top-24 rounded-full left-40 lg:left-48 text-green-600 hover:bg-green-600 hover:text-white items-center justify-center flex">
                                <a href="https://www.youtube.com/watch?v=BDXkW2yPVPc">
                                    <RxTriangleRight size={64}/>
                                </a>
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
                    <div className="lg:max-w-[450px] md:flex flex-col gap-6 hidden max-w-[350px]">
                        <div className="relative cursor-pointer">
                            <img src={man} className="lg:max-w-[450px] h-[300px] rounded-xl relative max-w-[350px]"/>
                            <div className="w-20 h-20 bg-white absolute top-24 rounded-full left-36 lg:left-48 text-green-600 hover:bg-green-600 hover:text-white items-center justify-center flex">
                                <a href="https://www.youtube.com/watch?v=ghGySce348c">
                                    <RxTriangleRight size={64}/>
                                </a>
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
                    <div className="max-w-[450px] xl:flex flex-col gap-6 hidden">
                        <div className="relative cursor-pointer">
                            <img src={man2} className="max-w-[450px] h-[300px] rounded-xl relative"/>
                            <div className="w-20 h-20 bg-white absolute top-24 rounded-full left-48 text-green-600 hover:bg-green-600 hover:text-white items-center justify-center flex">
                                <a href="https://www.youtube.com/watch?v=LdQKD83LV7k">
                                    <RxTriangleRight size={64}/>
                                </a>
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
  );
};

export default Youtube;