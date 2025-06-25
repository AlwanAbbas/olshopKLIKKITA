import { useForm } from '@inertiajs/react'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../..//components/ui/label'
import { Button } from '../../../..//components/ui/button'

type Product = {
    id: number
    name: string
    image: string
    price: number
    original_price: number
    discount_price: number
    is_flash_sale: boolean
    is_best_seller: boolean
    is_new_arrival: boolean
}

type PageProps = {
    product: Product
}

export default function Edit({ product }: PageProps) {
    const { data, setData, put, processing } = useForm({
        name: product.name,
        image: product.image,
        price: product.price,
        original_price: product.original_price,
        discount_price: product.discount_price,
        is_flash_sale: product.is_flash_sale,
        is_best_seller: product.is_best_seller,
        is_new_arrival: product.is_new_arrival,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        put(`/admin/products/${product.id}`)
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
            <h1 className="text-xl font-bold">Edit Produk</h1>
            <div>
                <Label htmlFor="name">Nama Produk</Label>
                <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} />
            </div>
            <div>
                <Label htmlFor="image">URL Gambar</Label>
                <Input id="image" value={data.image} onChange={e => setData('image', e.target.value)} />
            </div>
            <div>
                <Label htmlFor="price">Harga</Label>
                <Input id="price" type="number" value={data.price} onChange={e => setData('price', Number(e.target.value))} />
            </div>
            <div>
                <Label htmlFor="original_price">Harga Asli</Label>
                <Input id="original_price" type="number" value={data.original_price} onChange={e => setData('original_price', Number(e.target.value))} />
            </div>
            <div>
                <Label htmlFor="discount_price">Harga Diskon</Label>
                <Input id="discount_price" type="number" value={data.discount_price} onChange={e => setData('discount_price', Number(e.target.value))} />
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="flash" checked={data.is_flash_sale} onChange={e => setData('is_flash_sale', e.target.checked)} />
                <Label htmlFor="flash">Flash Sale</Label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="best" checked={data.is_best_seller} onChange={e => setData('is_best_seller', e.target.checked)} />
                <Label htmlFor="best">Produk Terlaris</Label>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="new" checked={data.is_new_arrival} onChange={e => setData('is_new_arrival', e.target.checked)} />
                <Label htmlFor="new">Koleksi Terbaru</Label>
            </div>
            <Button type="submit" disabled={processing}>Simpan Perubahan</Button>
        </form>
    )
}
