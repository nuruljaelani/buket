import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-soft-pink text-primary text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
            KOLEKI TERBAIK 2026
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-text-main dark:text-white">
            Buket Cantik <span className="text-primary">Untuk Setiap Momen</span>
          </h1>
          <p className="text-base text-text-muted dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Buket bunga segar pilihan dari petani lokal, dikirim ke rumah Anda
            dengan cinta. Rasakan kebahagiaan bunga pilihan hari ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link
              to="/catalog"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-2"
            >
              Belanja Sekarang
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
            <Link
              to="/catalog"
              className="bg-white dark:bg-gray-800 text-text-main dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              Lihat Koleksi
            </Link>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                check_circle
              </span>
              <span>Pengiriman hari ini</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                eco
              </span>
              <span>Bunga segar pilihan</span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-[2rem] transform rotate-3 scale-95 transition-transform duration-500 group-hover:rotate-6"></div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
            <img
              alt="A vibrant bouquet of pink peonies and eucalyptus wrapped in brown paper"
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              src="/images/products/hand-buket.png"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-text-main dark:text-white">
                    Buket Uang & Bunga
                  </p>
                  <p className="text-xs text-text-muted">Rp 70.000 - Rp 500.000 • Bestseller</p>
                </div>
                <button className="size-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Cara Kerja
          </h2>
          <p className="text-text-muted dark:text-gray-400">
            Gampang banget! Kirim cinta tidak pernah semudah ini.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
            <div className="size-16 bg-soft-pink dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">
                local_florist
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              1. Pilih Buket Favoritmu
            </h3>
            <p className="text-text-muted dark:text-gray-400 leading-relaxed">
              Pilih dari pilihan buket bunga segar yang dibuat oleh florist ahli.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
            <div className="size-16 bg-soft-pink dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">
                edit_note
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              2. Bikin Lebih Personal
            </h3>
            <p className="text-text-muted dark:text-gray-400 leading-relaxed">
              Tambahkan catatan atau hadiah kecil seperti cokelat untuk
              membuatnya lebih istimewa.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
            <div className="size-16 bg-soft-pink dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">
                local_shipping
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">
              3. Tinggal tunggu diantar
            </h3>
            <p className="text-text-muted dark:text-gray-400 leading-relaxed">
              Kami urus sisanya. Buket akan diantar dengan selamat dan tepat waktu.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 dark:text-white">
              Koleksi Pilihan
            </h2>
            <p className="text-text-muted dark:text-gray-400">
              Temukan rangkaian favorit kami musim ini.
            </p>
          </div>
          <Link
            to="/catalog"
            className="text-primary font-bold hover:text-primary/80 flex items-center gap-1 group"
          >
            Lihat Semua
            <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Collection Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
              <img
                alt="Bright yellow and pink tulip arrangement in a vase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/products/buket-1.png"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              <button className="absolute bottom-4 right-4 bg-white text-text-main p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                <span className="material-symbols-outlined">shopping_bag</span>
              </button>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
              Buket Creamy
            </h3>
            <p className="font-bold text-lg text-primary">Rp 70.000 - Rp 150.000</p>
          </div>
          {/* Collection Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
              <img
                alt="Elegant bouquet of red roses and white lilies"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/products/buket-2.png"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              <button className="absolute bottom-4 right-4 bg-white text-text-main p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                <span className="material-symbols-outlined">shopping_bag</span>
              </button>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
              Romantic Gestures
            </h3>
            <p className="font-bold text-lg text-primary">Rp 70.000 - Rp 200.000</p>
          </div>
          {/* Collection Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
              <img
                alt="Soft white flower arrangement with greenery for sympathy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/products/buket-10.png"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              <button className="absolute bottom-4 right-4 bg-white text-text-main p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white">
                <span className="material-symbols-outlined">shopping_bag</span>
              </button>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
              Sympathy & Care
            </h3>
            <p className="font-bold text-lg text-primary">Rp 70.000 - Rp 200.000</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-soft-pink/30 dark:bg-gray-800/50 rounded-3xl overflow-hidden relative max-w-7xl mx-auto px-6">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="flex justify-center gap-1 mb-6 text-primary">
            <span className="material-symbols-outlined fill-current">star</span>
            <span className="material-symbols-outlined fill-current">star</span>
            <span className="material-symbols-outlined fill-current">star</span>
            <span className="material-symbols-outlined fill-current">star</span>
            <span className="material-symbols-outlined fill-current">star</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-snug dark:text-white">
            "Buketnya cantik banget, bunganya segar dan tahan lama. Pengirimannya juga cepat dan rapi. Sangat direkomendasikan!"
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 rounded-full overflow-hidden bg-gray-200">
              <img
                alt="Portrait of a smiling woman"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZGWDd3ECugsKereywtVGWSiruLLetjCmDeHKODv7Hw9FNC47bkYUdSkL8BL1-OeDwdbADXqzaQe8CqQDnjoH7yDzMt1_357pMWoZVIAdqgoRH2v-JXUzH98E0W7mPmfGBpJXtbdT02P8JQRCIentNsH-Iob9QAJiENQZajsQOJ4TTDTfsM4WQEYbqy1CJ50NdT23C0-eLDfgJczomjOCe7lsXSxFEcM8zAAcn9k5Kg-O_VUfy64dmfUDYddwunKkxkWQZR1MJCgo"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-text-main dark:text-white">
                Nabila Putri
              </p>
              <p className="text-sm text-text-muted">Pelanggan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Bergabunglah dengan komunitas kami
            </h2>
            <p className="mb-8 opacity-90">
              Dapatkan tips perawatan bunga, penawaran eksklusif, dan diskon 10% untuk pesanan pertama Anda.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-grow px-6 py-3 rounded-xl text-text-main border-none focus:ring-2 focus:ring-white/50 bg-white placeholder-gray-400 outline-none"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                type="submit"
                className="bg-text-main hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-4 opacity-70">
              Kami menghargai privasi Anda. Berhenti berlangganan kapan saja.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
