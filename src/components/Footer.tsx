import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                510 Washington St, Hoboken, NJ 07030
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (201) 963-0909
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@symposia.us
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="hover:text-indigo-400">Events</Link></li>
              <li><Link to="/donations" className="hover:text-indigo-400">Donations</Link></li>
              <li><Link to="/community" className="hover:text-indigo-400">Community</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/space-rental" className="hover:text-indigo-400">Space Rental</Link></li>
              <li><Link to="/gift-cards" className="hover:text-indigo-400">Gift Cards</Link></li>
              <li>
                <a
                  href="https://amazon.com/shop/symposia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  Shop Books
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/symposiabookstore" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/symposiabookstore" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/symposiabooks" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Symposia Bookstore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;