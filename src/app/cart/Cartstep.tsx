"use client"

import { FullCart } from "@/_db/cart"
import formatPrice from "@/_lib/formatPrice"
import Image from "next/image"
import Link from "next/link"
import { useTransition } from "react"

interface CartstepProps {
    cartItems: FullCart,
    setProductQuantity: (productId: string, quantity: number) => Promise <void>
}
export default function Cartstep({ cartItems: { product, quantity }, setProductQuantity }: CartstepProps) {

    const [isPending, startTransition] = useTransition();

    const quantityOptions: JSX.Element[] = [];
    for (let i = 1; i <= 99; i++) {
        quantityOptions.push(
            <option key={i} value={i}>
                {i}
            </option>
        )
    }
    return (
        <div className="my-4">
            <div className="flex items-center gap-3">
                <Image
                    src={product.imageURL}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                />
           
            <div>
                <Link href={"/shop/products/" + product.id} className="font-bold">
                    {product.name}
                </Link>
                <div>Price: {formatPrice(product.price)}</div>
                <div className="my-1 flex items-center gap-2">
                    Quantity:
                    <select title="Quantity" 
                    className="select select-bordered w-full max-w-[80px]"
                    defaultValue={quantity}
                    onChange={e =>{
                        const newQuantity = parseInt(e.currentTarget.value);
                        startTransition(async () =>{
                            await setProductQuantity(product.id, newQuantity)
                        })
                    }}
                    >
                        <option value={0}>0 (Remove)</option>
                        {quantityOptions}
                    </select>
                </div>
                <div className="flex items-center gap-3 ">Total: {formatPrice(product.price * quantity)}
                {isPending && <span className="loading loading-spinner loading-sm"/>}

                </div>
                <div className="divider">

                </div>
            </div>

        </div>
        </div>
    )
}