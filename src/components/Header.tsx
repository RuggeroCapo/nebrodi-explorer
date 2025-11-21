import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages with white backgrounds need dark navbar
  const whiteBackgroundPages = ['/partners', '/news', '/puntate'];
  const isDarkNav = whiteBackgroundPages.includes(location.pathname) ||
    location.pathname.startsWith('/news/') ||
    location.pathname.startsWith('/events/');

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b ${
        isDarkNav
          ? 'bg-white/90 border-gray-200'
          : 'bg-white/10 border-white/20'
      }`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://www.nebroditour.it/wp-content/uploads/2025/02/Logo-sito-Nebrodi-Tour02-100x29.png"
                alt="Nebrodi Tour"
                className={`h-8 sm:h-10 md:h-12 w-auto ${
                  isDarkNav ? '' : 'brightness-0 invert'
                }`}
                style={isDarkNav ? {} : { filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <NavLink to="/" className={`transition-colors ${
                isDarkNav
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-white/80'
              }`}>
                Eventi
              </NavLink>
              <NavLink to="/puntate" className={`transition-colors ${
                isDarkNav
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-white/80'
              }`}>
                Puntate
              </NavLink>
              <NavLink to="/partners" className={`transition-colors ${
                isDarkNav
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-white/80'
              }`}>
                Partners
              </NavLink>
              <NavLink to="/news" className={`transition-colors ${
                isDarkNav
                  ? 'text-gray-900 hover:text-gray-600'
                  : 'text-white hover:text-white/80'
              }`}>
                News
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isDarkNav
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="absolute inset-y-0 right-0 w-full">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center justify-center gap-8 px-6 pt-20">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl font-medium hover:text-white/80 transition-colors"
              >
                Eventi
              </Link>
              <Link
                to="/puntate"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl font-medium hover:text-white/80 transition-colors"
              >
                Puntate
              </Link>
              <Link
                to="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl font-medium hover:text-white/80 transition-colors"
              >
                Partners
              </Link>
              <Link
                to="/news"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl font-medium hover:text-white/80 transition-colors"
              >
                News
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};