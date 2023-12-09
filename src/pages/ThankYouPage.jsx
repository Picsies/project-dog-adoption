import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const ThankYouPage = () => {
  return (
    // make sure the footer is at the bottom of the page
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className='container' style={{ flex: '1' }}>
        <div className='mt-4 mb-4'>
          <h2>Thanks! Your dog is now registered.</h2>
          <p>You can find the dog in the list of dogs</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
