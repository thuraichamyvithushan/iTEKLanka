import React from 'react'
import TiktokAdsHero from './TiktokAdsHero'
import TiktokAdsServices from './TiktokAdsServices'
import TiktokAdsWhyChoose from './TiktokAdsWhyChoose'
import TiktokAdsBenefits from './TiktokAdsBenefits'
import TiktokAdsFaq from './TiktokAdsFaq'
import WebCTA from '../web-design/webCta'

const TiktokAds = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <TiktokAdsHero />
            <TiktokAdsServices />
            <TiktokAdsWhyChoose />
            <TiktokAdsBenefits />
            <TiktokAdsFaq />
            <WebCTA />
        </div>
    )
}

export default TiktokAds
