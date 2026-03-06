import React from 'react';
import { Gift, CreditCard, Mail, Store } from 'lucide-react';

const GiftCards = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Gift className="h-16 w-16 text-symposia-yellow mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gift Certificates</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Give the perfect gift for book lovers and community enthusiasts. Our gift certificates 
            can be used for books, events, and more at Symposia Community Bookstore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* In-Store Purchase */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-symposia-red p-6">
              <Store className="h-12 w-12 text-white mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">In-Store Purchase</h2>
              <p className="text-white opacity-90">Visit us to purchase gift certificates in person</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-red rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Available for purchase during our opening hours (12 PM - 5 PM, 7 days a week)
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-red rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose any amount you'd like
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-red rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Beautiful physical certificates perfect for gifting
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-red rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Can be used immediately for books and event tickets
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-symposia-red bg-opacity-10 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Visit us at:</strong> 510 Washington St, Hoboken, NJ 07030
                </p>
              </div>
            </div>
          </div>

          {/* Online Purchase */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-symposia-turquoise p-6">
              <Mail className="h-12 w-12 text-white mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Online Purchase</h2>
              <p className="text-white opacity-90">Order online and we'll mail the certificate</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pay online for convenience
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Customized paper certificate mailed to your desired location
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Perfect for long-distance gifting
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-symposia-turquoise rounded-full mr-3 mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Include a personal message
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-symposia-turquoise text-white py-3 px-6 rounded-md hover:bg-symposia-lime hover:text-black transition-colors font-semibold">
                  Order Online Gift Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">How to Use Your Gift Certificate</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-symposia-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Browse & Select</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Choose from our curated collection of books or register for upcoming events
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-symposia-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Present Certificate</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Bring your gift certificate to the store or mention it when registering for events
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-symposia-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enjoy!</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Take home your books or enjoy our community events
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Perfect For</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <Gift className="h-4 w-4 text-symposia-red mr-2" />
                Book lovers and avid readers
              </li>
              <li className="flex items-center">
                <Gift className="h-4 w-4 text-symposia-red mr-2" />
                Community event enthusiasts
              </li>
              <li className="flex items-center">
                <Gift className="h-4 w-4 text-symposia-red mr-2" />
                Teachers and students
              </li>
              <li className="flex items-center">
                <Gift className="h-4 w-4 text-symposia-red mr-2" />
                Anyone who supports local community initiatives
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Terms & Conditions</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Gift certificates do not expire</li>
              <li>• Can be used for books, events, and workshops</li>
              <li>• Not redeemable for cash</li>
              <li>• Lost certificates cannot be replaced</li>
              <li>• Remaining balance stays on certificate for future use</li>
            </ul>
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="mt-16 text-center bg-symposia-yellow bg-opacity-10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions About Gift Certificates?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're here to help! Contact us for more information about purchasing or using gift certificates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:(201)963-0909"
              className="bg-symposia-red text-white px-6 py-3 rounded-md hover:bg-symposia-orange transition-colors"
            >
              Call Us: (201) 963-0909
            </a>
            <a
              href="mailto:symposia.bookstore@gmail.com"
              className="bg-symposia-turquoise text-white px-6 py-3 rounded-md hover:bg-symposia-lime hover:text-black transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;