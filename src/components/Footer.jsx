// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/LK LOGO.png';
export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 pt-16 pb-24 md:pb-32 lg:pb-40 overflow-hidden">

      {/* Large semi-transparent "iTek" overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none select-none">
        <h2 className="text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[26rem] xl:text-[32rem] font-black text-white/10 text-center tracking-tighter leading-none">
          iTEK
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ------------------ MOBILE LAYOUT ------------------ */}
        <div className="md:hidden">

          {/* Mobile: Brand & Tagline */}
          <div className="mb-10 flex flex-col">

            <img
              src={Logo}
              alt="iTEK Logo"
              className="w-50 h-auto mb-4"
            />

            <p className="text-gray-400 text-base max-w-xs">
              Skip the traditional marketing limits and elevate your brand just about anywhere with cutting-edge digital strategies.
            </p>

            <div className="flex  gap-6 text-2xl pt-6">
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaFacebook /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaTwitter /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaInstagram /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaLinkedin /></a>

            </div>

          </div>

          {/* Mobile-only: Services + Quick Links row */}
          <div className="flex mb-10 md:hidden">
            <div className="grid grid-cols-2 gap-26 ">


              {/* Services */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
                <ul className="space-y-3 text-sm">
                 <li><Link to="/services/seo" className="hover:text-red-400 transition">SEO</Link></li>
              <li><Link to="/services/web-design" className="hover:text-red-400 transition">Web Design</Link></li>
              <li><Link to="/services/social-media" className="hover:text-red-400 transition">Social Media Ads</Link></li>
              <li><Link to="/services/google-ads" className="hover:text-red-400 transition">Google Ads</Link></li>
              <li><Link to="/services/ui-ux" className="hover:text-red-400 transition">UI/UX Design</Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
                  <li><Link to="/about" className="hover:text-red-400 transition">About Us</Link></li>
                  <li><Link to="/projects" className="hover:text-red-400 transition">Projects</Link></li>
                  <li><Link to="/blog" className="hover:text-red-400 transition">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-red-400 transition">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile-only: Support (Contact) centered */}
          <div className=" mb-8">
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>

            {/* Address */}
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3 ">
                <FaMapMarkerAlt className="text-red-400 mt-1 shrink-0" />
                <p className="hover:text-red-400 transition-colors duration-300">
                  Jaffna Headquarters
                  Mariyamman Veethy,<br />
                  Thirunelvely,
                  Jaffna, Sri Lanka
                </p>
              </li>
            </ul>

            {/* Phone + Email side by side */}
            <ul className="grid grid-cols-2 gap-4 text-sm text-gray-300 mt-4 justify-center">
              <li className="flex items-center gap-3 ">
                <FaPhoneAlt className="text-red-400 shrink-0" />
                <a href="tel:+94763065986" className="hover:text-red-400 transition-colors duration-300">
                  +94 76 306 5986
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center">
                <FaEnvelope className="text-red-400 shrink-0" />
                <a href="mailto:info@iteksolutions.lk" className="hover:text-red-400 transition-colors duration-300">
                  info@iteksolutions.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------ DESKTOP/TABLET LAYOUT ------------------ */}
        <div className="hidden md:grid grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1 - Brand & Tagline */}
          <div className="mb-4">
            <img
              src={Logo}
              alt="iTEK Logo"
              className="w-40 md:w-48 h-auto"
            />
            <p className="text-gray-400 text-base md:text-lg max-w-xs">
              Skip the traditional marketing limits and elevate your brand just about anywhere with cutting-edge digital strategies.
            </p>
            <div className="flex gap-6 md:gap-8 text-2xl pt-9">
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaFacebook /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaTwitter /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaInstagram /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaLinkedin /></a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-semibold text-lg md:text-xl mb-6">Services</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li><Link to="/services/seo" className="hover:text-red-400 transition">SEO</Link></li>
              <li><Link to="/services/web-design" className="hover:text-red-400 transition">Web Design</Link></li>
              <li><Link to="/services/social-media" className="hover:text-red-400 transition">Social Media Ads</Link></li>
              <li><Link to="/services/google-ads" className="hover:text-red-400 transition">Google Ads</Link></li>
              <li><Link to="/services/ui-ux" className="hover:text-red-400 transition">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg md:text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-red-400 transition">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-red-400 transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h4 className="text-white font-semibold text-lg md:text-xl mb-6">Support</h4>
            <ul className="space-y-4 text-sm md:text-base text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-400 mt-1 shrink-0" />
                <p className="hover:text-red-400 transition-colors duration-300">
                  Jaffna Headquarters <br />
                  Mariyamman Veethy, Thirunelvely,<br />
                  Jaffna, Sri Lanka
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-400 shrink-0" />
                <a href="tel:+94763065986" className="hover:text-red-400 transition-colors duration-300">
                  +94 76 306 5986
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-400 shrink-0" />
                <a href="mailto:info@iteksolutions.lk" className="hover:text-red-400 transition-colors duration-300">
                  info@iteksolutions.lk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} iTek Solutions LK. All rights reserved.
          </p>

          <div className="text-center md:text-right text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-red-400 transition">Privacy Policy</Link>
            <span className="mx-3">•</span>
            <Link to="/terms" className="hover:text-red-400 transition">Terms</Link>
            <span className="mx-3">•</span>
            <Link to="/contact" className="hover:text-red-400 transition">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Back-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-red-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center text-xl"
        aria-label="Back to top"
      >
        ↑
      </button>

    </footer>
  );
}