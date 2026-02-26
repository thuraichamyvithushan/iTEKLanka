import React from 'react'
import ReputationHero from './ReputationHero'
import ReputationServices from './ReputationServices'
import ReputationWhyTrust from './ReputationWhyTrust'
import ReputationBenefits from './ReputationBenefits'
import ReputationFaq from './ReputationFaq'
import WebCTA from '../web-design/webCta'

const ReputationMarketing = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <ReputationHero />
            <ReputationServices />
            <ReputationWhyTrust />
            <ReputationBenefits />
            <ReputationFaq />
            <WebCTA />
        </div>
    )
}

export default ReputationMarketing
