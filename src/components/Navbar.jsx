// src/components/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative z-50 top-0 sticky w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="p-0 bg-white rounded-full border border-black/5 shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300">
            <Link
              to="/">
              <img src={logo} alt="iTek Solutions UK" className="w-40 sm:w-48 md:w-56 h-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-2 border border-black/5 shadow-xl shadow-black/10 transition-all duration-300">
            {/* SERVICES Mega Menu */}
            <div
              className="group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className="text-black font-bold hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-300 px-5 py-2.5 rounded-full uppercase tracking-tight"
              >
                SERVICES
              </Link>

              {/* Mega Menu */}
              {isServicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[80vw] bg-white backdrop-blur-xl rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-50">
                  <div className="grid grid-cols-4 gap-6 p-8">
                    {/* Column 1 – Paid Advertising */}
                    <div>
                      <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider border-b border-black/5 pb-2">Paid Advertising</h3>
                      <ul className="space-y-2.5 text-gray-600 text-sm">
                        <li><Link to="/services/google-ads" className="hover:text-black hover:translate-x-1 inline-block transition-all">Google Ads</Link></li>
                        <li><Link to="/services/google-display" className="hover:text-black hover:translate-x-1 inline-block transition-all">Google Display Marketing</Link></li>
                        <li><Link to="/services/google-remarketing" className="hover:text-black hover:translate-x-1 inline-block transition-all">Google Remarketing</Link></li>
                        <li><Link to="/services/google-shopping" className="hover:text-black hover:translate-x-1 inline-block transition-all">Google Shopping Ads</Link></li>
                        <li><Link to="/services/fraud-click" className="hover:text-black hover:translate-x-1 inline-block transition-all">Invalid or Fraud Click</Link></li>
                        <li><Link to="/services/ppc" className="hover:text-black hover:translate-x-1 inline-block transition-all">Pay Per Click</Link></li>
                        <li><Link to="/services/youtube-ads" className="hover:text-black hover:translate-x-1 inline-block transition-all">YouTube Ads</Link></li>
                        <li><Link to="/services/linkedin-ads" className="hover:text-black hover:translate-x-1 inline-block transition-all">LinkedIn Advertising</Link></li>
                      </ul>
                    </div>

                    {/* Column 2 – Social Media */}
                    <div>
                      <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider border-b border-black/5 pb-2">Social Media</h3>
                      <ul className="space-y-2.5 text-gray-600 text-sm">
                        <li><Link to="/services/social-media-advertising" className="hover:text-black hover:translate-x-1 inline-block transition-all">Social Media Advertising</Link></li>
                        <li><Link to="/services/social-media-marketing" className="hover:text-black hover:translate-x-1 inline-block transition-all">Social Media Marketing</Link></li>
                        <li><Link to="/services/tiktok-ads" className="hover:text-black hover:translate-x-1 inline-block transition-all">TikTok Advertising</Link></li>
                        <li><Link to="/services/x-advertising" className="hover:text-black hover:translate-x-1 inline-block transition-all">X Advertising</Link></li>
                        <li><Link to="/services/facebook-ads" className="hover:text-black hover:translate-x-1 inline-block transition-all">Facebook Advertising</Link></li>
                        <li><Link to="/services/instagram-ads" className="hover:text-black hover:translate-x-1 inline-block transition-all">Instagram Advertising</Link></li>
                      </ul>
                    </div>

                    {/* Column 3 – SEO */}
                    <div>
                      <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider border-b border-black/5 pb-2">SEO</h3>
                      <ul className="space-y-2.5 text-gray-600 text-sm">
                        <li><Link to="/services/seo" className="hover:text-black hover:translate-x-1 inline-block transition-all">SEO</Link></li>
                        <li><Link to="/services/seo-audit" className="hover:text-black hover:translate-x-1 inline-block transition-all">SEO Audit</Link></li>
                        <li><Link to="/services/seo-consultancy" className="hover:text-black hover:translate-x-1 inline-block transition-all">SEO Consultancy</Link></li>
                        <li><Link to="/services/reverse-seo" className="hover:text-black hover:translate-x-1 inline-block transition-all">Reverse SEO</Link></li>
                        <li><Link to="/services/reputation-marketing" className="hover:text-black hover:translate-x-1 inline-block transition-all">Reputation Marketing</Link></li>
                        <li><Link to="/services/local-seo" className="hover:text-black hover:translate-x-1 inline-block transition-all">Local SEO GMP</Link></li>
                      </ul>
                    </div>

                    {/* Column 4 – Web & Design */}
                    <div>
                      <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider border-b border-black/5 pb-2">Web & Design</h3>
                      <ul className="space-y-2.5 text-gray-600 text-sm">
                        <li><Link to="/services/web-design" className="hover:text-black hover:translate-x-1 inline-block transition-all">Web Design</Link></li>
                        <li><Link to="/services/it-managed" className="hover:text-black hover:translate-x-1 inline-block transition-all">IT Manage Service</Link></li>
                        <li><Link to="/services/ui-ux" className="hover:text-black hover:translate-x-1 inline-block transition-all">UI/UX & Branding</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-black font-bold hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-300 px-5 py-2.5 rounded-full uppercase tracking-tight">
              ABOUT US
            </Link>
            <Link to="/projects" className="text-black font-bold hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-300 px-5 py-2.5 rounded-full uppercase tracking-tight">
              PROJECTS
            </Link>
            <Link to="/blog" className="text-black font-bold hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-300 px-5 py-2.5 rounded-full uppercase tracking-tight">
              BLOG
            </Link>

            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors ml-3 shadow-md hover:shadow-lg"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden bg-white rounded-xl text-black focus:outline-none shadow-lg shadow-black/10 hover:shadow-xl transition-shadow duration-300 p-2 border border-black/5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-10 h-10 transition-transform duration-400 ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu - slides from left */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white transform transition-all duration-500 ease-in-out overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        ref={menuRef}
      >
        <div className="flex justify-between items-center p-6 border-b border-black/5">
          <div className="text-black text-xl font-black uppercase tracking-tighter">
             <Link
              to="/">
              <img src={logo} alt="iTek Solutions UK" className="w-40 sm:w-48 md:w-56 h-auto" />
            </Link></div>
          <button onClick={closeMenu} className="text-black text-3xl focus:outline-none">
            ×
          </button>
        </div>

        <div className="px-6 py-8 flex flex-col space-y-6 text-black text-lg font-bold">
          {/* Mobile Services Accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full hover:text-gray-600 transition-colors text-left"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>SERVICES</span>
              <span className={`transition-transform duration-300 text-black ${isMobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {isMobileServicesOpen && (
              <div className="mt-5 ml-4 flex flex-col gap-5">
                <div>
                  <p className="text-black font-black text-xs uppercase tracking-widest mb-2 border-b border-black/5 pb-1">Paid Advertising</p>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <Link to="/services/google-ads" className="hover:text-black transition-colors" onClick={closeMenu}>Google Ads</Link>
                    <Link to="/services/google-display" className="hover:text-black transition-colors" onClick={closeMenu}>Google Display Marketing</Link>
                    <Link to="/services/google-remarketing" className="hover:text-black transition-colors" onClick={closeMenu}>Google Remarketing</Link>
                    <Link to="/services/google-shopping" className="hover:text-black transition-colors" onClick={closeMenu}>Google Shopping Ads</Link>
                    <Link to="/services/fraud-click" className="hover:text-black transition-colors" onClick={closeMenu}>Invalid or Fraud Click</Link>
                    <Link to="/services/ppc" className="hover:text-black transition-colors" onClick={closeMenu}>Pay Per Click</Link>
                    <Link to="/services/youtube-ads" className="hover:text-black transition-colors" onClick={closeMenu}>YouTube Ads</Link>
                    <Link to="/services/linkedin-ads" className="hover:text-black transition-colors" onClick={closeMenu}>LinkedIn Advertising</Link>
                  </div>
                </div>
                <div>
                  <p className="text-black font-black text-xs uppercase tracking-widest mb-2 border-b border-black/5 pb-1">Social Media</p>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <Link to="/services/social-media-advertising" className="hover:text-black transition-colors" onClick={closeMenu}>Social Media Advertising</Link>
                    <Link to="/services/social-media-marketing" className="hover:text-black transition-colors" onClick={closeMenu}>Social Media Marketing</Link>
                    <Link to="/services/tiktok-ads" className="hover:text-black transition-colors" onClick={closeMenu}>TikTok Advertising</Link>
                    <Link to="/services/x-advertising" className="hover:text-black transition-colors" onClick={closeMenu}>X Advertising</Link>
                    <Link to="/services/facebook-ads" className="hover:text-black transition-colors" onClick={closeMenu}>Facebook Advertising</Link>
                    <Link to="/services/instagram-ads" className="hover:text-black transition-colors" onClick={closeMenu}>Instagram Advertising</Link>
                  </div>
                </div>
                <div>
                  <p className="text-black font-black text-xs uppercase tracking-widest mb-2 border-b border-black/5 pb-1">SEO</p>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <Link to="/services/seo" className="hover:text-black transition-colors" onClick={closeMenu}>SEO</Link>
                    <Link to="/services/seo-audit" className="hover:text-black transition-colors" onClick={closeMenu}>SEO Audit</Link>
                    <Link to="/services/seo-consultancy" className="hover:text-black transition-colors" onClick={closeMenu}>SEO Consultancy</Link>
                    <Link to="/services/reverse-seo" className="hover:text-black transition-colors" onClick={closeMenu}>Reverse SEO</Link>
                    <Link to="/services/reputation-marketing" className="hover:text-black transition-colors" onClick={closeMenu}>Reputation Marketing</Link>
                    <Link to="/services/local-seo" className="hover:text-black transition-colors" onClick={closeMenu}>Local SEO GMP</Link>
                  </div>
                </div>
                <div>
                  <p className="text-black font-black text-xs uppercase tracking-widest mb-2 border-b border-black/5 pb-1">Web & Design</p>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <Link to="/services/web-design" className="hover:text-black transition-colors" onClick={closeMenu}>Web Design</Link>
                    <Link to="/services/it-managed" className="hover:text-black transition-colors" onClick={closeMenu}>IT Manage Service</Link>
                    <Link to="/services/ui-ux" className="hover:text-black transition-colors" onClick={closeMenu}>UI/UX & Branding</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-gray-600 transition-colors " onClick={closeMenu}>
            ABOUT US
          </Link>

          <Link to="/projects" className="hover:text-gray-600 transition-colors" onClick={closeMenu}>
            PROJECTS
          </Link>

          <Link to="/blog" className="hover:text-gray-600 transition-colors" onClick={closeMenu}>
            BLOG
          </Link>

          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-full text-center transition-colors shadow-md mt-4"
            onClick={closeMenu}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}