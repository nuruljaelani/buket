import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-[#f4f0f2] dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* <span className="material-symbols-outlined text-primary text-2xl">
                local_florist
              </span> */}
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-lg dark:text-white">
                Sedia Kado
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Menyediakan berbagai macam kado untuk berbagai macam acara.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-muted hover:text-primary transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm-1.634 7.63a3.67 3.67 0 115.26 5.26 3.67 3.67 0 01-5.26-5.26z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <div>
            <h4 className="font-bold text-text-main dark:text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-primary transition-colors"
                >
                  All Flowers
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Same Day Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Subscriptions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Corporate Gifts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-main dark:text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-[#f4f0f2] dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© 2026 Bloom & Bliss. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
