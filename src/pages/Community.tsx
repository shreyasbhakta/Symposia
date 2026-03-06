import React from 'react';
import { Users, Mail, Heart, BookOpen } from 'lucide-react';
import { images } from '../assets/images';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {images.community.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Community at Symposia"
                className="rounded-lg w-full h-48 object-cover shadow-lg"
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Community</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Symposia Bookstore is more than a place to find books – it's a vibrant community hub where 
            connections are made, creativity flourishes, and everyone is welcome.
          </p>
        </div>

        {/* About the Bookstore */}
        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-symposia-red mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About Symposia Community Bookstore</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Located in the heart of Hoboken, Symposia Community Bookstore serves as a gathering place for book lovers, 
              artists, writers, and community members of all backgrounds. Our cozy space hosts a carefully curated 
              collection of books alongside regular events that celebrate literature, art, and human connection.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              We believe that books have the power to transform lives and build bridges between people. Through our 
              thrift shop model, community events, and support for local artists, we're working to create a more 
              connected and culturally rich neighborhood for everyone.
            </p>
          </div>
        </div>

        {/* Community Programs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Puppetonia */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-symposia-turquoise p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Puppetonia</h3>
              <p className="text-white opacity-90">Family Fun for All Ages</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Looking to reconnect with your inner child? Puppetonia can help! Our shows are guaranteed fun 
                for the whole family, young and old! The little ones will love our adorably mischievous puppets 
                - and so will you! (Lucky for you, we only charge for the kids!)
              </p>
              <a
                href="https://www.peerspace.com/pages/listings/66d8c0ecdabdebbebe1774ef?utm_source=copy_link&utm_campaign=listing_sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-symposia-red text-white px-6 py-2 rounded-md hover:bg-symposia-orange transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-symposia-yellow p-6">
              <h3 className="text-2xl font-bold text-black mb-2">Newsletter</h3>
              <p className="text-black opacity-80">Stay Connected</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Subscribe to our newsletter by filling out the form below. Your email is safe and guaranteed 
                not to be spammed or sold. IMPORTANT: After you subscribe, click on the activation link in 
                the email you'll receive from our website.
              </p>
              <Link
                to="/contact#newsletter"
                className="inline-block bg-symposia-turquoise text-white px-6 py-2 rounded-md hover:bg-symposia-lime hover:text-black transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Community Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-symposia-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Inclusivity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We welcome everyone, regardless of background, age, or experience. Our space is designed 
                to be accessible and comfortable for all community members.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-symposia-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Connection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of human connection. Through books, events, and shared experiences, 
                we help people find their community and build lasting relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-symposia-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to lifelong learning and growth. Our events, workshops, and book discussions 
                provide opportunities for intellectual and creative development.
              </p>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-symposia-turquoise bg-opacity-10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Involved</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            There are many ways to become part of the Symposia community. Whether you're interested in 
            volunteering, attending events, or simply browsing our collection, we'd love to meet you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-symposia-red text-white px-6 py-3 rounded-md hover:bg-symposia-orange transition-colors"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/events"
              className="bg-symposia-yellow text-black px-6 py-3 rounded-md hover:bg-symposia-lime transition-colors"
            >
              Join Our Events
            </Link>
            <Link
              to="/contact"
              className="bg-symposia-turquoise text-white px-6 py-3 rounded-md hover:bg-symposia-orange transition-colors"
            >
              Visit Our Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;