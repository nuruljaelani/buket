import { Link, useParams } from "react-router-dom";
import { bouquets } from "../products";
import { Icon } from "@iconify-icon/react";

export const ProductDetails = () => {
  // For now, we'll use the hardcoded details for "Blushing Peony Dream"
  // as requested from the Stitch design.
  const { slug } = useParams();
  const product = bouquets.find((b) => b.slug === slug);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-2xl font-bold">Produk tidak ditemukan</h2>
        <Link to="/catalog" className="text-primary hover:underline">
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const productDetails = {
    title: product.title,
    price: product.price,
    description: product.desc,
    composition: product.composition,
    size: product.size,
    wrapping: product.wrapper,
    img: product.img,
  };

  const handleOrder = () => {
    const link = `https://sediakado.vercel.app/products/${product.slug}.html?v=${Date.now()}`;

    const message = `
    Halo Kak 🌷

    Saya mau pesan buket ini ya:

    💐 ${product.title}
    🔗 ${link}

    Bisa dibantu proses selanjutnya?
  `;

    const url = `https://wa.me/6285603840608?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex mb-8 text-sm font-medium text-text-muted">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span className="mx-2 text-gray-300">/</span>
        <Link to="/catalog" className="hover:text-primary transition-colors">
          Catalog
        </Link>
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-text-main dark:text-white">
          {productDetails.title}
        </span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Product Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] transform rotate-2 scale-[0.98]"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-white">
            <img
              src={productDetails.img}
              alt={productDetails.title}
              className="w-full h-full object-cover transform motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
            />
          </div>

          {/* Thumbnails (Static for now) */}
          {/* <div className="grid grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden border-2 border-transparent hover:border-primary transition-all cursor-pointer bg-gray-100"
              >
                <img
                  src={productDetails.img}
                  alt={`View ${i}`}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div> */}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-soft-pink text-primary text-xs font-bold uppercase tracking-wider">
                Premium Collection
              </span>
              <div className="flex text-primary gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined text-sm fill-current"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main dark:text-white tracking-tight">
              {productDetails.title}
            </h1>
            <p className="text-3xl font-bold text-primary">
              {productDetails.price}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
              {productDetails.description}
            </p>

            <div className="grid gap-6 py-8 border-y border-gray-100 dark:border-gray-800">
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-soft-pink flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    local_florist
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">
                    Komposisi
                  </h4>
                  <p className="text-sm text-text-muted">
                    {productDetails.composition}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-soft-pink flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    straighten
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">
                    Ukuran
                  </h4>
                  <p className="text-sm text-text-muted">
                    {productDetails.size}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-soft-pink flex items-center justify-center shrink-0">
                  <Icon
                    icon={"solar:gift-bold"}
                    className="text-primary text-2xl"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">
                    Pembungkus
                  </h4>
                  <p className="text-sm text-text-muted">
                    {productDetails.wrapping}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className="w-full py-4 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
              onClick={handleOrder}
            >
              <span className="material-symbols-outlined text-[18px]">
                chat
              </span>
              <span>Order via WhatsApp</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 pt-6 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                verified
              </span>
              <span>Pesanan Aman</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                local_shipping
              </span>
              <span>Pengiriman Cepat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section (Simple version to avoid overcomplicating) */}
      <section className="mt-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-3xl font-bold dark:text-white">
            You May Also Like
          </h2>
          <Link
            to="/catalog"
            className="text-primary font-bold hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bouquets.slice(0, 4).map((item) => (
            <div key={item.title} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-primary font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
