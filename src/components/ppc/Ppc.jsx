import React from 'react'
import PpcHeroSection from './PpcHeroSection'
import PpcServicesSection from './PpcServicesSection'
import PpcWhyChoose from './PpcWhyChoose'
import PpcBenefits from './PpcBenefits'
import PpcFaq from './PpcFaq'
import WebCTA from '../web-design/webCta'

const Ppc = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <PpcHeroSection />
            <PpcServicesSection />
            <PpcWhyChoose />
            <PpcBenefits />
            <PpcFaq />
            <WebCTA />
        </div>
    )
}

export default Ppc
