import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display text-text-main dark:text-gray-100 overflow-x-hidden bg-background-light dark:bg-background-dark">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
