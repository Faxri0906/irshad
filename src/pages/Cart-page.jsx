import Cart2 from "../components/views/Cart/cart-item";
import useCartStore from "../hooks/useCart";
const CartPage = () => {
  const { cartItems } = useCartStore();
  return (
    <div className="container mt-5">
      <h1 className="text-5xl font-bold mb-8">Cart</h1>
      <div className="flex mb-40 flex-col gap-5">
        {cartItems.map((card) => <Cart2 key={card.id} cards={card}/>)}
      </div>
    </div>
  )
}

export default CartPage;