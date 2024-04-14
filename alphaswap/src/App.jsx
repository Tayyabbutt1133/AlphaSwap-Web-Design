import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Compare from './components/Compare/Compare'
import Whyhow from './components/WhyHow/Whyhow'
import Works from './components/works/Works'
import Faq from './components/Faq/Faq'
import Wallets from './components/Wallets/Wallets'
import Walletworks from './components/walletworks/Walletworks'
import Footer from './components/footer/Footer'
import ContactUs from './Pages/contactus/ContactUs'
import Launch from './Pages/launch/Launch'



function App() {

  return (
    <>
      
      <Navbar />
      <Main />
      {/* <Compare /> */}
      <Whyhow />
      <Works />
      <Faq />
      <Wallets />
      <Walletworks />
      <Footer />
      {/* <ContactUs/> */}
      {/* <Launch/> */}
    </>
  )
}

export default App