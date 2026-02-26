import React from 'react'
import XAdsHero from './XAdsHero'
import XAdsServices from './XAdsServices'
import XAdsWhyChoose from './XAdsWhyChoose'
import XAdsBenefits from './XAdsBenefits'
import XAdsFaq from './XAdsFaq'
import WebCTA from '../web-design/webCta'

const XAds = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <XAdsHero />
            <XAdsServices />
            <XAdsWhyChoose />
            <XAdsBenefits />
            <XAdsFaq />
            <WebCTA />
        </div>
    )
}

export default XAds
