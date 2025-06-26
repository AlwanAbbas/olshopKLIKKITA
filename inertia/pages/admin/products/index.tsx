import { Head, usePage, router } from '@inertiajs/react'
import { useState } from 'react'
import { Button } from '../../../../components/ui/button'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '../../../../components/ui/dialog'
import { Link } from '@inertiajs/react'

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

    const [openDialog, setOpenDialog] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    const handleDelete = () => {
        if (!selectedProduct) return
        router.delete(`/admin/products/${selectedProduct.id}`, {
            onFinish: () => {
                setOpenDialog(false)
                setSelectedProduct(null)
            },
        })
    }

    const getImageUrl = (img: string) => {
        if (!img) return '/images/placeholder.png' // fallback image
        return img.startsWith('http') ? img : `/uploads/${img}`
    }

    return (
        <>
            <Head title="Manajemen Produk" />
            <div className="max-w-6xl mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Daftar Produk</h1>
                    <Link href="/admin/products/create">
                        <Button>Tambah Produk</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow-sm bg-white">
                            <img
                                src={getImageUrl(product.image)}
                                alt={product.name}
                                className="w-full h-36 object-cover rounded"
                            />
                            <h2 className="font-semibold text-lg mt-2 truncate">{product.name}</h2>
                            <p className="text-sm text-gray-600">Rp {product.price.toLocaleString()}</p>
                            <div className="flex gap-2 mt-3">
                                <Link href={`/admin/products/${product.id}/edit`}>
                                    <Button variant="outline" className="w-full">Edit</Button>
                                </Link>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="destructive"
                                            className="w-full"
                                            onClick={() => {
                                                setSelectedProduct(product)
                                                setOpenDialog(true)
                                            }}
                                        >
                                            Hapus
                                        </Button>
                                    </DialogTrigger>
                                </Dialog>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Konfirmasi */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Hapus Produk</DialogTitle>
                    </DialogHeader>
                    <p>
                        Apakah kamu yakin ingin menghapus produk{' '}
                        <strong>{selectedProduct?.name}</strong>?
                    </p>
                    <DialogFooter className="mt-4">
                        <Button variant="outline" onClick={() => setOpenDialog(false)}>
                            Batal
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                            Hapus
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
