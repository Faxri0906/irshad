import users from "../img/users.png";
const Korporativ = () => {
  return (
    <div className="mb-24">
        <div  className="w-full h-[0.5px] bg-gray-200 mt-20 mb-20"></div>
        <div className="container flex flex-col">
            <div className="">
                <h1 className="text-4xl font-bold text-center mb-10">Korporativ</h1>
                <h2 className="text-[25px] font-semibold mb-8">İrşad Korporativ şöbəsi ölkənin bir çox tanınmış şirkətləri ilə əməkdaşlıq edir. Ümumilikdə 2500-dən çox şirkət, publik hüquqi şəxslər, dövlət qurumlarını əhatə edən əməkdaşlıq çərçivəsində Korporativ şöbə müştərilərinə xüsusi həssaslıqla yanaşır.</h2>
                <h3 className="text-xl font-semibold mb-5">Korporativ üstünlüklərimiz</h3>
                <div className="">
                    <div className="flex flex-col xl:flex-row">
                        <div className="">
                            <div className="">
                                <p className="text-lg"><span className="text-xl font-semibold">Qiymət strategiyası: </span>Korporativ müştərilər daim Korporativ seqmentə xas olan xüsusi endirimlərdən yararlana bilirlər.</p>
                            </div>
                            <div className="">
                                <p className="text-lg"><span className="text-xl font-semibold">Xidmət: </span>Korporativ müştərilər servis xidmətlərindən növbəsiz yararlana bilirlər.</p>
                            </div>
                            <div className="">
                                <p className="text-lg"><span className="text-xl font-semibold">Ödəmə şərtləri: </span>Uzun müddət birgə çalışdığımız partnyorlara sonradan ödəmə imkanı yaradaraq xüsusi limitin ayrılması mümkündür.</p>
                            </div>
                            <div className="">
                                <p className="text-lg"><span className="text-xl font-semibold">Şəxsi menecer: </span>Korporativ Müştərilər fəaliyyət göstərdikləri sektorlara uyğun olaraq bütün sorğu və müraciətləri onlara təhkim olunmuş menecer üzərindən həyata keçirə bilərlər.</p>
                            </div>
                            <div className="">
                                <p className="text-lg"><span className="text-xl font-semibold">Çatdırılma: </span>Korporativ Müştərilər üçün çatdırılma müştəriyə uyğun qrafikdə həyata keçirilir.</p>
                            </div>
                        </div>
                        <div className="w-[380px] h-[280px]">
                            <img src={users} className="w-[100%] h-[100%]"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <h4 className="text-xl font-semibold mb-5">Sizə təkliflərimiz:</h4>
                        <p className="text-lg">
                            Köçürmə yolu ilə ödəniş edə bilmək imkanı
                        </p>
                        <p className="text-lg">Korporativ müştərilərə xüsusi endirimlər</p>
                        <p className="text-lg">Seçilmiş müştərilərə hissəli ödəniş imkanı</p>
                        <p className="text-lg">Zəng,elektron poçt üzərindən sifariş vermə imkanı</p>
                        <p className="text-lg">Öncədən sifariş etməklə saytımızda əks olunmayan malların əldə edə bilmə imkanı</p>
                        <p className="text-lg">Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə uyğun olanını seçə bilərsiniz:</p>
                    </div>
                    <div className="flex flex-col gap-5 mb-5">
                        <h4 className="text-xl font-semibold">Əlaqə:</h4>
                        <div className="flex flex-col gap-5">
                            <p className="text-xl cursor-pointer text-blue-700 hover:text-black">+994553008784</p>
                            <p className="text-xl cursor-pointer text-blue-700 hover:text-black">+994552052686</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-semibold">Poçt ünvanımız:</h4>
                        <p className="text-xl cursor-pointer text-blue-700 hover:text-black">corp@irshad.az</p>
                    </div>
                </div>
            </div>
            <div className="border border-gray-400 rounded-3xl p-8 flex flex-col text-gray-400 mt-20">
                <h1 className="text-black text-3xl font-bold text-center">Bizə yazın</h1>
                <div className="flex gap-5 mb-5">
                    <div className="text-sm font-medium gap-3 flex flex-col">
                        <p>Ad soyad</p>
                        <input className="border rounded-lg p-3 outline-none border-gray-400" type="text" placeholder="ad"/>
                    </div>
                    <div className="text-sm font-medium gap-3 flex flex-col">
                        <p>Əlaqə nömrəsi</p>
                        <input className="border rounded-lg p-3 outline-none border-gray-400" type="tel" placeholder="Əlaqə nömrəsi"/>
                    </div>
                </div>
                <div className="text-sm font-medium gap-3 flex flex-col mb-5">
                    <p>E-mail</p>
                    <input className="border rounded-lg outline-none p-6 border-gray-400 w-full h-14" type="email" placeholder="E-mail"/>
                </div>
                <div className="flex gap-5 mb-5">
                    <div className="text-sm font-medium gap-3 flex flex-col">
                        <p>Şirkət</p>
                        <input className="border rounded-lg p-3 outline-none border-gray-400" type="text" placeholder="Şirkət"/>
                    </div>
                    <div className="text-sm font-medium gap-3 flex flex-col">
                        <p>Sizə nə zaman zəng edək</p>
                        <input className="border rounded-lg p-3 outline-none border-gray-400" type="time" />
                    </div>
                </div>
                <div className="text-sm font-medium gap-3 flex flex-col mb-5">
                    <p>İsmarıc</p>
                    <input className="border rounded-lg outline-none border-gray-400 w-full h-32" type="text" />
                </div>
                <button className="flex gap-1.5 w-52 h-12 xl:ml-[1000px] ml-[334px] md:ml-[464px] lg:ml-[684px] items-center justify-center mt-4 bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                    <p>Təsdiq et</p>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Korporativ;