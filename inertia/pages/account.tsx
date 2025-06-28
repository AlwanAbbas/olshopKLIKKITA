import React, { useState } from "react";
import Footer from '../../components/ui/footer'
import Navbar from '../../components/ui/navbar'

const account = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit (e.g., via Inertia post/put)
    console.log("Form data:", form);
  };

  return (
    <>

    <Navbar />

    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Untuk menyerupai "Exclusive" di gambar */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-semibold text-white bg-blue-600 px-3 py-1 rounded-full">
              Exclusive
            </span>
          </div>

          <h2 className="text-lg font-bold mb-4 text-gray-800">Akun Saya</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            {/* Profil Saya - Aktif */}
            <li className="flex justify-between items-center font-semibold text-blue-600">
              Profil Saya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            {/* Item lain dengan ikon panah pasif */}
            <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
              Alamat
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
              Opsi Pembayaran
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <hr className="my-2 border-gray-200" /> {/* Garis pemisah lebih tipis */}
            <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
              Pengembalian
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
              Pembatalan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="flex justify-between items-center hover:text-blue-600 cursor-pointer">
              Wishlist Saya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:flex-1 bg-white shadow-md rounded-lg p-8">
        {" "}
        {/* Padding lebih besar */}
        <h1 className="text-2xl font-bold mb-8 text-gray-800">
          {" "}
          {/* Ukuran font lebih besar */}
          Edit Profil Anda
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {" "}
          {/* Spasi antar bagian lebih besar */}
          {/* Nama & Email */}
          <div className="space-y-6">
            {" "}
            {/* Spasi antar grup input */}
            <h2 className="text-xl font-semibold text-gray-800">Informasi Pribadi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {" "}
              {/* Gap yang lebih besar */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nama Depan
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500" // Padding dan fokus state
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nama Belakang
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Alamat</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Ubah Password */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Ganti Kata Sandi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
              {" "}
              {/* Gap yang lebih besar */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Kata Sandi Saat Ini
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Konfirmasi Kata Sandi Baru
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
            {" "}
            {/* Border atas untuk pemisah */}
            <button
              type="button"
              className="px-6 py-3 border border-gray-400 rounded-lg text-gray-700 font-semibold hover:bg-gray-50" // Padding, border, radius, dan hover
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700" // Padding, background, radius, dan hover
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </main>
    </div>

    <Footer />
    </>
  );
};

export default account;
