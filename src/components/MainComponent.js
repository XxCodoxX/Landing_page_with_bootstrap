import React from 'react'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer';
import SectionFour from './pages/SectionFour';
import SectionFive from './pages/SectionFive';
import SectionSix from './pages/SectionSix';
import SectionTwo from './pages/SectionTwo';
import SectionThree from './pages/SectionThree';
import SectionOne from './pages/SectionOne';

const MainComponent = () => {
    return (
        <>

      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <Footer/>
            
        </>
    )
}

export default MainComponent
