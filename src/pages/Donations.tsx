import React from 'react';
import { Heart, BookOpen, DollarSign } from 'lucide-react';

const Donations = () => {
  const handlePayPalDonate = () => {
    // Create and submit the PayPal form
    const form = document.createElement('form');
    form.action = 'https://www.paypal.com/cgi-bin/webscr';
    form.method = 'post';
    form.target = '_top';
    
    const hostedButtonId = document.createElement('input');
    hostedButtonId.type = 'hidden';
    hostedButtonId.name = 'hosted_button_id';
    hostedButtonId.value = 'BK66AW2VZKJC4';
    
    const cmd = document.createElement('input');
    cmd.type = 'hidden';
    cmd.name = 'cmd';
    cmd.value = '_s-xclick';
    
    form.appendChild(cmd);
    form.appendChild(hostedButtonId);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your donations help us continue providing books, community events, and educational programs 
            to everyone in our community. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Book Donations */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="text-center mb-6">
              <BookOpen className="h-16 w-16 text-symposia-turquoise mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Donate Books</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Help us build our community library by donating your gently used books.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">We Accept:</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-symposia-yellow rounded-full mr-3"></span>
                  Fiction and non-fiction books
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-symposia-yellow rounded-full mr-3"></span>
                  Children's books and educational materials
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-symposia-yellow rounded-full mr-3"></span>
                  Art and photography books
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-symposia-yellow rounded-full mr-3"></span>
                  Academic and reference books
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-symposia-yellow rounded-full mr-3"></span>
                  Magazines and periodicals (recent issues)
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-symposia-lime bg-opacity-20 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Drop-off Information:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Visit us during our opening hours (12 PM - 5 PM, 7 days a week) at 
                  510 Washington St, Hoboken, NJ 07030. Our volunteers will be happy to help you with your donation.
                </p>
              </div>
            </div>
          </div>

          {/* Monetary Donations */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="text-center mb-6">
              <Heart className="h-16 w-16 text-symposia-red mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Monetary Donations</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Support our programs and operations with a financial contribution.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <button
                  onClick={handlePayPalDonate}
                  className="bg-symposia-red hover:bg-symposia-orange text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center"
                >
                  <DollarSign className="h-6 w-6 mr-2" />
                  Donate via PayPal
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Secure donation processing through PayPal
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your donation helps us:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3"></span>
                    Maintain our community space and facilities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3"></span>
                    Organize free community events and workshops
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3"></span>
                    Support local artists and writers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3"></span>
                    Provide educational programs for all ages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-symposia-yellow bg-opacity-10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a PUBLIC BENEFIT nonprofit corporation, Symposia Community Bookstore operates exclusively for 
            educational and charitable purposes. Your donations directly support our mission to make books 
            and reading accessible to everyone while fostering community connections and cultural exchange.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donations;