import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";


export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <header className="flex items-center justify-between px-6 py-4 shadow-md bg-blue-100">
            <div className="flex items-center gap-2">
                <img
                    src="resources/images/logo.png"
                    alt="Logo KlikKita"
                    className="h-11 w-auto"
                />
                <h1 className="font-bold text-xl">KlikKita</h1>
            </div>


            <nav className="flex gap-6 text-sm">
                <Link href="/" className="hover:underline">Beranda</Link>
                <Link href="/contact" className="hover:underline">Kontak</Link>
                <Link href="/about" className="hover:underline">Tentang Kami</Link>
                <Link href="/register" className="hover:underline">Daftar</Link>
            </nav>

            {/* Search + Icon */}
            <div className="flex items-center gap-4">
                {/* Input dan Search */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Apa yang sedang kamu cari?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
                        onKeyDown={handleKeyDown}
                        className="border rounded px-4 py-2 text-sm w-64"
                    />
                    <button
                        onClick={handleSearch}
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                        <FaSearch className="text-base" />
                    </button>
                </div>

                {/* Ikon-ikon */}
                <Link href="/cart" className="text-gray-700 hover:text-blue-600 transition duration-200">
                <FaShoppingCart className="text-xl cursor-pointer" />
                </Link>
                <Link href="/account" className="text-gray-700 hover:text-blue-600 transition duration-200">
                <FaUser className="text-xl cursor-pointer" />
                </Link>
            </div>
        </header>
    );
}
