"use server"
import {getCart, createCart} from "@/_db/cart";

export async function addtocart(productId: string){
    const cart = (await getCart()) ?? await createCart();
}