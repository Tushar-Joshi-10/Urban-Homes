import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-wider">URBAN HOMES</h3>
            <p className="text-gray-400 leading-relaxed">
              Building Modern Urban Spaces with innovative design and sustainable practices.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#studio" className="text-gray-400 hover:text-white transition-colors">
                  Studio
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Architecture Lane, Design District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">info@urbanhomes.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Urban Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
