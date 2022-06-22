import React from 'react'
import Header from '../components/Header/Header'
import SupportLandingPage from '../components/SupportLandingPage/SupportLandingPage'
import SupportSecondPage from '../components/SupportSecondPage/SupportSecondPage'
import Index from '../components/SupportServices/Index'

const Support = () => {
    return (
        <div>
            <Header />
            <SupportLandingPage />
            <SupportSecondPage />
            <Index />
        </div>
    )
}

export default Support