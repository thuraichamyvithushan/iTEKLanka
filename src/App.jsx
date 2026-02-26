import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Services from './components/ServicesShowcase'
import CaseStudies from './components/CaseStudies'
import Contact from './components/contact/contact'
import Footer from './components/Footer'
import PartnersSection from './components/PartnersSection'
import Seo from './components/seo/Seo'
import WebDesign from './components/web-design/WebDesign'
import Projects from './components/projects/Projects'
import Aboutus from './components/about'
import Blog from './components/blog/Blog'
import BlogPost from './components/blog/BlogPost'
import ScrollToTop from './components/ScrollToTop'
import ITManagedServices from './components/it-managed-services/ITManagedServices'
import UIUXBranding from './components/uiux-branding/UIUXBranding'
import SeoAudit from './components/seo-audit/SeoAudit'
import SeoConsultancy from './components/seo-consultancy/SeoConsultancy'
import ReverseSeo from './components/reverse-seo/ReverseSeo'
import ReputationMarketing from './components/reputation-marketing/ReputationMarketing'
import LocalSeoGmb from './components/local-seo-gmb/LocalSeoGmb'
import SocialMediaAdvertising from './components/social-media-advertising/SocialMediaAdvertising'
import SocialMediaMarketing from './components/social-media-marketing/SocialMediaMarketing'
import TiktokAds from './components/tiktok-ads/TiktokAds'
import XAds from './components/x-advertising/XAds'
import FacebookAds from './components/facebook-ads/FacebookAds'
import InstagramAds from './components/instagram-ads/InstagramAds'
import LinkedinAds from './components/linkedin-ads/LinkedinAds'
import YoutubeAds from './components/youtube-ads/YoutubeAds'
import Ppc from './components/ppc/Ppc'
import FraudClick from './components/fraud-click/FraudClick'
import GoogleShopping from './components/google-shopping/GoogleShopping'
import GoogleRemarketing from './components/google-remarketing/GoogleRemarketing'
import GoogleDisplay from './components/google-display/GoogleDisplay'
import GoogleAds from './components/google-ads/GoogleAds'




function App() {
  return (
    <div className="min-h-screen bg-neutral">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />

        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/it-managed" element={<ITManagedServices />} />
        <Route path="/services/ui-ux" element={<UIUXBranding />} />
        <Route path="/services/seo-audit" element={<SeoAudit />} />
        <Route path="/services/seo-consultancy" element={<SeoConsultancy />} />
        <Route path="/services/reverse-seo" element={<ReverseSeo />} />
        <Route path="/services/reputation-marketing" element={<ReputationMarketing />} />
        <Route path="/services/local-seo" element={<LocalSeoGmb />} />
        <Route path="/services/social-media-advertising" element={<SocialMediaAdvertising />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/tiktok-ads" element={<TiktokAds />} />
        <Route path="/services/x-advertising" element={<XAds />} />
        <Route path="/services/facebook-ads" element={<FacebookAds />} />
        <Route path="/services/instagram-ads" element={<InstagramAds />} />
        <Route path="/services/linkedin-ads" element={<LinkedinAds />} />
        <Route path="/services/youtube-ads" element={<YoutubeAds />} />
        <Route path="/services/ppc" element={<Ppc />} />
        <Route path="/services/fraud-click" element={<FraudClick />} />
        <Route path="/services/google-shopping" element={<GoogleShopping />} />
        <Route path="/services/google-remarketing" element={<GoogleRemarketing />} />
        <Route path="/services/google-display" element={<GoogleDisplay />} />
        <Route path="/services/google-ads" element={<GoogleAds />} />




      </Routes>

      <PartnersSection />
      <Footer />
    </div>
  )
}

export default App