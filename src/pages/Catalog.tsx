import { useState } from "react";
import { bouquets } from "../products";
import clsx from "clsx";
import BannerSwiper from "../components/ui/Swiper";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredBouquets = selectedCategory === "all"
    ? bouquets
    : bouquets.filter(bouquet => bouquet.categories.includes(selectedCategory));

  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-6">
      {/* Hero Section */}
      {/* <div className="relative w-full rounded-2xl overflow-hidden mb-12 shadow-lg group">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <img
          alt="Colorful floral arrangement banner"
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_z9JlEdoqQXEkZ6EUp7gNOU5oQtp9LZ8UC52zpcIP-wicm69ColvWWFCbUR87NiPWBSkMEpNKYxnRIM47cR-2sftnegpFD18pYkqc3pNyoAoHP7mPWPiErmQNJRxP-OmX_Yeegr6fVbFkEyJ__B7J5G6g76Wr5yqbhHyZbJcdndHfHSYdru1JP8d4x1N3fIGukA0Qbs561vZx6A-5P51EsF6scO3iarpnwun-7RQaoyI_VyrfuOTPcpGsdVV3GK7IGeqQ7sDkt4"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4 border border-white/30">
            Koleksi Terbaru
          </span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 drop-shadow-md">
            Handcrafted Blooms
            <br />
            for Every Moment
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md leading-relaxed drop-shadow-sm">
            Bunga segar yang dirangkai dengan indah untuk setiap momen spesial.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl w-fit transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2">
            <span>Lihat Katalog</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </div> */}

      <BannerSwiper />
      {/* Filters */}
      <div className="flex flex-col gap-6 my-10">
        <div className="flex items-center justify-between">
          <h2 className="text-[#181113] dark:text-white text-2xl font-bold">
            Kategori
          </h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {[
            { icon: "apps", label: "All", value: "all" },
            { icon: "cake", label: "Birthday", value: "birthday" },
            { icon: "favorite", label: "Wedding", value: "wedding" },
            { icon: "school", label: "Graduation", value: "graduation" },
            { icon: "event", label: "Anniversary", value: "anniversary" }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setSelectedCategory(item.value)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300",
                selectedCategory === item.value
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-[#2a161d] text-gray-500 hover:text-primary"
              )}
            >
              <span className={clsx("material-symbols-outlined text-[20px]", selectedCategory === item.value ? "text-white" : "text-primary")}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-6">
        {filteredBouquets.map((product) => (
          <Link to={`/product/${product.slug}`} key={product.title} className="group bg-white dark:bg-[#2a161d] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#f4f0f2] dark:border-[#332429] flex flex-col">
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={product.img}
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-gray-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  favorite
                </span>
              </button>
              {product.badge && (
                <div
                  className={`absolute bottom-3 left-3 px-3 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg text-xs font-bold uppercase tracking-wide ${product.badgeColor || "text-primary"} shadow-sm`}
                >
                  {product.badge}
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col gap-3 flex-grow">
              <div className="flex justify-between items-start flex-col">
                <h3 className="text-lg font-bold text-[#181113] dark:text-white leading-tight">
                  {product.title}
                </h3>
                <span className="text-lg font-bold text-primary">
                  {product.price}
                </span>
              </div>
              {/* <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-2">
                {product.desc}
              </p> */}
              {/* <div className="mt-auto">
                <button className="w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  <span>Order via WhatsApp</span>
                </button>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
