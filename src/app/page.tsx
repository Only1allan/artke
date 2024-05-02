import { prisma } from "@/_db/prisma";
import Image from "next/image";
import ProductCards from "@/components/ProductCards";

export default async function Home() {
  const items = await prisma.products.findMany({
    orderBy: {
      id: "desc"
    }
  });

  return (
    <div>
      <ProductCards product={items[0]}/>
    </div>

  );
}
