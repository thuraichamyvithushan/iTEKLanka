import React from 'react'
import SocialMediaHero from './SocialMediaHero'
import SocialMediaServices from './SocialMediaServices'
import SocialMediaWhyChoose from './SocialMediaWhyChoose'
import SocialMediaContent from './SocialMediaContent'
import SocialMediaFaq from './SocialMediaFaq'
import WebCTA from '../web-design/webCta'

const SocialMediaAdvertising = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <SocialMediaHero />
            <SocialMediaServices />
            <SocialMediaWhyChoose />
            <SocialMediaContent />
            <SocialMediaFaq />
            <WebCTA />
        </div>
    )
}

export default SocialMediaAdvertising
