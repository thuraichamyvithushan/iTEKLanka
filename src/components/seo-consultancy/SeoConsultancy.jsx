import React from 'react'
import SeoConsultancyHero from './SeoConsultancyHero'
import SeoConsultancyServices from './SeoConsultancyServices'
import SeoConsultancyWhyTrust from './SeoConsultancyWhyTrust'
import SeoConsultancyBenefits from './SeoConsultancyBenefits'
import SeoConsultancyFaq from './SeoConsultancyFaq'
import WebCTA from '../web-design/webCta'

const SeoConsultancy = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <SeoConsultancyHero />
            <SeoConsultancyServices />
            <SeoConsultancyWhyTrust />
            <SeoConsultancyBenefits />
            <SeoConsultancyFaq />
            <WebCTA />
        </div>
    )
}

export default SeoConsultancy
