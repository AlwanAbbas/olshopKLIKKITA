import { Head, usePage } from '@inertiajs/react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '../../components/ui/carousel'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'

type Product = {
  id: number
  name: string
  image: string
  price: number
  original_price?: number
  discount_price?: number
}

type Category = {
  id: number
  name: string
}

type PageProps = {
  products: Product[]
  categories: Category[]
  flashSales: Product[]
  bestSellers: Product[]
  newArrivals: Product[]
}

export default function Home() {
  const { props } = usePage<PageProps>()
  const { flashSales, bestSellers, newArrivals } = props

  return (
    <>
      <Head title="Beranda" />
      <Navbar />

      {/* Hero Carousel */}
      <section className="w-full bg-gray-100">
        <Carousel className="w-full h-[820px] overflow-hidden">
          <CarouselContent className="h-full">
            <CarouselItem className="h-full">
              <div className="w-full h-full flex items-center justify-center p-0">
                <video
                  src="resources/videos/01.mp4"
                  controls={false}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Jelajahi Menurut Kategori */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Jelajahi Menurut Kategori</h2>
          <Button variant="link" className="text-sm text-blue-600 hover:underline">
            Lihat Semua
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { name: "Fashion", img: "resources/images/01.png" },
            { name: "Elektronik", img: "resources/images/02.png" },
            { name: "Rumah Tangga", img: "resources/images/03.png" },
            { name: "Kecantikan", img: "resources/images/04.png" },
            { name: "Olahraga", img: "resources/images/05.png" },
          ].map((item, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition rounded-lg overflow-hidden border border-gray-200"
            >
              <CardContent className="p-4 flex flex-col items-center">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded mb-2" />
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold text-gray-900">🔥Produk Terlaris</h2>
    <Button variant="link" className="text-sm text-blue-600 hover:underline">
      Lihat Semua Produk
    </Button>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {[
      {
        name: "Samsung Flip",
        price: "Rp 10.000.000",
        rating: 4,
        reviews: 3500,
        img: "resources/images/P1.png",
      },
      {
        name: "Adidas London BNIB",
        price: "Rp 5.000.000",
        rating: 5,
        reviews: 95,
        img: "resources/images/A2.png",
      },
      {
        name: "Set Bundle outfit hitam kece",
        price: "Rp 12.448.905",
        rating: 5,
        reviews: 10,
        img: "resources/images/A4.png",
      },
      {
        name: "Heels Black",
        price: "Rp 26.000.000",
        rating: 4,
        reviews: 145,
        img: "resources/images/A8.png",
      },
      {
        name: "Kemeja hitam",
        price: "Rp 507.890",
        rating: 5,
        reviews: 65,
        img: "resources/images/A7.png",
        badge: "Best seller",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
      >
        {/* Badge dan Icon */}
        <div className="absolute top-2 right-2 flex gap-1 z-10">
          <button className="bg-white p-1 rounded-full shadow">❤️</button>
          <button className="bg-white p-1 rounded-full shadow">👁️</button>
        </div>
        {item.badge && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {item.badge}
          </span>
        )}

        {/* Gambar dengan tinggi tetap dan terpotong */}
  <div className="w-full h-[300px] overflow-hidden">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Konten bawah, tetap rata dan rapi */}
  <div className="p-3 flex-1 flex flex-col justify-end min-h-[130px]">
    <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.name}</p>
    <p className="text-red-600 text-sm font-semibold mt-1">{item.price}</p>
    <div className="flex justify-center items-center text-yellow-400 text-xs mt-1">
      {"★".repeat(item.rating)}
      {"☆".repeat(5 - item.rating)}
      <span className="text-gray-500 ml-1">({item.reviews})</span>
    </div>
  </div>
</div>
    ))}
  </div>
</section>

      {/* Banner Promo */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-black text-white rounded-xl flex flex-col md:flex-row items-center justify-between p-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">Enhance Your Music Experience</h3>
            <p className="text-sm text-gray-300">Upgrade kuping Anda dengan membeli produk IEM ini.</p>
            <Button className="mt-6 bg-green-500 hover:bg-green-600">Buy Now</Button>
          </div>
          <img src="/resources/images/MAY.png" alt="Promo MAY" className="w-64 h-auto mt-6 md:mt-0 md:ml-6" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-gray-800">✨Jelajahi Produk Kami</h2>
    <Button variant="link" className="text-sm text-blue-600 hover:underline">
      Lihat Semua Produk
    </Button>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {[
      {
        name: "M65 Military Jacket",
        price: "Rp 2.080.017",
        rating: 3,
        reviews: 35,
        img: "resources/images/A1.png",
      },
      {
        name: "Motorolla flip",
        price: "Rp 11.555.000",
        rating: 5,
        reviews: 95,
        img: "resources/images/P2.png",
      },
      {
        name: "Black n red Dress",
        price: "Rp 12.448.905",
        rating: 5,
        reviews: 10,
        img: "resources/images/A3.png",
      },
      {
        name: "Set bundle Jas+celana",
        price: "Rp 807.900",
        rating: 4,
        reviews: 145,
        img: "resources/images/A5.png",
      },
      {
        name: "Red Tie",
        price: "Rp 97.890",
        rating: 5,
        reviews: 65,
        img: "resources/images/A6.png",
        badge: "Baru",
      },
    ].map((item, index) => (
       <div
        key={index}
        className="relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
      >
        {/* Badge dan Icon */}
        <div className="absolute top-2 right-2 flex gap-1 z-10">
          <button className="bg-white p-1 rounded-full shadow">❤️</button>
          <button className="bg-white p-1 rounded-full shadow">👁️</button>
        </div>
        {item.badge && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            {item.badge}
          </span>
        )}

        {/* Gambar dengan tinggi tetap dan terpotong */}
  <div className="w-full h-[300px] overflow-hidden">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Konten bawah, tetap rata dan rapi */}
  <div className="p-3 flex-1 flex flex-col justify-end min-h-[130px]">
    <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.name}</p>
    <p className="text-red-600 text-sm font-semibold mt-1">{item.price}</p>
    <div className="flex justify-center items-center text-yellow-400 text-xs mt-1">
      {"★".repeat(item.rating)}
      {"☆".repeat(5 - item.rating)}
      <span className="text-gray-500 ml-1">({item.reviews})</span>
    </div>
  </div>
</div>
    ))}
  </div>
</section>
      {/* Koleksi Terbaru */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🆕 Koleksi Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-md transition">
            <img src="resources/images/P3.png" className="mx-auto h-48 object-cover rounded-lg" />
            <p className="font-semibold mt-4 text-gray-700">Iphone</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-md transition">
            <img src="resources/images/P4.png" className="mx-auto h-48 object-cover rounded-lg" />
            <p className="font-semibold mt-4 text-gray-700">Vivo</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-md transition">
            <img src="resources/images/P5.png" className="mx-auto h-48 object-cover rounded-lg" />
            <p className="font-semibold mt-4 text-gray-700">Samsung</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
