import React from 'react'
import LocalSeoHero from './LocalSeoHero'
import LocalSeoServices from './LocalSeoServices'
import LocalSeoGmbContent from './LocalSeoGmbContent'
import LocalSeoWhyChoose from './LocalSeoWhyChoose'
import LocalSeoFaq from './LocalSeoFaq'
import WebCTA from '../web-design/webCta'

const LocalSeoGmb = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <LocalSeoHero />
            <LocalSeoServices />
            <LocalSeoWhyChoose />
            <LocalSeoGmbContent />
            <LocalSeoFaq />
            <WebCTA />
        </div>
    )
}

export default LocalSeoGmb

