import { Head, usePage } from '@inertiajs/react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '../../components/ui/carousel'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  original_price?: number;
  discount_price?: number;
};

type Category = {
  id: number;
  name: string;
};

type PageProps = {
  products: Product[];
  categories: Category[];
  flashSales: Product[];
  bestSellers: Product[];
  newArrivals: Product[];
};

export default function Home() {
  const { props } = usePage<PageProps>();
  const { flashSales, bestSellers } = props;

  return (
    <>
      <Head title="Beranda" />
      <Navbar />

      {/* Hero Banner */}
      <div className="w-full overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <img src="/images/banner-1.jpg" alt="Promo" className="w-full object-cover" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Flash Sale */}
      <section className="my-10 px-4">
        <h2 className="font-bold text-xl mb-4">Penjualan Kilat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashSales.slice(0, 1).map((product) => (
            <Card key={product.id}>
              <CardContent className="p-2">
                <img src={product.image} alt={product.name} className="rounded-lg w-full h-36 object-cover" />
                <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                <p className="text-xs text-gray-500 line-through">Rp {product.original_price}</p>
                <p className="text-sm font-bold text-red-500">Rp {product.discount_price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Produk Terlaris */}
      <section className="my-10 px-4">
        <h2 className="font-bold text-xl mb-4">Produk Terlaris</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.slice(0, 1).map((product) => (
            <Card key={product.id}>
              <CardContent className="p-2">
                <img src={product.image} alt={product.name} className="rounded-lg w-full h-36 object-cover" />
                <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                <p className="text-sm font-bold">Rp {product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Banner Promo Tengah */}
      <section className="my-10 px-4">
        <div className="bg-black text-white rounded-lg flex flex-col md:flex-row items-center justify-between p-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Enhance Your Music Experience</h3>
            <p className="text-sm">Upgrade Kuping Anda dengan membeli Produk IEM ini</p>
            <Button className="mt-4 bg-green-500 hover:bg-green-600">Buy Now</Button>
          </div>
          <img src="../public/assets/products/MAY.png" alt="MAY" className="max-w-xs mt-4 md:mt-0" />
        </div>
      </section>

      {/* Jelajahi Produk Kami */}
      <section className="my-10 px-4">
        <h2 className="font-bold text-xl mb-4">Jelajahi Produk Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestSellers.slice(0, 1).map((product) => (
            <Card key={product.id}>
              <CardContent className="p-2">
                <img src={product.image} alt={product.name} className="rounded-lg w-full h-36 object-cover" />
                <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
                <p className="text-sm font-bold">Rp {product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Koleksi Terbaru */}
      <section className="my-10 px-4">
        <h2 className="font-bold text-xl mb-4">Koleksi Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src="/images/woman-collection.jpg" className="mx-auto" />
            <p className="font-semibold mt-2">Koleksi Wanita</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src="../public/assets/products/MAY.png" className="mx-auto" />
            <p className="font-semibold mt-2">Speaker</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <img src="/images/perfume.jpg" className="mx-auto" />
            <p className="font-semibold mt-2">Parfum</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
