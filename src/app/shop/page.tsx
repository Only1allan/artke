import { prisma } from "@/_db/prisma";
import Image from "next/image";
import ProductCards from "@/components/ProductCards";
import Link from "next/link";

export default async function Shop() {
  const items = await prisma.products.findMany({
    orderBy: {
      id: "desc"
    }
  });

  return (
    <div>
        <div className="hero rounded-xl bg-base-200" >
            <div className=" hero-content flex-col lg:flex-row">
              <Image
                    src={items[0].imageURL}
                    alt={items[0].name}
                    width={400}
                    height={800}
                    className="rounded-lg w-full shadow-2xl max-w-sm"
                    priority
                />
              <div>
                <h1 className="text-5xl font-bold">{items[0].name}</h1>
                <p className="py-6">{items[0].description}</p>
                <Link
                    href={"shop/products/" + items[0].id}
                    className="btn btn-primary"
                >Check it out
                </Link> 
              </div>
            </div>
        </div>

        <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.slice(1).map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}


        </div>

    </div>


  );
}

