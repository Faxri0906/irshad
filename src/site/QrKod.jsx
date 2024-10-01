import qrKod from "../img/qr-kod.png";
const QrKod = () => {
  return (
    <div className="container flex flex-col pt-8 bg-gray-700 h-[400px] w-full rounded-3xl mb-40">
                <div className="flex gap-16 items-center pl-8 pr-8">
                    <div className="flex flex-col gap-20">
                        <h1 className="text-4xl text-white font-medium">Skan et, Qeydiyyatdan keç 20 AZN BONUS qazan!</h1>
                        <button className="flex px-14 py-3 w-64 h-14 justify-center items-center bg-green-600 text-white hover:bg-white hover:text-green-600 rounded-xl font-semibold text-lg border-[2px] border-green-600">
                            <p>Daha ətraflı</p>
                        </button>
                    </div>
                    <div className="lg:flex flex-col gap-4 xl:pr-28 hidden">
                        <img className="rounded-xl w-[250px] h-[250px]" src={qrKod}/>
                        <p className="text-gray-200 text-lg">Yükləmək üçün skan et</p>
                    </div>
                </div>
                <div className="mt-10 flex">
                    <div className="h-3 w-72 bg-green-600"></div>
                    <div className="w-5 h-5 bg-white rounded-full absolute left-[310px] top-[3787px] 2xl:block hidden"></div>
                    <div className="h-3 w-full bg-orange-500"></div>
                </div>
            </div>
  );
};

export default QrKod;