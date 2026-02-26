import React from 'react'
import DisplayHero from './DisplayHero'
import DisplayServices from './DisplayServices'
import DisplayWhyChoose from './DisplayWhyChoose'
import DisplayBenefits from './DisplayBenefits'
import DisplayFaq from './DisplayFaq'
import WebCTA from '../web-design/webCta'

const GoogleDisplay = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <DisplayHero />
            <DisplayServices />
            <DisplayWhyChoose />
            <DisplayBenefits />
            <DisplayFaq />
            <WebCTA />
        </div>
    )
}

export default GoogleDisplay
