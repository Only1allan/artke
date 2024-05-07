import { prisma } from "@/_db/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import PriceTag from "@/components/PriceTag";
import { cache } from "react";
import { Metadata } from "next";
import AddCartButton from "./AddCartBtn";

interface ProductPageProps {
    params : {
        id : string,
    }
}

const getProduct = cache(async (id: string) => {
    const product = await prisma.products.findUnique({where : { id } });
    if (!product) notFound();
    return product;

});

export async function generateMetadata(
    {params : {id}} : ProductPageProps
): Promise<Metadata>{
    const product = await getProduct(id);
    return {
        title: product.name + "- TendoArt",
        description: product.description,
        openGraph: {images: [{url: product.imageURL}]}
    };

}

export default async function ProductPage({params :{id}} : ProductPageProps) {

    const product = await getProduct(id);

    return(
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <Image
                src={product.imageURL}
                alt={product.name}
                width={400}
                height={800}
                className="rounded-lg w-full shadow-2xl max-w-sm"
                priority
            />
            <div>
                <h1 className="text-5xl font-bold">{product.name}</h1>
                <PriceTag price={product.price} className="mt-4" />
                <p className="py-6">{product.description}</p>
                <AddCartButton productId={product.id} />
            </div>
        </div>
    );

};