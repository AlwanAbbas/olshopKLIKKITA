import { useForm, router } from '@inertiajs/react' // ⬅️ pastikan `router` diimpor
import Footer from '../../components/ui/footer'
import Navbar from '../../components/ui/navbar'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartProps {
  products: Product[]
  subtotal: number
}

export default function cart({ products, subtotal }: CartProps) {
  const initialData: Record<string, string | number> = {
    coupon: '',
  }

  products.forEach((item) => {
    initialData[`qty_${item.id}`] = item.quantity
  })

  const { data, setData, post } = useForm(initialData)

  const handleQtyChange = (id: number, value: number) => {
    setData(`qty_${id}`, value)
  }

  const handleUpdateCart = (e: React.FormEvent) => {
    e.preventDefault()
    post('/cart/update')
  }

  const handleCheckout = () => {
    router.visit('/checkout') // ⬅️ ini akan navigate ke /checkout
  }

  return (
    <>
      <Navbar />

      <form onSubmit={handleUpdateCart} className="p-6 md:p-10">
        <h2 className="text-2xl font-bold mb-6">Keranjang</h2>

        {/* Tabel Produk */}
        <div className="bg-white shadow rounded-md p-6 mb-8">
          <div className="hidden md:grid grid-cols-4 font-semibold border-b pb-2 mb-4 text-sm text-gray-600">
            <div>Produk</div>
            <div>Harga</div>
            <div>Jumlah</div>
            <div>Subtotal</div>
          </div>

          {products.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 py-4 border-b">
              <div className="flex items-center gap-4">
                {item.images.slice(0, 2).map((src, index) => (
  <img
    key={index}
    src={src}
    alt={`${item.name} ${index + 1}`}
    className="w-16 h-16 object-cover rounded"
  />
))}
              </div>
              <div className="md:text-center text-sm text-gray-700">Rp {item.price.toLocaleString()}</div>
              <div className="md:text-center">
                <input
                  type="number"
                  name={`qty_${item.id}`}
                  value={data[`qty_${item.id}`] as number}
                  min={1}
                  onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
                  className="border rounded w-16 text-center py-1"
                />
              </div>
              <div className="md:text-right text-sm font-semibold text-gray-800">
                Rp {(item.price * (data[`qty_${item.id}`] as number)).toLocaleString()}
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <a href="/" className="border px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-100">
              Kembali Berbelanja
            </a>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700"
            >
              Perbarui Keranjang
            </button>
          </div>
        </div>

        {/* Kupon dan Ringkasan Belanja */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Kupon */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <input
              type="text"
              placeholder="Kode Kupon"
              value={data.coupon as string}
              onChange={(e) => setData('coupon', e.target.value)}
              className="border rounded px-4 py-2 w-full md:w-64"
            />
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Gunakan Kupon
            </button>
          </div>

          {/* Total */}
          <div className="border rounded p-6 w-full lg:w-1/3 bg-gray-50">
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>Rp {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Pengiriman</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between font-semibold text-base border-t pt-4 mt-2">
              <span>Total</span>
              <span>Rp {subtotal.toLocaleString()}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
               Checkout Sekarang
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  )
}
