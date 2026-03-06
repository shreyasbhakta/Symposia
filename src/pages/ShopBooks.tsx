import React from 'react';
import { ExternalLink, BookOpen, ShoppingCart, Heart } from 'lucide-react';

const ShopBooks = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-symposia-red mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Shop Our Books</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our carefully curated collection of over 2,500 titles available through our Amazon storefront. 
            Every purchase supports our community mission.
          </p>
        </div>

        {/* About Our Collection */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Symposia's Collection</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Symposia Community Bookstore, we believe that great books should be accessible to everyone. 
              Our collection features a diverse range of titles carefully selected to inspire, educate, and entertain 
              readers of all ages and interests.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              From contemporary fiction to classic literature, from children's books to academic texts, 
              our inventory reflects the diverse interests and needs of our Hoboken community. Each book 
              in our collection has been chosen with care to ensure quality and relevance.
            </p>
            <div className="bg-symposia-yellow bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Why Shop With Us?</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-symposia-red mr-2" />
                  Support our community bookstore and local programs
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-symposia-red mr-2" />
                  Carefully curated selection by book lovers
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-symposia-red mr-2" />
                  Proceeds help fund community events and educational programs
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-symposia-red mr-2" />
                  Convenient online shopping with Amazon's reliable service
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Our Collection Includes</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <BookOpen className="h-8 w-8 text-symposia-turquoise mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Fiction & Literature</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <BookOpen className="h-8 w-8 text-symposia-yellow mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Non-Fiction</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <BookOpen className="h-8 w-8 text-symposia-orange mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Children's Books</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <BookOpen className="h-8 w-8 text-symposia-lime mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Academic Texts</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <BookOpen className="h-8 w-8 text-symposia-red mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Art & Photography</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <BookOpen className="h-8 w-8 text-symposia-turquoise mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Poetry & Essays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-symposia-red bg-opacity-10 rounded-lg p-12">
          <ShoppingCart className="h-16 w-16 text-symposia-red mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">BUY FROM SYMPOSIA!</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Need new reading material? Peruse Symposia's inventory with over 2,500 titles on Amazon. 
            Every purchase directly supports our community programs and helps us continue our mission.
          </p>
          
          <a
            href="https://www.amazon.com/s?me=A2K6ZNUTSJAUFX&marketplaceID=ATVPDKIKX0DER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-symposia-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-symposia-orange transition-colors shadow-lg"
          >
            <ExternalLink className="h-6 w-6 mr-3" />
            Browse Our Amazon Inventory
          </a>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Opens in a new window • Secure shopping through Amazon
          </p>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Shopping Benefits</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Fast and reliable shipping through Amazon
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Secure payment processing
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Easy returns and customer service
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Support for our local community bookstore
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Visit Us In Person</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              While you can browse our full inventory online, we invite you to visit our physical location 
              in Hoboken to experience the full Symposia atmosphere.
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p><strong>Address:</strong> 510 Washington St, Hoboken, NJ 07030</p>
              <p><strong>Hours:</strong> 12 PM - 5 PM, 7 days a week</p>
              <p><strong>Phone:</strong> (201) 963-0909</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBooks;