import React from 'react'
import LinkedinAdsHero from './LinkedinAdsHero'
import LinkedinAdsServices from './LinkedinAdsServices'
import LinkedinAdsWhyChoose from './LinkedinAdsWhyChoose'
import LinkedinAdsBenefits from './LinkedinAdsBenefits'
import LinkedinAdsFaq from './LinkedinAdsFaq'
import WebCTA from '../web-design/webCta'

const LinkedinAds = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <LinkedinAdsHero />
            <LinkedinAdsServices />
            <LinkedinAdsWhyChoose />
            <LinkedinAdsBenefits />
            <LinkedinAdsFaq />
            <WebCTA />
        </div>
    )
}

export default LinkedinAds
