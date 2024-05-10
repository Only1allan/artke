import { prisma } from "@/_db/prisma";
import Image from "next/image";
import ProductCards from "@/components/ProductCards";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCart } from "@/_db/cart";
import CartItemBtn from "@/components/CartItemBtn";


async function searchArt(formData: FormData) {
  "use server"

  const searchArt = formData.get("searchArt") as string

  if (searchArt) {
    redirect("/search?query=" + searchArt)
  }

}


async function myCart() {
  "use server"
  return await getCart();
}

export default async function Shop() {
  const items = await prisma.products.findMany({
    orderBy: {
      id: "desc"
    }
  });

  const cartContains = await myCart();

  return (
    
    <div>
        <h1 className="text-lg text-center font-bold mb-3">Shop</h1>
        <div className="hero rounded-xl bg-base-200" >
            {/* <div className=" hero-content flex-col lg:flex-row">
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
            </div> */}
            <div className="flex-none gap-2">
              <form action={searchArt}>
                <div className="form-control">
                <input
                  type="text"
                  name="searchArt"
                  placeholder="Search for Art"
                  className="input input-bordered w-full min-w-[100px]"
                />
                </div>
              </form>
              <CartItemBtn cart={cartContains} />
            </div>
        </div>

        <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}


        </div>

    </div>


  );
}

