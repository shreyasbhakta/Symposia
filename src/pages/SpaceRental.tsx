import React from 'react';
import { Users, Calendar, Music, Camera, Coffee, Phone, Mail } from 'lucide-react';
import { images } from '../assets/images';

const SpaceRental = () => {
  const spaceImages = images.spaceRental;
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Space Rental</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Host your next event at Symposia Community Bookstore. Our versatile space is perfect for 
            workshops, community gatherings, artistic events, and celebrations.
          </p>
        </div>

        {/* Space Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {spaceImages.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={src}
                alt="Event space at Symposia"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Space Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Our Space</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Symposia Bookstore space can be rented for workshops, community groups, artistic events 
              or birthday parties organized through Puppetonia. Our welcoming environment provides 
              the perfect backdrop for meaningful gatherings and creative events.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-symposia-red mr-3" />
                <span className="text-gray-600 dark:text-gray-300">Seating for about 40 people</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-symposia-turquoise mr-3" />
                <span className="text-gray-600 dark:text-gray-300">Tables and flexible seating arrangements</span>
              </div>
              <div className="flex items-center">
                <Music className="h-5 w-5 text-symposia-yellow mr-3" />
                <span className="text-gray-600 dark:text-gray-300">Large screen and amplification system available</span>
              </div>
              <div className="flex items-center">
                <Camera className="h-5 w-5 text-symposia-orange mr-3" />
                <span className="text-gray-600 dark:text-gray-300">Perfect for photography and filming</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Perfect For</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <Users className="h-8 w-8 text-symposia-red mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Workshops</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <Calendar className="h-8 w-8 text-symposia-turquoise mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Community Groups</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <Music className="h-8 w-8 text-symposia-yellow mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Concerts</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <Camera className="h-8 w-8 text-symposia-orange mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300">Art Exhibitions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Space Has Been Used For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-symposia-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Film Shootings</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Independent movie companies have used our space for various filming projects
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-symposia-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Musical Concerts</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Musicians have performed intimate concerts in our cozy, acoustic-friendly environment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-symposia-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Art Exhibitions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visual artists have showcased their work in our gallery-style space
              </p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-symposia-lime bg-opacity-10 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What We Provide</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <Coffee className="h-4 w-4 text-symposia-turquoise mr-2" />
                  Tables and seating for up to 40 people
                </li>
                <li className="flex items-center">
                  <Coffee className="h-4 w-4 text-symposia-turquoise mr-2" />
                  Large screen for presentations
                </li>
                <li className="flex items-center">
                  <Coffee className="h-4 w-4 text-symposia-turquoise mr-2" />
                  Amplification system (upon request)
                </li>
                <li className="flex items-center">
                  <Coffee className="h-4 w-4 text-symposia-turquoise mr-2" />
                  Welcoming bookstore atmosphere
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Please Note</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-symposia-red rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  We do not provide catering services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-symposia-red rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  You are welcome to bring food and drinks for your event
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-symposia-red rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Advanced booking is recommended
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-16 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Join Our Community!</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Symposia hopes that everyone is staying safe and well read! As you may have noticed, 
            we are very excited to start our in-person events! Come participate or visit us during 
            our opening hours 12 pm to 5 pm 7 days a week!
          </p>
          
          <div className="bg-symposia-turquoise bg-opacity-10 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">We're Looking for Volunteers!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Help us shelf books and assist customers. Flexible hours, great environment, free books!
            </p>
            <button className="bg-symposia-turquoise text-white px-6 py-3 rounded-md hover:bg-symposia-lime hover:text-black transition-colors">
              Learn More About Volunteering
            </button>
          </div>
        </div>

        {/* Contact for Rental */}
        <div className="text-center bg-symposia-red bg-opacity-10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Book Your Event?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            To inquire about holding your event at Symposia Bookstore, please get in touch with us. 
            We'll be happy to discuss your needs and help make your event a success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:(201)963-0909"
              className="bg-symposia-red text-white px-6 py-3 rounded-md hover:bg-symposia-orange transition-colors inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call: (201) 963-0909
            </a>
            <a
              href="mailto:symposia.bookstore@gmail.com"
              className="bg-symposia-turquoise text-white px-6 py-3 rounded-md hover:bg-symposia-lime hover:text-black transition-colors inline-flex items-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceRental;