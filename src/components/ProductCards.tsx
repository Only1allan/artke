import { products } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
    product: products;
    }   
export default function ProductCards({product}: ProductCardProps) {
    
    const isNew = "True"
    // const isNew = product.createdAt > new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)

    return (
        <Link href={"/shop/" + product.id[0]}
              className="card w-full bg-base-100 hover:shadow-xl transition-shadow"
        >
            <figure>
                <Image
                     src={product.imageURL}
                     alt= {product.name}
                     width={600}
                     height={300}
                    className="h-48 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.name}
                </h2>
                {isNew && 
                        <div className="badge badge-secondary">New</div>
                    }
                <p className="text-sm">{product.description}</p>
            <PriceTag price ={product.price}/>
            </div>
        </Link>
    );

}

