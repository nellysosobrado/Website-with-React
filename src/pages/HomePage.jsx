import React from 'react'
import Header from '../components/Header'
import Hero from '../components/sections/Hero'
import Brands from '../components/sections/Brands'
import AppFeatures from '../components/sections/AppFeatures'
import HowItWorks from '../components/sections/HowItWorks'
import MoneyTransfer from '../components/sections/MoneyTransfer'
import ReceivePayment from '../components/sections/ReceivePayment'
import Reviews from '../components/sections/Reviews'
import FAQ from '../components/sections/FAQ'
import Subscribe from '../components/sections/Subscribe'
import Footer from '../components/Footer'
import RegistrationModal from '../components/modals/RegistrationModal'
import TermsModal from '../components/modals/TermsModal'

const HomePage = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Hero />
          <Brands />
          <AppFeatures />
          <HowItWorks />
          <MoneyTransfer />
          <ReceivePayment />
          <Reviews />
          <FAQ />
          <Subscribe />
        </main>
        <Footer />
      </div>
      <RegistrationModal />
      <TermsModal />
    </>
  )
}

export default HomePage