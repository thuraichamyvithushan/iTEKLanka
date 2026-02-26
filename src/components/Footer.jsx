// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 pt-16 pb-24 md:pb-32 lg:pb-40 overflow-hidden">
      {/* Dark background pattern (if you have one) */}
      {/* <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <img src={darkBgSvg} alt="" className="w-full h-full object-cover" />
      </div> */}

      {/* Large semi-transparent "iTek" overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none select-none">
        <h2 className="text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[26rem] xl:text-[32rem] font-black text-white/10 text-center tracking-tighter leading-none">
          iTEK
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          {/* Column 1 - Brand & Tagline */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              iTEK
            </h3>
            <p className="text-gray-400 text-base md:text-lg max-w-xs">
              Skip the traditional marketing limits and elevate your brand just about anywhere with cutting-edge digital strategies.
            </p>
            <div className="flex gap-6 md:gap-8  text-2xl pt-9">
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaFacebook /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaTwitter /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaInstagram /></a>
              <a href="#" className='text-gray-400 hover:text-red-400 transition'><FaLinkedin /></a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services/seo" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">SEO</Link></li>
              <li><Link to="/services/social-media-advertising" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Social Advertising</Link></li>
              <li><Link to="/services/social-media-marketing" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Social Marketing</Link></li>
              <li><Link to="/services/web-design" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Web Design</Link></li>
              <li><Link to="/services/it-managed" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">IT Managed Services</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Projects</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/help-center" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Help Center</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Terms of Service</Link></li>
              <li><Link to="/protection-plans" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Trust & Safety</Link></li>
              <li><Link to="/cancellation" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons + Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

            {/* Copyright */}
            <p className="text-gray-500 text-sm md:text-base text-center md:text-right">
              © 2026 iTek Solutions UK. All rights reserved.
            </p>
          </div>

          {/* Extra bottom links */}
          <div className=" text-center md:text-right text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-red-400 transition">Privacy Policy</Link>
            <span className="mx-3">•</span>
            <Link to="/terms" className="hover:text-red-400 transition">Terms</Link>
            <span className="mx-3">•</span>
            <Link to="/sitemap" className="hover:text-red-400 transition">Sitemap</Link>
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