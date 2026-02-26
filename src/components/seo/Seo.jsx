import React from 'react'
import SeoHeroSection from './SeoHeroSection'
import SeoServicesSection from './SeoServicesSection'
import SeoWhyChoose from './SeoWhyChoose'
import SeoBenefits from './SeoBenefits'
import SeoFaq from './SeoFaq'
import WebCTA from '../web-design/webCta'

const Seo = () => {
  return (
    <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
      <SeoHeroSection />
      <SeoServicesSection />
      <SeoWhyChoose />
      <SeoBenefits />
      <SeoFaq />
      <WebCTA />
    </div>
  )
}

export default Seo