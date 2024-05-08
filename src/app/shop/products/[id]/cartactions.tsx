"use server"
import {getCart, createCart} from "@/_db/cart";
import { prisma } from "@/_db/prisma";  
import { revalidatePath } from "next/cache";

export async function addtocart(productId: string){
    const cart = (await getCart()) ?? await createCart();

    const cartproducts= cart.cartItems.find(item => item.productId === productId)

    if (cartproducts){
        await prisma.cartItems.update({
            where: { id: cartproducts.id},
            data: { quantity: {increment : 1 } }
        })
        
    }
    else {
        await prisma.cartItems.create({
            data: {
                cartId: cart.id,
                productId,
                quantity: 1
            }
        })
    }
    revalidatePath("/shop/products/[id]")
}