"use client";
import React from 'react'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from "./Navbar";
import Main from './Main'
import Feature from './Feature'
import Customized from './Customized';
import Collection from './Collection';
import Layouts from './Layouts';
import Tea from './Tea';
import CompanyLogo from './CompanyLogo';
import Testimonial from './Testimonial';
import SliderImage from './SliderImage';
import Footer from './Footer';



const page = () => {

  return (
    <>
   <Navbar />
   <Main />
   <Feature />
  <Customized />
  <Collection />
  <Layouts />
  <Tea />
  <CompanyLogo />
  <Testimonial />
  <SliderImage/>
  <Footer />
    </>
  )
}

export default page
