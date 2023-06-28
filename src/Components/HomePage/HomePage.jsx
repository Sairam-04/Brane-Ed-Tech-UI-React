import React from 'react'
import NavComponent from './NavComponent'
import HomeChild1 from './HomeChild1'
import Features from './Features'
import ParentsVoice from './ParentsVoice'
import Leader from './Leader'
import Footer from './Footer'
import Ourproject from './Ourproject'

const HomePage = () => {
  return (
    <>
        <NavComponent />
        <div className='Home__Div'>
            <HomeChild1 />
        </div>
        <Features />
        <Ourproject />
        <Leader />
        <ParentsVoice />
        <Footer />
    </>
  )
}

export default HomePage