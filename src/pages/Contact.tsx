import React, { useEffect, useMemo, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (location.hash === '#newsletter') {
      const el = document.getElementById('newsletter');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  const newsletterMailto = useMemo(() => {
    const to = 'symposia.bookstore@gmail.com';
    const subject = encodeURIComponent('Newsletter subscription request');
    const body = encodeURIComponent(
      `Hi Symposia,\n\nPlease add me to the newsletter.\n\nEmail: ${email || '[your email here]'}\n\nThanks!`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [email]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you! Visit us in person, give us a call, or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-symposia-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Our Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We are located at 510 Washington St, Hoboken, NJ 07030
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-symposia-turquoise mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Our Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    (201) 963-0909
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-symposia-yellow mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Our Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    symposia.bookstore@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-symposia-orange mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Opening Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    12 PM to 5 PM<br />
                    7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div id="newsletter" className="mt-12 bg-symposia-lime bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Subscribe to our newsletter to receive updates about events, new arrivals, and community news.
              </p>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = newsletterMailto;
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-symposia-turquoise focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-symposia-turquoise text-white px-6 py-2 rounded-md hover:bg-symposia-lime hover:text-black transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Your email is safe and guaranteed not to be spammed or sold.
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Find Us</h2>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.03168708459418!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2597c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2s510%20Washington%20St%2C%20Hoboken%2C%20NJ%2007030!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Symposia Bookstore Location"
              ></iframe>
            </div>
            
            <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Directions</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We're conveniently located on Washington Street in the heart of Hoboken. 
                Street parking is available, and we're easily accessible by public transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;