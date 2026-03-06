import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-8 h-8" />
              <span className="text-xl font-semibold">Dynamique Studio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour capturer tous vos moments précieux avec
              professionnalisme et créativité.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/galerie" className="hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+229 0196571070</li>
              <li>frejusdery@gmail.com</li>
              <li>Cotonou, Lobozounkpa</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
              © {new Date().getFullYear()} Dynamique Studio. Site développé par FreedelDev.
          </p>
        </div>
      </div>
    </footer>
  );
}