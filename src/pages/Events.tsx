import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { images } from '../assets/images';
import { fetchEventsMapped, type AppEvent } from '../api/wordpress';

function buildDummyEvents(): AppEvent[] {
  const now = new Date();
  const mkStart = (daysFromNow: number, hours24: number, minutes: number) => {
    const d = new Date(now);
    d.setDate(d.getDate() + daysFromNow);
    d.setHours(hours24, minutes, 0, 0);
    return d;
  };
  const fmtDate = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const fmtTime = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  const starts = [
    mkStart(7, 18, 30),
    mkStart(10, 11, 0),
    mkStart(14, 19, 0),
    mkStart(18, 18, 0),
    mkStart(24, 17, 0),
    mkStart(30, 14, 0),
  ];

  return [
    {
      id: 1,
      title: 'Author Talk: Local Writers Showcase',
      date: fmtDate(starts[0]),
      time: fmtTime(starts[0]),
      location: 'Symposia Bookstore',
      description: 'Join us for an evening with local authors as they share their latest works and writing journeys.',
      image: images.logo,
      category: 'Author Event',
      start: starts[0].toISOString(),
    },
    {
      id: 2,
      title: "Children's Story Time",
      date: fmtDate(starts[1]),
      time: fmtTime(starts[1]),
      location: 'Symposia Bookstore',
      description: 'Bring your little ones for an interactive story time session with fun activities and snacks.',
      image: images.logo,
      category: "Children's Event",
      start: starts[1].toISOString(),
    },
    {
      id: 3,
      title: 'Poetry Reading Night',
      date: fmtDate(starts[2]),
      time: fmtTime(starts[2]),
      location: 'Symposia Bookstore',
      description: 'An intimate evening of poetry readings featuring both established and emerging poets.',
      image: images.logo,
      category: 'Poetry',
      start: starts[2].toISOString(),
    },
    {
      id: 4,
      title: 'Book Club Discussion: Contemporary Fiction',
      date: fmtDate(starts[3]),
      time: fmtTime(starts[3]),
      location: 'Symposia Bookstore',
      description: "Monthly book club meeting discussing this month's contemporary fiction selection.",
      image: images.logo,
      category: 'Book Club',
      start: starts[3].toISOString(),
    },
    {
      id: 5,
      title: 'Community Art Exhibition Opening',
      date: fmtDate(starts[4]),
      time: fmtTime(starts[4]),
      location: 'Symposia Bookstore',
      description: 'Celebrate local artists with the opening of our monthly community art exhibition.',
      image: images.logo,
      category: 'Art Event',
      start: starts[4].toISOString(),
    },
    {
      id: 6,
      title: 'Writing Workshop: Getting Started',
      date: fmtDate(starts[5]),
      time: fmtTime(starts[5]),
      location: 'Symposia Bookstore',
      description: 'A beginner-friendly workshop for aspiring writers to learn the basics of creative writing.',
      image: images.logo,
      category: 'Workshop',
      start: starts[5].toISOString(),
    },
  ];
}

function isFutureEvent(event: AppEvent, nowMs: number): boolean {
  if (event.start) {
    const ms = Date.parse(event.start);
    if (!Number.isNaN(ms)) return ms >= nowMs;
  }
  const msFromDisplay = Date.parse(event.date);
  if (!Number.isNaN(msFromDisplay)) return msFromDisplay >= nowMs;
  return true;
}

const Events = () => {
  const [events, setEvents] = useState<AppEvent[]>(() => buildDummyEvents());
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchEventsMapped({ fallbackImageUrl: images.logo })
      .then((data) => {
        if (!cancelled && data.length > 0) setEvents(data);
      })
      .catch(() => {
        if (!cancelled) setEvents(buildDummyEvents());
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const futureEvents = useMemo(() => {
    const nowMs = Date.now();
    const hasAnyStart = events.some((e) => typeof e.start === 'string' && e.start.length > 0);
    const filtered = events.filter((e) => {
      if (hasAnyStart) return Boolean(e.start) && isFutureEvent(e, nowMs);
      return isFutureEvent(e, nowMs);
    });
    return filtered.sort((a, b) => {
      const aMs = a.start ? Date.parse(a.start) : Date.parse(a.date);
      const bMs = b.start ? Date.parse(b.start) : Date.parse(b.date);
      if (Number.isNaN(aMs) || Number.isNaN(bMs)) return 0;
      return aMs - bMs;
    });
  }, [events]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Community Events</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for engaging events that bring our community together through literature, art, and meaningful conversations.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12 text-gray-600 dark:text-gray-400">
            Loading events…
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && futureEvents.length === 0 && (
            <div className="lg:col-span-3 md:col-span-2 col-span-1 text-center py-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Stay Tuned!!</h2>
              <p className="text-gray-600 dark:text-gray-300">
                New events will be posted soon.
              </p>
            </div>
          )}

          {!loading &&
            futureEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-symposia-red mb-2">
                    <span className="bg-symposia-red bg-opacity-10 px-2 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-symposia-turquoise" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-symposia-yellow" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-symposia-orange" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <button
                    className="w-full bg-symposia-red text-white py-2 px-4 rounded-md hover:bg-symposia-orange transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to stay updated on all our events?
          </p>
          <Link
            to="/contact#newsletter"
            className="inline-block bg-symposia-turquoise text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-symposia-lime hover:text-black transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Event details"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-md hover:bg-black/80 transition-colors"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-sm text-symposia-red bg-symposia-red bg-opacity-10 px-2 py-1 rounded-full">
                  {selectedEvent.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedEvent.title}
              </h2>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 mr-2 text-symposia-turquoise" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4 mr-2 text-symposia-yellow" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 text-symposia-orange" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
