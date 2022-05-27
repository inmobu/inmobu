import type { NextPage } from 'next';
import React, { useState } from 'react'
import Head from 'next/head'
import Image, { ImageLoaderProps } from 'next/image'

import Navbar from '../components/Layout/Navbar';
import FirstSection from '../components/coomingsoon/FirstSection';
import Footer from '../components/Layout/Footer'


const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      {/* <ThirdSection /> */}
      {/* <CookieBanner /> */}
      <Footer/>
    </div>
  )
}

export default Home
