import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Product page</h1>
            <h1>Select a product</h1>
            <ul>
                {[...Array(10)].map((_, id) => (
                    <li key={id}>
                        <Link href={`/products/${id + 1}`}>
                            Product {id}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}