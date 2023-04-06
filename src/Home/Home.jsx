import React from 'react'
import "./Home.css"
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Browseby from './components/Browseby'
import Email from './components/Email/Email'
import Footer from './components/Footer/Footer'
const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Browseby />
    <Email />
    <Footer />
    </>
  )
}

export default Home
