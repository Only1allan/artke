import { prisma } from "@/_db/prisma";
import { redirect } from "next/navigation"

async function addProduct(formData: FormData) {
    "use server"

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const imageURL = formData.get("imageURL") as string
    const price = Number(formData.get("price"))

    if ((name || description || imageURL || price) === null) {
        throw Error("Missing required fields")
    }

    await prisma.products.create({
        data: {
            name, description, imageURL, price
        },
    })

    redirect("/")
}


export default function AddProduct() {
    return (
        <div>
            <h1 className="text-lg text-center font-bold mb-3">Add Product</h1>
            <form action={addProduct}>
                <input required
                    className="mb-3 w-full input input-bordered"
                    type="text"
                    title="Product Name"
                    placeholder="Enter product name"
                    name="name"
                />
                <textarea
                    title="Product Description"
                    placeholder="Enter product description"
                    className="mb-3 w-full textarea textarea-bordered"
                    name="description">

                </textarea>
                <input required
                    className="mb-3 w-full input input-bordered"
                    type="url"
                    title="Image URL"
                    placeholder="Image URL"
                    name="imageURL"
                />
                <input required
                    className="mb-3 w-full input input-bordered"
                    type="text"
                    title="Price"
                    placeholder="Price"
                    name="price"
                />
                <button className="btn btn-primary btn-block"type="submit">Add Product </button>
            </form> 
        </div>
    );
}
