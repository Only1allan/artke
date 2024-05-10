"use server"
import { prisma } from "@/_db/prisma";
import { getCart, createCart } from "@/_db/cart";
import { revalidatePath } from "next/cache";

export async function setQuantity(productId: string, quantity: number) {

    const cart = (await getCart()) ?? await createCart();

    const cartproducts = cart.cartItems.find(item => item.productId === productId)

    if (quantity === 0) {
        if (cartproducts) {
            await prisma.cartItems.delete({
                where: { id: cartproducts.id },
            })
        }
    } else {
        if (cartproducts) {
            await prisma.cartItems.update({
                where: { id: cartproducts.id },
                data: { quantity }
            })
        } else {
            await prisma.cartItems.create({
                data: {
                    cartId: cart.id,
                    productId,
                    quantity
                }
            })
        }
    }

    revalidatePath("/cart")
}


