import React from 'react'
import InstagramAdsHero from './InstagramAdsHero'
import InstagramAdsServices from './InstagramAdsServices'
import InstagramAdsWhyChoose from './InstagramAdsWhyChoose'
import InstagramAdsBenefits from './InstagramAdsBenefits'
import InstagramAdsFaq from './InstagramAdsFaq'
import WebCTA from '../web-design/webCta'

const InstagramAds = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <InstagramAdsHero />
            <InstagramAdsServices />
            <InstagramAdsWhyChoose />
            <InstagramAdsBenefits />
            <InstagramAdsFaq />
            <WebCTA />
        </div>
    )
}

export default InstagramAds
