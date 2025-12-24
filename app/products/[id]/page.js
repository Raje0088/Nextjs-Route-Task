import Photo from '@/component/ProductImage'
async function getSingleProduct(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        next: { revalidate: 3600 }
    });

    if (!res.ok) return null;
    return res.json();
}

export default async function content({ params }) {
    const { id } = await params;
    const product = await getSingleProduct(id);
    return (
        <div className="p-8 border rounded-lg max-w-2xl mx-auto mt-10 shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full md:w-1/2 rounded bg-gray-100"
                />
                <div>
                    <p className="text-gray-500 mb-2 italic">{product.category}</p>
                    <p className="text-xl font-semibold text-green-600 mb-4">
                        Price: ${product.price}
                    </p>
                    <p className="text-gray-700">{product.description}</p>
                </div>
            </div>

            <div className="mt-8 border-t pt-4">
                <a href="/products" className="text-blue-500 hover:underline">
                    ← Back to Products
                </a>
            </div>
            <div>

                <Photo src="/productsImg/globe.svg" alt="Image not found"></Photo>
            </div>
        </div>
    )
}