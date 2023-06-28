import React from 'react'
import NavComponent from './NavComponent'
import HomeChild1 from './HomeChild1'
import Features from './Features'
import ParentsVoice from './ParentsVoice'
import Leader from './Leader'
import Footer from './Footer'
import Ourproject from './Ourproject'
import LeadersVoice from './LeadersVoice'

const HomePage = () => {
  return (
    <>
        <NavComponent />
        <HomeChild1 />
        <Features />
        <Ourproject />
        <LeadersVoice />
        {/* <ParentsVoice />
        <Footer /> */}
    </>
  )
}

export default HomePage