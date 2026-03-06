import { Camera, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Camera className="w-8 h-8" />
            <span className="text-xl font-semibold">Dynamique photo Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-gray-600 transition-colors">
              Accueil
            </Link>
            {isHomePage && (
              <>
                <a href="#services" className="hover:text-gray-600 transition-colors">
                  Services
                </a>
                <a href="#about" className="hover:text-gray-600 transition-colors">
                  À propos
                </a>
              </>
            )}
            <Link to="/galerie" className="hover:text-gray-600 transition-colors">
              Galerie
            </Link>
            {isHomePage ? (
              <a
                href="#contact"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact
              </a>
            ) : (
              <Link
                to="/#contact"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              {isHomePage && (
                <>
                  <a
                    href="#services"
                    className="hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    className="hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À propos
                  </a>
                </>
              )}
              <Link
                to="/galerie"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </Link>
              {isHomePage ? (
                <a
                  href="#contact"
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}