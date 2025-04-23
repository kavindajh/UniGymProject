import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Chat', path: '/chat' },
    ,
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md transition-all">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gymBlue-600">
          Uni<span className="text-black">Gym</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-gymBlue-500 ${
                location.pathname === link.path
                  ? 'text-gymBlue-600'
                  : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/register">
            <Button className="ml-4 bg-gymBlue-500 hover:bg-gymBlue-600">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
         <div className="fixed top-10 right-0 h-full w-0.8/4 backdrop-blur-md shadow-lg flex flex-col  items-start px-4 py-4 space-y-4 animate-slide-in-right bg-[rgb(255,255,255)]">

        
        {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              className={`text-xl font-semibold transition-colors hover:text-gymBlue-600 ${
                location.pathname === link.path
                  ? 'text-gymBlue-600'
                  : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/register" onClick={toggleMenu}>
            <Button className="w-full bg-gymBlue-500 hover:bg-gymBlue-600">
              Register
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
