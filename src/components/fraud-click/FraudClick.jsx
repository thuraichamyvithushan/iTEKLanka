import React from 'react'
import FraudClickHeroSection from './FraudClickHeroSection'
import FraudClickServicesSection from './FraudClickServicesSection'
import FraudClickWhyChoose from './FraudClickWhyChoose'
import FraudClickBenefits from './FraudClickBenefits'
import FraudClickFaq from './FraudClickFaq'
import WebCTA from '../web-design/webCta'

const FraudClick = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <FraudClickHeroSection />
            <FraudClickServicesSection />
            <FraudClickWhyChoose />
            <FraudClickBenefits />
            <FraudClickFaq />
            <WebCTA />
        </div>
    )
}

export default FraudClick
