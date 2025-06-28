import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'
import Footer from '../../components/ui/Footer'
import Navbar from '../../components/ui/navbar'

export default function checkout() {
  const { data, setData, post } = useForm({
    firstName: '',
    company: '',
    address: '',
    additional: '',
    city: '',
    phone: '',
    email: '',
    paymentMethod: 'cod',
    coupon: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData(name, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/checkout') // Kirim data ke controller
  }

  return (
    <>

    <Navbar />

      <form onSubmit={handleSubmit}>
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-12">
          {/* Form Billing Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Detail Penagihan</h2>
            <input name="firstName" placeholder="Nama Depan*" value={data.firstName} onChange={handleChange} className="border rounded w-full px-4 py-2" />
            <input name="company" placeholder="Nama Perusahaan" value={data.company} onChange={handleChange} className="border rounded w-full px-4 py-2" />
            <input name="address" placeholder="Alamat Jalan*" value={data.address} onChange={handleChange} className="border rounded w-full px-4 py-2" />
            <input name="additional" placeholder="Detail Tambahan (opsional)" value={data.additional} onChange={handleChange} className="border rounded w-full px-4 py-2" />
            <input name="city" placeholder="Kota*" value={data.city} onChange={handleChange} className="border rounded w-full px-4 py-2" />
            <input name="phone" placeholder="Nomor Telepon*" value={data.phone} onChange={handleChange} className="border rounded w-full px-4 py-2" />
            <input name="email" placeholder="Alamat Email*" value={data.email} onChange={handleChange} className="border rounded w-full px-4 py-2" />
            <label className="inline-flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              Simpan info untuk checkout berikutnya.
            </label>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="border rounded p-4 bg-gray-50">
              <div className="flex justify-between border-b pb-2">
                <span>Adidas Birmingham BNIB</span>
                <span>Rp 12.500.000</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span>Adidas Munchen BNIB</span>
                <span>Rp 5.600.000</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>Rp 18.100.000</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Pengiriman</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2">
                <span>Total</span>
                <span>Rp 18100000</span>
              </div>
            </div>

            {/* Payment Options */}
            <div>
              <h3 className="font-semibold mb-2">Metode Pembayaran</h3>
              <label className="flex items-center mb-2">
                <input type="radio" name="paymentMethod" value="bank" checked={data.paymentMethod === 'bank'} onChange={handleChange} className="mr-2" />
                Bank
                <img src="resources/images/app.png" className="h-5 ml-4" />
              </label>
              <label className="flex items-center">
                <input type="radio" name="paymentMethod" value="cod" checked={data.paymentMethod === 'cod'} onChange={handleChange} className="mr-2" />
                Bayar di Tempat
              </label>
            </div>

            {/* Kupon */}
            <div className="flex gap-2">
              <input
                name="coupon"
                placeholder="Kode Kupon"
                value={data.coupon}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
              />
              <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                Gunakan Kupon
              </button>
            </div>

            {/* Confirm */}
            <button
              type="submit" // ⬅️ submit form
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  )
}
