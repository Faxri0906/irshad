import { LuMinus, LuPlus, LuTrash } from "react-icons/lu";
import thing from "../../../img/thing.png";
import toy from "../../../img/toy.png";
import tv from "../../../img/tv.png";
import clock from "../../../img/clock.png";
import useCartStore from "../../../hooks/useCart";
const Cart2 = () => {
  const { cartItems , addToCart , removeFromCart} = useCartStore();
  const {id,price,title,img} = cards;
  const isInCart = cartItems.filter((card) => card.id === id).length > 0;
  return (
    <>
      <div className="border-[2px] flex border-black px-4 py-8 rounded-3xl items-center w-full gap-32" key={index}>
          <div className="w-48 h-w-48">
            <img src={img}/>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-lg font-medium ml-12">{price}</p>
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
          <h1 className="text-3xl font-semibold w-72">{price}</h1>
          <button className="">
            <LuTrash onClick={removeFromCart}/>
          </button>
        </div>
    </>
  )
}

export default Cart2;