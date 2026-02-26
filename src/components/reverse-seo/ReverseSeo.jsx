import React from 'react'
import ReverseSeoHero from './ReverseSeoHero'
import ReverseSeoServices from './ReverseSeoServices'
import ReverseSeoWhyTrust from './ReverseSeoWhyTrust'
import ReverseSeoBenefits from './ReverseSeoBenefits'
import ReverseSeoFaq from './ReverseSeoFaq'
import WebCTA from '../web-design/webCta'

const ReverseSeo = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <ReverseSeoHero />
            <ReverseSeoServices />
            <ReverseSeoWhyTrust />
            <ReverseSeoBenefits />
            <ReverseSeoFaq />
            <WebCTA />
        </div>
    )
}

export default ReverseSeo
