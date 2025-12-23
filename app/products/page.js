import Link from "next/link";

async function getProducts() {
    const res = await fetch("https://dummyjson.com/products", {
        next: { revalidate: 3600 }, // This works here!
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    const data = await res.json();
    return data.products;
}


export default async function Page() {
    const products = await getProducts();

    return (
        <div>
            <h1>Product page</h1>
            <h1>Select a product</h1>
            <ul>
                {products.map((item, id) => (
                    <li key={item.id}>
                        <Link href={`/products/${item.id}`}>
                            {item.title} -${item.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}