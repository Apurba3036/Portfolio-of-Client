import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Menu, X, Dna, Sparkles } from 'lucide-react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Nav items array
  const NavItems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/skills', link: 'Skills' },
    { path: '/research', link: 'Research' },
    { path: '/achievements', link: 'Achievements' },
    { path: '/club', link: 'Club Activities' },
    { path: '/contact', link: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xl shadow-1xl z-50 transition-all duration-500 border-b border-white/20">
      {/* Gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/70 to-green-50/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-110"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-green-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-1 bg-gradient-to-br from-blue-400/30 to-green-400/30 rounded-full"></div>
                <Dna className="w-8 h-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <Sparkles className="w-3 h-3 text-white/60 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-green-600 bg-clip-text text-transparent tracking-tight">
                Ismat Jerin Lamia
              </h1>
              <p className="text-sm text-gray-600 font-medium tracking-wide">
                Biotechnology Researcher
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NavItems.map((item, index) => (
              <Link
                key={item.link}
                to={item.path} // Changed from href to to
                className="group relative px-4 py-2 mx-1 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-full group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></div>
                <span className="relative capitalize text-gray-700 group-hover:text-gray-900 font-medium text-sm lg:text-base transition-colors duration-300 group-hover:font-semibold">
                  {item.link}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative p-3 rounded-xl bg-white/60 hover:bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-white/20 rounded-b-2xl mx-4 mt-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-green-50/30"></div>
            <div className="relative py-6 px-2">
              {NavItems.map((item, index) => (
                <Link
                  key={item.link}
                  to={item.path} // Changed from href to to
                  className="group flex items-center px-6 py-4 mx-2 my-1 rounded-xl hover:bg-white/70 hover:shadow-md transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-green-600 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="capitalize text-gray-700 group-hover:text-gray-900 font-medium text-lg group-hover:font-semibold transition-all duration-300">
                    {item.link}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-blue-600 transform rotate-45"></div>
                  </div>
                </Link>
              ))}
              <div className="mt-6 pt-4 border-t border-gray-200/50 text-center">
                <p className="text-sm text-gray-500 font-medium">
                  Advancing Science Through Innovation
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
    </nav>
  );
}

export default Nav;