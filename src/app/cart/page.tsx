import { getCart } from "@/_db/cart";
import Cartstep from "./Cartstep";
import { setQuantity } from "./cartquantity";
import formatPrice from "@/_lib/formatPrice";

export const metadata = {
    title: "Cart - Tendo",
    description: "A community of artists by artists.",
};

export default async function CartPage() {
    const cart = await getCart();
    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
            {cart?.cartItems.map((item) => (
                <Cartstep cartItems={item} key={item.id} setProductQuantity={setQuantity} />
            ))}
            {!cart?.cartItems.length && <p>Your cart is empty</p>}
            <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">
                    Total: {formatPrice(cart?.total || 0)}
                </p>
                <button className="btn btn-primary sm:w-[200px]">Checkout</button>
            </div>
        </div>
    )
}   