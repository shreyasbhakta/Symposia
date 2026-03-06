import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { images } from '../assets/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Events', href: '/events' },
    { name: 'Donations', href: '/donations' },
    { name: 'Community', href: '/community' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Space Rental', href: '/space-rental' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img
                src={images.logo}
                alt="Symposia Community Bookstore"
                className="h-10 w-auto object-contain"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Symposia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <DarkModeToggle />
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-symposia-red dark:hover:text-symposia-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/shop-books"
              className="bg-symposia-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-symposia-orange transition-colors"
            >
              Shop Books
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-symposia-red dark:hover:text-symposia-yellow focus:outline-none ml-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-symposia-red dark:hover:text-symposia-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/shop-books"
              className="bg-symposia-red text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-symposia-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop Books
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;