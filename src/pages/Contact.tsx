import { Icon } from "@iconify-icon/react";
import { Facebook, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
      {/* Hero / Intro Section */}
      <div className="flex flex-col gap-4 mb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-[#181113] dark:text-white tracking-tight text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          Hubungi Kami
        </h1>
        <p className="text-[#89616f] dark:text-[#ccb0ba] text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Jika Anda memiliki pertanyaan atau ingin memesan buket khusus, jangan ragu untuk menghubungi kami. Kami siap membantu Anda.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
          <div className="bg-white dark:bg-[#1a0b10] rounded-2xl p-6 md:p-8 shadow-sm border border-[#f0e6ea] dark:border-[#3a2e32]">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <h3 className="text-2xl font-bold text-[#181113] dark:text-white">
                Kirim Pesan
              </h3>
            </div>
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-[#181113] dark:text-gray-200 ml-1">
                    Nama Anda
                  </span>
                  <input
                    className="w-full h-12 rounded-xl border border-[#e6dbdf] dark:border-[#3a2e32] bg-[#fdfbfb] dark:bg-[#221016] px-4 text-[#181113] dark:text-white placeholder:text-[#89616f]/60 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-[#181113] dark:text-gray-200 ml-1">
                    Email
                  </span>
                  <input
                    className="w-full h-12 rounded-xl border border-[#e6dbdf] dark:border-[#3a2e32] bg-[#fdfbfb] dark:bg-[#221016] px-4 text-[#181113] dark:text-white placeholder:text-[#89616f]/60 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="contoh@email.com"
                    type="email"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-[#181113] dark:text-gray-200 ml-1">
                  Subjek
                </span>
                <div className="relative">
                  <select className="w-full h-12 rounded-xl border border-[#e6dbdf] dark:border-[#3a2e32] bg-[#fdfbfb] dark:bg-[#221016] px-4 text-[#181113] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none appearance-none cursor-pointer">
                    <option>Pemesanan Buket Custom</option>
                    <option>Pernikahan & Acara</option>
                    <option>Workshop Inquiry</option>
                    <option>General Question</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#89616f]">
                    expand_more
                  </span>
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-[#181113] dark:text-gray-200 ml-1">
                  Pesan
                </span>
                <textarea
                  className="w-full min-h-[160px] rounded-xl border border-[#e6dbdf] dark:border-[#3a2e32] bg-[#fdfbfb] dark:bg-[#221016] p-4 text-[#181113] dark:text-white placeholder:text-[#89616f]/60 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                  placeholder="Ceritakan tentang buket impian Anda..."
                ></textarea>
              </label>
              <button
                className="mt-2 w-full md:w-auto self-start h-12 px-8 rounded-xl bg-[#181113] dark:bg-white text-white dark:text-[#181113] font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                type="button"
              >
                <span>Kirim Pesan</span>
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#f0e6ea] dark:border-[#3a2e32] h-[320px] relative group">
            <div className="absolute inset-0 bg-[#f4f0f2] dark:bg-[#2a1b20] flex items-center justify-center">
              <img
                alt="Map"
                className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbkrp8ILRC25hohHbFFoUo6s6DD0rtewNpUB5G3PnjpQ847OkRpWXz-jZloVoza9hrZOlqrk9lvJvMmPHLDKl3esZdGdUTiY_HqAAArP5MvjgDao8By1n8U-edxOVroXnBakLXD7WGLno3GK0VCtAtW3iWRXVkYOHI6cYj7DDtlGdzZAYzkACgHsRApUiO7lhXQcKl7-vyLat6euz2ogdbMGPyovpJQD86qfQuCJJgeVAqTp5wlc84JPsbL_lXUCjUEyOYbdh8o8"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white dark:bg-[#1a0b10] p-3 rounded-full shadow-xl animate-bounce">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    location_on
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1a0b10] px-4 py-2 rounded-lg shadow-md text-xs font-bold text-[#181113] dark:text-white pointer-events-none">
                Lihat peta lebih besar
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions & Info */}
        <div className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2">
          {/* Main CTA: WhatsApp */}
          <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20 group cursor-pointer transition-transform hover:-translate-y-1">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="bg-white/20 w-fit p-3 rounded-xl backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <div>
                <h2 className="text-3xl font-black leading-tight mb-2">
                  Chat on WhatsApp
                </h2>
                <p className="text-white/90 text-base font-medium max-w-[300px]">
                  Butuh respon cepat untuk keadaan darurat bunga? Chat langsung dengan florist kami.
                </p>
              </div>
              <button className="bg-white text-primary h-12 px-6 rounded-xl font-bold text-base w-full flex items-center justify-center gap-2 hover:bg-[#fdfbfb] transition-colors mt-2">
                <span>Mulai Chat</span>
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-black/5 rounded-full blur-2xl"></div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              {
                icon: "storefront",
                label: "Kunjungi Toko Kami",
                value: "Jl. Sedonglor No. 123,\nCirebon, Jawa Barat",
              },
              {
                icon: "schedule",
                label: "Jam Buka",
                value: "Senin - Sabtu: 9:00 AM - 7:00 PM\nMinggu: 10:00 AM - 4:00 PM",
              },
              {
                icon: "call",
                label: "Dukungan Telepon",
                value: "+62 812-3456-7890",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-[#1a0b10] p-5 rounded-2xl border border-[#f0e6ea] dark:border-[#3a2e32] flex items-start gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="bg-[#f8f6f6] dark:bg-[#2a1b20] p-3 rounded-xl text-[#181113] dark:text-white shrink-0">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#89616f] mb-1">
                    {item.label}
                  </p>
                  <p className="text-base font-bold text-[#181113] dark:text-white leading-snug whitespace-pre-wrap">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-lg font-bold text-[#181113] dark:text-white">
              Ikuti perjalanan kami
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <SocialCard name="Instagram" />
              <SocialCard name="TikTok" />
              <SocialCard name="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialIcons = ({name}: {name: string}) => {
  switch (name) {
    case "Instagram":
      return <Instagram />
    case "TikTok":
      return <Icon icon="ic:baseline-tiktok" width={24} height={24} />
    case "Facebook":
      return <Facebook />
  }
}

const SocialCard = ({ name }: { name: string }) => (
  <a
    href="#"
    className="group flex flex-col items-center justify-center gap-3 bg-white dark:bg-[#1a0b10] border border-[#f0e6ea] dark:border-[#3a2e32] hover:border-primary hover:bg-primary/5 transition-all p-4 rounded-2xl h-[120px]"
  >
    <div className="text-[#181113] dark:text-white group-hover:text-primary transition-colors">
      {/* Using a generic circle for icon as SVG is complex to inline cleanly here, but keeping it simple */}
      <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold text-xs">
        <SocialIcons name={name} />
      </div>
    </div>
    <span className="text-xs font-bold text-[#181113] dark:text-white">
      {name}
    </span>
  </a>
);
