import React from 'react'
import GoogleShoppingHeroSection from './GoogleShoppingHeroSection'
import GoogleShoppingServicesSection from './GoogleShoppingServicesSection'
import GoogleShoppingWhyChoose from './GoogleShoppingWhyChoose'
import GoogleShoppingBenefits from './GoogleShoppingBenefits'
import GoogleShoppingFaq from './GoogleShoppingFaq'
import WebCTA from '../web-design/webCta'

const GoogleShopping = () => {
    return (
        <div className='bg-black relative text-white selection:bg-red-600 selection:text-white min-h-screen mt-[-130px]'>
            <GoogleShoppingHeroSection />
            <GoogleShoppingServicesSection />
            <GoogleShoppingWhyChoose />
            <GoogleShoppingBenefits />
            <GoogleShoppingFaq />
            <WebCTA />
        </div>
    )
}

export default GoogleShopping
