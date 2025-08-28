import { Link } from 'react-router-dom';
import { Dna, Facebook, Linkedin, Github, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <Dna className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Ismat Jerin Lamia</h3>
                <p className="text-gray-400 text-sm">Biotechnology Researcher</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to advancing scientific knowledge through molecular genetics research and biotechnological innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'about', 'skills', 'research', 'achievements', 'contact'].map((section) => (
                <Link
                  key={section}
                  to={section === 'home' ? '/' : `/${section}`}
                  className="block text-gray-400 hover:text-white transition-colors capitalize text-sm"
                >
                  {section}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Research Interests</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>• Molecular Biology & Genetics</p>
              <p>• 3D Bioprinting & Organoids</p>
              <p>• Agricultural Biotechnology</p>
              <p>• Medical Applications</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Developed By: Nazmus Sakib Apurba | Designed for scientific excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;