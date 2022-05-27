import type { NextPage } from 'next';
import React, { useState } from 'react'
import Head from 'next/head'
import Image, { ImageLoaderProps } from 'next/image'

import Navbar from '../components/Layout/Navbar';
import FirstSection from '../components/home/FirstSection';
import SecondSection from '../components/home/SecondSection';
import SecondSectionD from '../components/home/SecondSectionD';
import ThirdSection from '../components/home/ThirdSection';
import FourthSection from '../components/home/FourthSection';
import CookieBanner from '../components/home/CookieBanner';
import Footer from '../components/Layout/Footer'


const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <SecondSectionD/>
      {/* <ThirdSection /> */}
      <FourthSection />
      {/* <CookieBanner /> */}
      <Footer/>
    </div>
  )
}

export default Home
