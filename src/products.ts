import banner1 from "/images/banners/banner-1.webp";
import banner2 from "/images/banners/banner-2.webp";

export interface Product {
  title: string;
  price: string;
  desc: string;
  img: string;
  badge?: string;
  badgeColor?: string;
}

export interface Bouquet {
  title: string;
  price: string;
  desc: string;
  img: string;
  badge?: string;
  badgeColor?: string;
  categories: string[];
  slug: string;
  size: string;
  composition: string;
  wrapper: string;
}

export const products: Product[] = [
  {
    title: "Red Rose Delight",
    price: "$45.00",
    desc: "Classic red roses wrapped in premium black paper. Perfect for romantic gestures.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO6YDUYkVtmqCYabRKQlMM6WIGbZI6I5Ers14u8uFiHEEKNRQAmqRfTXxN6U36ZOsdjZlBAARbt_sOf3eVo2sG9YYlMs-63ZeM2TpZM60WMiVysQlWy9rOS9Kqpebh7daTWll5IceBp2hOoSvBxWWcOFW2Cd-ko7hk8_CYaWuxKWSaI3i4tgcfHt1TOc3RzjIwMK0n7fw-FPcMoYg6WOxFrH7dm7e3aIAlRsBH1y6MUWgWcBfFBn3TBKQKXk0ysRJQfprjbBdOpbw",
    badge: "Bestseller",
    badgeColor: "text-primary",
  },
  {
    title: "Pink Peony Dream",
    price: "$55.00",
    desc: "Soft pink peonies arranged with baby's breath for a dreamy, elegant look.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe-7rC9fYgdeqftTp89cwJMMSoFvJlAHtdHpW2EjgMJqoCDTEx5S4ObhkQNxlo-cJ-TmjU1qXpRhoAHTvDblr3bR5tMdlFp7RHQ4-_n_ACQOaGb9Ae_g0nFMfqoDHhzTUs3gT86JrXfmbRyl5kCUpl-3WBCf-SBANFPYL868Xr2APY3zPEAgZibVkOOzhByMI2v5R_kJvydfVgXufX4pUUSVTuHIXmQUsX0ue61E_q1-S86Tl_OehP_LU9L0FrYPcvIGlAghCh9fQ",
  },
  {
    title: "Sunshine Radiance",
    price: "$38.00",
    desc: "Brighten someone's day with a bundle of joy. Fresh sunflowers with green foliage.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPpVXhDQy6DKfBcinP7bijm-rG4HWpMevMf6BjdSvax-VyN7cfMdMZvp69hmWaWwJ3ZovJ-vRt_VqSR34157286TyzyzHq1KAbfjfkKOLuv3dRWAUGleQydUj7cpii50Q2XWkMvAw--Fx4COp8kT5gv-672DPVmMztOyVuWtf4gvlxMpa2vq1ZUMIWjAfepdfLYF6USLAmBAOHUQ-cfxrbPiBnw0kzkCLJE49vQhOUtDnDu6F9vfSC071FOcJZT-3cm5YN0zBZVps",
    badge: "Seasonal",
    badgeColor: "text-orange-600",
  },
  {
    title: "Pure White Tulips",
    price: "$42.00",
    desc: "Simplicity at its finest. Fresh white tulips that speak of purity and new beginnings.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaP5ZZfzu3ytcmXCx6kVdv9uJOD7tEWs1gtI0z3PZWLLHNFcdGAtHSNNz9yhMrpbnZ3W6Or2VU9ECOMjX2iZLKIILOFoRpZRh0JSgZ4tQ-OKCakHTXD35JnztsEgTm4h6qlEYkj2gyogv8XCCbka80EvoejPnNT8-jMrKMVzHZBqXE89bGFHRMvyuT3Enua5OWt188JytnUFvGv55PC7ymFV4TyB4KY_onxhn4J8VahQbrkMEO5FZdouoqa78XQexubkCO-6rndCM",
  },
  {
    title: "Rustic Wildflowers",
    price: "$35.00",
    desc: "A charming mix of seasonal wildflowers for a natural, hand-picked feel.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq9Nue_Zvrr-qHsJZLVwVaWlMjTmcZ-qMKYdEWvlnKu3mk2N1G9PoSG_WdHre0NFwrY579wbuHnA938OFLwCx6C9BHaO-QdFrz3ASfghzu4_gz1ogk5Q4Fwz9IHuQxpU-f1lYJRcFhFmMYNmwfAATqCS-VdxPI8FHUpSry48XlrGiQCb0MsPsuoPKRSUfKJMeTRRmZ4rBZDzXovSjNP31Zj7yyjvWcm-rOKPJxzyH5P6VBa9AEPE9IhDC8O366B3qx4ON3Yhno74U",
  },
  {
    title: "Provencal Lavender",
    price: "$30.00",
    desc: "Fragrant dried lavender imported from Provence. Long-lasting and soothing.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvbenM6LBKUg5NFRrOm34AKRuyaZQakSnvk8_55Zh0kIAEEnmSeYxDP7AuaL2c0OlhGhPJ5tdXJwFwQ6GpnCxwB_9xWI8j7PRA-hDm_zkSeNWNI0R1SnsThelIsoQ5jrjk0Tu7kFUdl_c3QIyOJyqX-5qSFMT5g5EqvxW39Y3HR46vlEUv3PpmgeHqX3DBP_DsL0Dk5p6zB2Zb7iUHSilBQmdmTiMr6ZJHg4EOxY_OMHXrypqyEbEws3Ru5DyRAySjunHnBKFJTtE",
  },
  {
    title: "Pastel Serenity",
    price: "$48.00",
    desc: "A delicate arrangement of soft pinks, peaches, and creams for a gentle touch.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoeLtzA06NujHg5qvz0KuaUeeEU-_R5tKiQBNH72pF7oyYagkEhbHsE-Y718mUWawJUCLnP4GTvLEg2gTj8bNRsh8GNNgJ1ciZszS6B86ZU5EhZatmLxeUO8dA9SGYFxktx-gxBV0KFFDe3wuwG1Vgi45edaQVEp5bSI9jRbNaxzx6VEdaP3L6qjkbzeD2QDnXmHnDjqzr3LNJB2kNFPeePUVfGGr_sDowri13-ejMdLze-rePVXRewvB3UQE6PEVYhWwRCM5ctIE",
  },
  {
    title: "Azure Hydrangeas",
    price: "$50.00",
    desc: "Voluminous blue hydrangeas that create a stunning, cloud-like visual effect.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtYoa0sVmPFWHwbHeT-UV5Y4hINLU8G8PWWfkSnh6vKHfGA29mbTfq8AB-Zjadflm6BPFG2xmHSYPgOjt9uExehZeBkVNcOzE5dxyEnxEgddUNXy4QZo-1k1ofnrJkNi7LKMEdA3FRZeFdNL5cSaL2MuU7Env7nVXL52lFkCE2iD1MPq9NMznkiFNb3qR3E8eLthlhBvdE9dMNOdlsW7ysLHT8gFazU3RruYEL31zRmw8Qbe-vn7tXVx__U0oxexhiLxozuwHWH7Y",
    badge: "Limited",
    badgeColor: "text-blue-600",
  },
];

export const bouquets: Bouquet[] = [
  {
    title: "Sweet Pastel Bloom Bouquet",
    price: "Rp 75.000 - Rp 150.000",
    desc: `Buket cantik dengan sentuhan warna pastel yang lembut dan elegan. Perpaduan bunga pink, peach, putih, dan sentuhan gold di wrapping-nya bikin tampilannya mewah tapi tetap manis. Cocok banget untuk hadiah ulang tahun, anniversary, wisuda, atau sekadar bilang “aku sayang kamu”.
Buket ini punya vibes hangat, romantis, dan classy — bikin siapa pun yang nerima langsung senyum-senyum sendiri 🤍✨`,
    img: "/images/buket-1.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["anniversary", "birthday"],
    slug: "sweet-pastel-bloom",
    size: "45cm x 35cm",
    composition: `Lily pink & lily putih
    Mawar coklat / nude,
    Gerbera peach,
    Bunga filler (baby breath / dried flower premium),
    Daun & aksen ranting dekoratif,
    Pita satin pink premium

    (Komposisi bisa sedikit menyesuaikan ketersediaan tanpa mengurangi estetika buket.)`,
    wrapper: `Tinggi: ±45–50 cm
    Lebar: ±35–40 cm
    Ukuran pas untuk dipeluk dan difoto 📸✨`,
  },
  {
    title: "Graduation Teddy Rose Bouquet",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Buket manis dengan sentuhan romantis dan playful yang bikin siapa pun langsung gemas 💕
Perpaduan teddy bear wisuda yang lucu dengan rangkaian mawar merah & pink lembut menciptakan kesan hangat, bangga, dan penuh cinta.
Cocok banget untuk hadiah wisuda, ulang tahun, anniversary, atau bentuk apresiasi spesial untuk orang tersayang. Buket ini bukan cuma cantik difoto, tapi juga jadi kenangan manis yang bisa disimpan lama ✨`,
    img: "/images/buket-2.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["anniversary", "birthday", "graduation"],
    slug: "graduation-teddy-rose",
    composition: `1 Teddy bear mini tema wisuda (dengan topi toga),
    Mawar merah premium,
    Mawar pink lembut,
    Bunga artificial dekoratif tambahan,
    Daun & filler hijau segar,
    Kartu ucapan mini (opsional custom nama),

    (Komposisi bisa sedikit menyesuaikan stok tanpa mengurangi keindahan tampilan.)`,
    size: `Tinggi: ±45–50 cm
    Lebar: ±35–40 cm
    Ukuran pas untuk dipeluk dan difoto 📸✨`,
    wrapper: `Wrapping premium warna pink pastel,
    Aksen list gold elegan,
    Lapisan tulle transparan,
    Pita satin warna soft pink,
    Finishing rapi, mewah, dan terlihat eksklusif 💖`,
  },
  {
    title: "Midnight Graduation Teddy Bouquet",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Buket manis dengan sentuhan romantis dan playful yang bikin siapa pun langsung gemas 💕
Perpaduan teddy bear wisuda yang lucu dengan rangkaian mawar merah & pink lembut menciptakan kesan hangat, bangga, dan penuh cinta.
Cocok banget untuk hadiah wisuda, ulang tahun, anniversary, atau bentuk apresiasi spesial untuk orang tersayang. Buket ini bukan cuma cantik difoto, tapi juga jadi kenangan manis yang bisa disimpan lama ✨`,
    img: "/images/buket-4.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["graduation"],
    slug: "midnight-graduation-teddy-bouquet",
    size: `Tinggi: ±45–50 cm
    Lebar: ±35–40 cm
    Ukuran pas untuk dipeluk dan difoto 📸✨`,
    composition:
      "5 Sarah Bernhardt Peonies, 3 Eucalyptus Sprigs, White Astrantia, and Waxflower.",
    wrapper: "Premium Korean Wrapping Paper",
  },
  {
    title: "Luxury Money Bouquet – Elegant Edition",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Buket spesial yang bukan cuma cantik, tapi juga berisi kejutan istimewa 💸✨
    Perpaduan uang pecahan yang dirangkai cantik dengan sentuhan bunga pastel elegan membuat buket ini terlihat mewah, unik, dan pastinya bikin penerima super happy!
    Cocok untuk hadiah wisuda, ulang tahun, lamaran, anniversary, atau kado “anti mainstream” yang lebih berkesan.
    Karena kadang, hadiah terbaik adalah yang bisa dipakai sekaligus dinikmati 😉💖`,
    img: "/images/buket-3.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["anniversary", "birthday", "graduation"],
    slug: "luxury-money-bouquet-elegant",
    size: `Tinggi: ±45–50 cm
    Lebar: ±35–40 cm
    Ukuran pas untuk dipeluk dan difoto 📸✨`,
    composition: `Uang pecahan (nominal bisa custom sesuai request),
    Bunga artificial premium (rose & filler dekoratif),
    Daun dan aksen kupu-kupu dekoratif,
    Kartu ucapan mini (bisa custom nama & pesan),
    Pita satin premium,
    (Nominal uang dan jumlah lembar bisa disesuaikan with budget.)`,
    wrapper: `Wrapping premium warna nude / mocha,
    Aksen list silver elegan,
    Lapisan pelindung transparan,
    Pita satin warna senada,
    Finishing clean, rapi, dan terlihat eksklusif 💎`,
  },
  {
    title: "Silver Luxe Money Bouquet",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Hadiah elegan dengan sentuhan mewah dan penuh makna 💐✨
    Buket ini memadukan rangkaian uang pecahan yang ditata rapi dengan dekorasi bunga premium bernuansa soft silver & pastel. Tampilannya clean, classy, dan terlihat eksklusif — cocok untuk momen spesial yang nggak mau biasa-biasa saja.

    Ideal untuk wisuda, ulang tahun, lamaran, anniversary, atau hadiah apresiasi untuk orang tersayang.
    Karena memberi itu bukan hanya tentang nilai, tapi juga tentang kesan 💖`,
    img: "/images/buket-5.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["wedding", "graduation"],
    slug: "silver-luxe-money-bouquet",
    size: `Tinggi: ±45–50 cm
    Lebar: ±35–40 cm
    Ukuran pas untuk dipeluk dan difoto 📸✨`,
    composition: `Uang pecahan (nominal bisa custom sesuai request),
    Bunga artificial premium (rose & filler dekoratif),
    Daun dan aksen kupu-kupu dekoratif,
    Kartu ucapan mini (bisa custom nama & pesan),
    Pita satin premium,
    (Nominal uang dan jumlah lembar bisa disesuaikan with budget.)`,
    wrapper: `Wrapping premium warna nude / mocha,
    Aksen list silver elegan,
    Lapisan pelindung transparan,
    Pita satin warna senada,
    Finishing clean, rapi, dan terlihat eksklusif 💎`,
  },
  {
    title: "Pure Elegance: White Daisy Art Bouquet",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Buket bunga artifisial premium yang menonjolkan kecantikan bunga Daisy putih dengan detail kelopak yang lembut dan pusat bunga berwarna kuning cerah. 
    Desainnya yang mengembang (full volume) memberikan kesan megah namun tetap ringan dipandang. Karena menggunakan bunga artifisial berkualitas, buket ini tidak akan layu dan bisa menjadi kenangan yang tersimpan selamanya.`,
    img: "/images/buket-6.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["wedding", "graduation", "birthday", "anniversary"],
    slug: "pure-elegance-white-daisy-art-bouquet",
    size: "45cm x 35cm",
    composition: `Buket cantik ini terdiri dari elemen-elemen pilihan:
    Bunga Utama: ±15-18 tangkai bunga Daisy putih (artifisial),
    Aksen: Rangkaian bunga kering (dried flower) Caspea atau sejenisnya untuk menambah tekstur alami,
    Detail: Pita satin ganda berwarna putih dengan aksen garis emas yang mewah.`,
    wrapper: `Wrapping premium warna nude / mocha,
    Aksen list silver elegan,
    Lapisan pelindung transparan,
    Pita satin warna senada,
    Finishing clean, rapi, dan terlihat eksklusif 💎`,
  },
  {
    title: "Moonlight Daisy Garden Bouquet",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Buket bunga Daisy artifisial premium dengan susunan yang lebih rapat dan melebar, menciptakan efek "taman bunga" dalam satu genggaman. Produk ini sangat cocok bagi Anda yang menyukai tampilan buket yang full dan bervolume. Karena menggunakan bunga artifisial, buket ini tahan lama dan sangat pas untuk dijadikan pajangan dekoratif setelah acara selesai.`,
    img: "/images/buket-7.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["graduation", "birthday", "anniversary"],
    slug: "moonlight-daisy-garden-bouquet",
    size: "45cm x 35cm",
    composition: `Buket cantik ini terdiri dari elemen-elemen pilihan:
    Bunga Utama: ±15-18 tangkai bunga Daisy putih (artifisial),
    Aksen: Rangkaian bunga kering (dried flower) Caspea atau sejenisnya untuk menambah tekstur alami,
    Detail: Pita satin ganda berwarna putih dengan aksen garis emas yang mewah.`,
    wrapper: `Wrapping premium warna nude / mocha,
    Aksen list silver elegan,
    Lapisan pelindung transparan,
    Pita satin warna senada,
    Finishing clean, rapi, dan terlihat eksklusif 💎`,
  },
  {
    title: "Golden Wealth Money Bouquet (Buket Uang Eksklusif)",
    price: "Rp 70.000 - Rp 150.000",
    desc: "Kombinasi sempurna antara nilai guna dan estetika. Buket uang ini dirangkai melingkar menyerupai kipas yang megah, dihiasi dengan mawar berwarna nude/champagne yang elegan. Solusi hadiah praktis yang dijamin membuat penerimanya merasa sangat dihargai.",
    img: "/images/buket-8.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["wedding", "birthday", "anniversary"],
    slug: "golden-wealth-money-bouquet",
    size: "45cm x 50cm",
    composition: `Komponen Utama: Lembaran uang kertas (jumlah bisa kustom) yang disusun melingkar rapi.
    Bunga: 5-6 tangkai bunga Mawar artifisial berwarna Champagne/Nude.
    Aksen: Dried baby's breath dan daun pakis kering untuk kesan rustik-modern.
    Detail: Kartu ucapan bulat di titik sentral buket dan pita satin krem yang senada.`,
    wrapper: `Wrapping premium warna nude / mocha,
    Aksen list silver elegan,
    Lapisan pelindung transparan,
    Pita satin warna senada,
    Finishing clean, rapi, dan terlihat eksklusif 💎`,
  },
  {
    title: "The Gentleman's Gift: Watch & Rose Bouquet",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Buket eksklusif yang menggabungkan kemewahan jam tangan dengan estetika bunga artifisial. Dirancang khusus dengan nuansa gelap dan holografik untuk memberikan kesan maskulin, elegan, dan premium. Hadiah ini sangat sempurna untuk kado wisuda kekasih, kado ulang tahun suami, atau penghargaan atas pencapaian karir seseorang yang spesial.`,
    img: "/images/buket-9.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["birthday", "graduation", "anniversary"],
    slug: "the-gentlemans-gift-watch-and-rose-bouquet",
    size: "45cm x 50cm",
    composition: `Item Utama: 1 unit Jam Tangan (tergantung pilihan/kustom) yang dipasang dengan aman di tengah rangkaian.
    Bunga: 5 kuntum bunga mawar artifisial berwarna cream/champagne yang memberikan kontras lembut.
    Aksen: Daun pakis plastik, bunga baby's breath putih, dan ranting kering untuk kesan artistik.
    Aksesori: Papan ucapan akrilik hitam kustom dengan tulisan hand-lettering berwarna putih.
    Pita: Pita satin ganda berwarna nude yang senada dengan warna bunga.`,
    wrapper: `Material Utama: Premium Black Matte Cellophane dengan pinggiran bergelombang (scalloped edge).
    Material Aksen: Kertas Iridescent/Holographic yang memantulkan warna pelangi saat terkena cahaya, menambah kesan futuristik dan mewah.
    Teknik: Multi-layered wrapping yang kokoh untuk menopang beban jam tangan dan kotak kemasannya.`,
  },
  {
    title: "The Royal Fortune: Warm Earth Money Bouquet",
    price: "Rp 70.000 - Rp 150.000",
    desc: `Definisi kado mewah yang menggabungkan nilai fungsi dan estetika tingkat tinggi. Buket uang ini disusun dengan teknik spread-out yang membuatnya terlihat sangat besar, megah, dan prestisius. Dengan sentuhan bunga lili dan mawar di bagian centerpiece, buket ini adalah pilihan utama untuk hadiah lamaran, kado ulang tahun orang tua, atau perayaan anniversary yang berkesan.`,
    img: "/images/buket-10.webp",
    badge: "Bestseller",
    badgeColor: "text-primary",
    categories: ["birthday", "graduation", "anniversary"],
    slug: "the-royal-fortune-warm-earth-money-bouquet",
    size: "45cm x 50cm",
    composition: `Item Utama: ±20 lembar uang kertas (nominal dapat disesuaikan) yang disusun rapi membentuk kipas raksasa.
    Bunga Centerpiece: Perpaduan bunga Lili besar berwarna marun, bunga mawar merah muda, dan bunga melati putih artifisial.
    Aksen: Daun hijau segar dan bunga-bunga kecil sebagai pengisi (filler) untuk mempermanis tampilan bawah.
    Pita: Pita satin berwarna merah muda lembut (soft pink) yang menjuntai cantik.`,
    wrapper: `Material: Premium Matte Cellophane yang tebal dan eksklusif.
    Warna: Perpaduan gradasi warna Terracotta, Nude Brown, dan sedikit sentuhan Cream. Warna-warna earth tone ini dipilih untuk memberikan kesan yang hangat, tulus, namun tetap terlihat sangat mahal.
    Teknik: Volume Wrapping dengan lipatan berlapis-lapis untuk memastikan buket tetap kokoh meskipun memiliki ukuran yang sangat lebar.`,
  },
];

export const banners = [
  {
    src: banner1,
    alt: "Banner 1",
  },
  {
    src: banner2,
    alt: "Banner 2",
  },
];
