import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f4f0f2] bg-white/90 backdrop-blur-md dark:bg-background-dark/90 dark:border-gray-800">
      <div className="px-6 lg:px-10 py-4 flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">
              local_florist
            </span>
          </div> */}
          <img src="/logo.png" alt="Logo" className="size-10" />
          <h2 className="text-text-main dark:text-white text-xl font-bold tracking-tight">
            Sedia Kado
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-semibold"
          >
            Beranda
          </Link>
          <Link
            to="/catalog"
            className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-semibold"
          >
            Katalog
          </Link>
          <Link
            to="/contact"
            className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-semibold"
          >
            Kontak
          </Link>
          <Link
            to="/about"
            className="text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-semibold"
          >
            Tentang
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* <div className="hidden lg:flex items-center bg-[#f4f0f2] dark:bg-gray-800 rounded-lg px-3 py-2 w-64">
            <span className="material-symbols-outlined text-text-muted">
              search
            </span>
            <input
              className="bg-transparent border-none text-sm focus:ring-0 w-full text-text-main dark:text-white placeholder-text-muted outline-none ml-2"
              placeholder="Cari Buket..."
              type="text"
            />
          </div> */}
          {/* <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors lg:hidden">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-0 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-background-dark"></span>
          </button> */}
        </div>
      </div>
    </header>
  );
};
