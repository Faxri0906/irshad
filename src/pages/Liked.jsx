import { CiShoppingCart } from "react-icons/ci";
const Liked = () => {
  return (
    <div className="container flex justify-between items-center mt-10 mb-40">
        <div className="flex flex-col gap-5">
            <p className="text-gray-400 flex gap-3 items-center">Irşad<div className="bg-black w-1 h-1 rounded-full"></div><span className="text-black">Bəyəndiklərim</span></p>
            <h1 className="text-3xl font-semibold">Bəyəndiklərim</h1>
        </div>
        <div className="">
            <button className="flex gap-1.5 px-5 py-3 mt-4 bg-green-500 text-white hover:bg-white hover:text-green-500 rounded-xl font-semibold text-lg border-[2px] border-green-500">
                <CiShoppingCart size={28}/>
                <p>Bütün məhsulları səbətə əlavə et</p>
            </button>
        </div>
    </div>
  );
};

export default Liked;