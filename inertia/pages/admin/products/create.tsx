import { useForm, router } from '@inertiajs/react'
import { useState } from 'react'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'
import { Button } from '../../../../components/ui/button'

type ProductFormData = {
    name: string;
    image: string;
    price: string;
    original_price: string;
    discount_price: string;
    is_flash_sale: boolean;
    is_best_seller: boolean;
    is_new_arrival: boolean;
};

export default function ProductForm() {
    const { data, setData, post, processing, errors, reset } = useForm<ProductFormData>({
        name: '',
        image: '',
        price: '',
        original_price: '',
        discount_price: '',
        is_flash_sale: false,
        is_best_seller: false,
        is_new_arrival: false,
    })

    // const { props } = usePage()
    const [showMessage, setShowMessage] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/admin/products', {
            onSuccess: () => {
                setShowMessage(true)

                // Reset form setelah berhasil
                reset()

                // Setelah 2 detik, redirect ke homepage
                setTimeout(() => {
                    setShowMessage(false)
                    router.visit('/')
                }, 2000)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
            {showMessage && (
                <div className="p-3 rounded text-green-800 bg-green-100 border border-green-300 shadow">
                    Produk berhasil ditambahkan!
                </div>
            )}

            <div>
                <Label htmlFor="name">Nama Produk</Label>
                <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="image">URL Gambar</Label>
                <Input id="image" value={data.image} onChange={e => setData('image', e.target.value)} />
            </div>

            <div>
                <Label htmlFor="price">Harga</Label>
                <Input id="price" type="number" value={data.price} onChange={e => setData('price', e.target.value)} />
            </div>

            <div>
                <Label htmlFor="original_price">Harga Asli</Label>
                <Input id="original_price" type="number" value={data.original_price} onChange={e => setData('original_price', e.target.value)} />
            </div>

            <div>
                <Label htmlFor="discount_price">Harga Diskon</Label>
                <Input id="discount_price" type="number" value={data.discount_price} onChange={e => setData('discount_price', e.target.value)} />
            </div>

            <div className="flex items-center gap-2">
                <input type="checkbox" id="flash" checked={data.is_flash_sale} onChange={e => setData('is_flash_sale', e.target.checked)} />
                <Label htmlFor="flash">Tampilkan di Flash Sale</Label>
            </div>

            <div className="flex items-center gap-2">
                <input type="checkbox" id="best" checked={data.is_best_seller} onChange={e => setData('is_best_seller', e.target.checked)} />
                <Label htmlFor="best">Tampilkan di Produk Terlaris</Label>
            </div>

            <div className="flex items-center gap-2">
                <input type="checkbox" id="new" checked={data.is_new_arrival} onChange={e => setData('is_new_arrival', e.target.checked)} />
                <Label htmlFor="new">Tampilkan di Koleksi Terbaru</Label>
            </div>

            <Button type="submit" disabled={processing}>
                {processing ? 'Menyimpan...' : 'Simpan Produk'}
            </Button>
        </form>
    )
}
