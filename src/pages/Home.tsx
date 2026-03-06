import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Gift, BookOpen, Users } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import { images } from '../assets/images';
import { fetchEventsMapped, type AppEvent } from '../api/wordpress';

const Home = () => {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoadingEvents(true);
    fetchEventsMapped({ fallbackImageUrl: images.logo })
      .then((data) => {
        if (!cancelled) setEvents(data);
      })
      .catch(() => {
        if (!cancelled) setEvents([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingEvents(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const upcomingEvents = useMemo(() => {
    const nowMs = Date.now();
    const hasAnyStart = events.some((e) => typeof e.start === 'string' && e.start.length > 0);
    const isFuture = (event: AppEvent) => {
      if (event.start) {
        const ms = Date.parse(event.start);
        if (!Number.isNaN(ms)) return ms >= nowMs;
      }
      const msFromDisplay = Date.parse(event.date);
      if (!Number.isNaN(msFromDisplay)) return msFromDisplay >= nowMs;
      return true;
    };

    const filtered = events.filter((e) => {
      if (hasAnyStart) return Boolean(e.start) && isFuture(e);
      return isFuture(e);
    });

    return filtered
      .sort((a, b) => {
        const aMs = a.start ? Date.parse(a.start) : Date.parse(a.date);
        const bMs = b.start ? Date.parse(b.start) : Date.parse(b.date);
        if (Number.isNaN(aMs) || Number.isNaN(bMs)) return 0;
        return aMs - bMs;
      })
      .slice(0, 3);
  }, [events]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Symposia Bookstore
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A community space for books, events, and connections
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/events"
                className="bg-symposia-red text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90"
              >
                View Events
              </Link>
              <Link
                to="/donations"
                className="bg-symposia-yellow text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-symposia-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Events</h3>
              <p className="text-gray-600 dark:text-gray-300">Join our community events and activities</p>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-symposia-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Book Donations</h3>
              <p className="text-gray-600 dark:text-gray-300">Support our mission by donating books</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-symposia-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Space Rental</h3>
              <p className="text-gray-600 dark:text-gray-300">Host your next event in our space</p>
            </div>
            <div className="text-center">
              <Gift className="h-12 w-12 text-symposia-turquoise mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Gift Cards</h3>
              <p className="text-gray-600 dark:text-gray-300">Give the gift of reading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadingEvents && (
              <div className="lg:col-span-3 md:col-span-2 col-span-1 text-center py-10 text-gray-600 dark:text-gray-400">
                Loading events…
              </div>
            )}

            {!loadingEvents && upcomingEvents.length === 0 && (
              <div className="lg:col-span-3 md:col-span-2 col-span-1 text-center py-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay Tuned!!</h3>
                <p className="text-gray-600 dark:text-gray-300">New events will be posted soon.</p>
              </div>
            )}

            {!loadingEvents && upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.date} at {event.time}
                  </p>
                  <Link
                    to="/events"
                    className="text-symposia-red font-medium hover:text-symposia-orange transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-block bg-symposia-red text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-symposia-orange transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Mission</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Symposia Community Bookstore is more than just a bookstore – we're a vibrant community hub dedicated to
              fostering connection, learning, and cultural exchange through literature and meaningful events.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-symposia-red">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To create an inclusive space where ideas flourish, community thrives, and books serve as bridges
                connecting people from all walks of life. We believe in the transformative power of literature
                and the importance of accessible community spaces.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-symposia-turquoise">Community Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                As a PUBLIC BENEFIT nonprofit corporation, we're committed to making books and reading
                accessible to everyone. Through our thrift shop model and community events, we support
                local artists, educational initiatives, and charitable causes.
              </p>
            </div>
          </div>
          
          {/* Hoboken Green Business Certification */}
          <div className="mb-16 flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <img
              src={images.hobokenGreenBusiness}
              alt="Hoboken Green Business Certified"
              className="w-48 md:w-64 h-auto flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                🌿 Proud to Be a Hoboken Green Business!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're honored to be recognized by the <strong>City of Hoboken</strong> as a certified{' '}
                <strong>Green Business</strong>. This recognition reflects our ongoing commitment to sustainability,
                eco-friendly practices, and reducing our environmental impact. Together, we're building a cleaner,
                greener Hoboken!
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">What We Do</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="w-16 h-16 bg-symposia-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-black" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Accessible Reading</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Making books inviting and accessible to the broadest audience possible</p>
              </div>
              
              <div className="p-4">
                <div className="w-16 h-16 bg-symposia-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Community Center</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Providing a venue for educational activities and community gatherings</p>
              </div>
              
              <div className="p-4">
                <div className="w-16 h-16 bg-symposia-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-black" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Cultural Events</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Supporting emerging artists and developing new community projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;