import React from 'react'
import SocialMarketingHero from './SocialMarketingHero'
import SocialMarketingServices from './SocialMarketingServices'
import SocialMarketingWhyChoose from './SocialMarketingWhyChoose'
import SocialMarketingBenefits from './SocialMarketingBenefits'
import SocialMarketingFaq from './SocialMarketingFaq'
import WebCTA from '../web-design/webCta'

const SocialMediaMarketing = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <SocialMarketingHero />
            <SocialMarketingServices />
            <SocialMarketingWhyChoose />
            <SocialMarketingBenefits />
            <SocialMarketingFaq />
            <WebCTA />
        </div>
    )
}

export default SocialMediaMarketing
