import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Users, BookOpen, Target } from 'lucide-react';
import { images } from '../assets/images';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center gap-6 flex-wrap">
            {images.about.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={i === 0 ? 'Symposia Bookstore' : 'Carmen Rusu - Symposia Bookstore'}
                className="rounded-lg w-48 h-48 object-cover border-4 border-symposia-red shadow-lg"
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Symposia Community Bookstore</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A PUBLIC BENEFIT nonprofit corporation dedicated to building community through books, 
            education, and cultural exchange.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="bg-symposia-red bg-opacity-10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto">
              Symposia Community Bookstore, Inc. is a PUBLIC BENEFIT nonprofit corporation in Hoboken NJ, 
              organized and operated exclusively for educational and charitable purposes. Specifically, 
              we operate a thrift shop consisting of books and offer our shop location to be used as a community center.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Visit Us</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-symposia-turquoise mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  510 Washington St.<br />
                  Hoboken, NJ 07030
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-symposia-yellow mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  (201) 805-1739
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-symposia-orange mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  symposia.bookstore@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Objectives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BookOpen className="h-6 w-6 text-symposia-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accessible Reading</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To help make books and reading as inviting and accessible to as broad an audience as possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Users className="h-6 w-6 text-symposia-turquoise mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community Center</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To offer a venue to serve as a community center and a place for educational and community activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Heart className="h-6 w-6 text-symposia-yellow mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Charitable Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To support other charities through the use of the thrift store's space to raise funds and run programs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Target className="h-6 w-6 text-symposia-orange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Artist Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To offer support for emerging local artists through exhibitions and other projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Users className="h-6 w-6 text-symposia-lime mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To develop new community projects and engage in activities related to the development of our community's social capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-symposia-turquoise bg-opacity-10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're looking to volunteer, attend events, donate books, or simply find your next great read, 
            we invite you to be part of our community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-symposia-red text-white px-6 py-3 rounded-md hover:bg-symposia-orange transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/events"
              className="bg-symposia-yellow text-black px-6 py-3 rounded-md hover:bg-symposia-lime transition-colors"
            >
              View Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;