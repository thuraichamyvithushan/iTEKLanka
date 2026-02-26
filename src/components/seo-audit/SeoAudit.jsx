import React from 'react'
import SeoAuditHero from './SeoAuditHero'
import SeoAuditServices from './SeoAuditServices'
import SeoAuditWhyTrust from './SeoAuditWhyTrust'
import SeoAuditBenefits from './SeoAuditBenefits'
import SeoAuditFaq from './SeoAuditFaq'
import WebCTA from '../web-design/webCta'

const SeoAudit = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <SeoAuditHero />
            <SeoAuditServices />
            <SeoAuditWhyTrust />
            <SeoAuditBenefits />
            <SeoAuditFaq />
            <WebCTA />
        </div>
    )
}

export default SeoAudit
