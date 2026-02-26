import React from 'react'
import FacebookAdsHero from './FacebookAdsHero'
import FacebookAdsServices from './FacebookAdsServices'
import FacebookAdsWhyChoose from './FacebookAdsWhyChoose'
import FacebookAdsBenefits from './FacebookAdsBenefits'
import FacebookAdsFaq from './FacebookAdsFaq'
import WebCTA from '../web-design/webCta'

const FacebookAds = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <FacebookAdsHero />
            <FacebookAdsServices />
            <FacebookAdsWhyChoose />
            <FacebookAdsBenefits />
            <FacebookAdsFaq />
            <WebCTA />
        </div>
    )
}

export default FacebookAds
