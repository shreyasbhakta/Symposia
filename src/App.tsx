import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Community from './pages/Community';
import About from './pages/About';
import Contact from './pages/Contact';
import GiftCards from './pages/GiftCards';
import SpaceRental from './pages/SpaceRental';
import ShopBooks from './pages/ShopBooks';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gift-cards" element={<GiftCards />} />
              <Route path="/space-rental" element={<SpaceRental />} />
              <Route path="/shop-books" element={<ShopBooks />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;