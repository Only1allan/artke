import { cookies } from "next/headers"
import { prisma } from "./prisma";
import { Prisma } from ".prisma/client";


export type CartProducts = Prisma.cartGetPayload<{
    include: { cartItems: { include: { product: true } } }
}>

export type shoppingCart = CartProducts & { size: number, total: number }

export async function createCart(): Promise<shoppingCart>{
    const newCart = await prisma.cart.create({
        data: {}
    })

    //insecure
    cookies().set("cartId", newCart.id);

    return {
        ...newCart,
        cartItems: [],
        size: 0,
        total: 0
    
    }
}

export async function getCart(): Promise<shoppingCart | null>{
    const cartId = cookies().get("cartId")?.value
    const cart = cartId ? await prisma.cart.findUnique({
        where: { id: cartId},
        include : { cartItems: { include: { product: true } } }
    }): null

    if (!cart) return null;

    return {
        ...cart,
        size : cart.cartItems.reduce((acc, item) => acc + item.quantity, 0),
        total : cart.cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    }
}

