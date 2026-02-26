import React from 'react'
import RemarketingHero from './RemarketingHero'
import RemarketingServices from './RemarketingServices'
import RemarketingWhyChoose from './RemarketingWhyChoose'
import RemarketingBenefits from './RemarketingBenefits'
import RemarketingFaq from './RemarketingFaq'
import WebCTA from '../web-design/webCta'

const GoogleRemarketing = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <RemarketingHero />
            <RemarketingServices />
            <RemarketingWhyChoose />
            <RemarketingBenefits />
            <RemarketingFaq />
            <WebCTA />
        </div>
    )
}

export default GoogleRemarketing
