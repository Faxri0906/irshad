import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Müqayisə = () => {
  return (
    <div className="container mt-10 flex flex-col gap-10 mb-28">
        <div className="flex justify-between">
            <div className="flex flex-col gap-5">
                <p className="text-gray-400 flex gap-3 items-center">Irşad<div className="bg-black w-1 h-1 rounded-full"></div><span className="text-black">Müqayisə</span></p>
                <h1 className="text-[32px] font-semibold">Müqayisə</h1>
            </div>
            <div className="flex gap-5">
                <div className="w-[60px] h-[60px] bg-white cursor-pointer shadow-2xl items-center justify-center flex rounded-full hover:bg-black hover:text-white">
                    <IoArrowBack size={24}/>
                </div>
                <div className="w-[60px] h-[60px] bg-white cursor-pointer shadow-2xl items-center justify-center flex rounded-full hover:bg-black hover:text-white">
                    <IoArrowForward size={24}/>  
                </div>
            </div>
        </div>
        <div className="">
            <h1 className="text-[40px] font-semibold">Müqayisə etmək üçün məhsul əlavə olunmayıb</h1>
        </div>
    </div>
  );
};

export default Müqayisə;