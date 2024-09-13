import { LuMinus, LuPlus, LuTrash } from "react-icons/lu";
import thing from "../../../img/thing.png";
const Cart2 = () => {
  return (
    <div className="border-[2px] flex border-black px-4 py-8 rounded-3xl items-center w-full gap-32">
      <div className="w-48 h-w-48">
        <img src={thing}/>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Zelmer ZNT0300</h1>
        <p className="text-lg font-medium ml-12">29.99 AZN</p>
      </div>
      <div className="flex gap-3 items-center">
        <button className="border-[2px] border-black cursor-pointer rounded-xl px-2 py-2">
          <LuPlus />
        </button>
        <p>
          1
        </p>
        <button className="border-[2px] border-black cursor-pointer rounded-xl px-2 py-2">
          <LuMinus />
        </button>
      </div>
      <h1 className="text-3xl font-semibold">29.99AZN</h1>
      <button className="">
        <LuTrash />
      </button>
    </div>
  )
}

export default Cart2;