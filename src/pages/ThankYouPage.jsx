import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import '../index.css'

export const ThankYouPage = () => {
  return (
    // make sure the footer is at the bottom of the page
    <div className='d-flex flex-column min-vh-100'>
      <NavBar />
      <div className='container'>
        <div className='mt-4 mb-4'>
          <h2>Thanks! Your dog is now registered.</h2>
          <p>You can find the dog in the list of dogs</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
