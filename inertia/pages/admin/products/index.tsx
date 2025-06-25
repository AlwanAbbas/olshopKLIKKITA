import { Head, Link, usePage } from '@inertiajs/react'
import { Button } from '../../../../components/ui/button'

type Product = {
    id: number
    name: string
    price: number
    image: string
}

type PageProps = {
    products: Product[]
}

export default function AdminProductIndex() {
    const { props } = usePage<PageProps>()
    const { products } = props

    return (
        <>
            <Head title="Manajemen Produk" />
            <div className="max-w-5xl mx-auto p-4 space-y-4">
                <h1 className="text-xl font-bold">Daftar Produk</h1>
                <Link href="/admin/products/create">
                    <Button>Tambah Produk</Button>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow">
                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
                            <h2 className="font-semibold mt-2">{product.name}</h2>
                            <p className="text-sm text-gray-600">Rp {product.price}</p>
                            <div className="flex gap-2 mt-2">
                                <Link href={`/admin/products/${product.id}/edit`}>
                                    <Button variant="outline">Edit</Button>
                                </Link>
                                <Link method="delete" href={`/admin/products/${product.id}`} as="button">
                                    <Button variant="destructive">Delete</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
