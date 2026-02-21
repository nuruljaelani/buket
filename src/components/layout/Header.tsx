import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/catalog", label: "Katalog" },
    { to: "/contact", label: "Kontak" },
    { to: "/about", label: "Tentang" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f4f0f2] bg-white/90 backdrop-blur-md dark:bg-background-dark/90 dark:border-gray-800">
      <div className="px-6 lg:px-10 py-4 flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 relative z-50">
          <img src="/logo.png" alt="Logo" className="size-10" />
          <h2 className="text-text-main dark:text-white text-xl font-bold tracking-tight">
            Sedia Kado
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={clsx(
                "text-text-main dark:text-gray-200 hover:text-primary transition-colors text-sm font-semibold relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full",
                location.pathname === link.to && "text-primary after:w-full",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-50 size-10 flex items-center justify-center text-text-main dark:text-white hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          <Icon
            icon={
              isMenuOpen ? "solar:close-circle-bold" : "charm:menu-hamburger"
            }
            className="text-2xl"
          />
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={clsx(
            "fixed top-0 left-0 bg-white dark:bg-background-dark/80 backdrop-blur-xl z-50 md:hidden transition-all duration-500 ease-in-out",
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none",
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 p-6 w-[60vw]">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  "text-xl font-bold transition-all duration-300 transform",
                  location.pathname === link.to
                    ? "text-primary scale-110"
                    : "text-text-main dark:text-white hover:text-primary",
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}

            <div
              className={clsx(
                "mt-4 flex gap-6 transition-all duration-500 delay-500",
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
              )}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};
