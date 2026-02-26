import React from 'react'
import GoogleAdsHero from './GoogleAdsHero'
import GoogleAdsServices from './GoogleAdsServices'
import GoogleAdsWhyChoose from './GoogleAdsWhyChoose'
import GoogleAdsBenefits from './GoogleAdsBenefits'
import GoogleAdsFaq from './GoogleAdsFaq'
import WebCTA from '../web-design/webCta'

const GoogleAds = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <GoogleAdsHero />
            <GoogleAdsServices />
            <GoogleAdsWhyChoose />
            <GoogleAdsBenefits />
            <GoogleAdsFaq />
            <WebCTA />
        </div>
    )
}

export default GoogleAds
