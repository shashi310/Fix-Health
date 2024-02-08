import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/Testimonials'
import DoctorsSection from '../components/DoctorsSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
         <Testimonials />
      <DoctorsSection />
      <Footer />
    </div>
  )
}

export default HomePage