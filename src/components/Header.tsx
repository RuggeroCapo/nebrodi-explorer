import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-white/30 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://www.nebroditour.it/wp-content/uploads/2025/02/Logo-sito-Nebrodi-Tour02-100x29.png"
              alt="Nebrodi Tour"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/puntate">Puntate</NavLink>
            <NavLink to="/partners">Partners</NavLink>
            <NavLink to="/news">News</NavLink>
          </nav>


        </div>
      </div>
    </header>
  );
};