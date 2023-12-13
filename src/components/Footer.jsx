import React from 'react'
import { Link } from 'react-router-dom'

const mail = "dogadopt@info.com";

export const Footer = () => {
  return (
    <div id='footer-container'>
      <div className='container pt-4'>
      <div className='row'>
        <div className='col-md'>
          <h3>For questions and suggestions</h3>
          <div className='row'>
            <Link to={`mailto:${mail}`} className='col-1 text-dark'>
              <i className='bi bi-envelope'></i>
            </Link>
            <p className='col'>dogadopt@info.com</p>
          </div>
          <div className='row'>
            <i className="bi bi-phone col-1"></i>
            <p className='col'>+46 (0)79567842</p>
          </div>
        </div>
        <div className='col-md'>
          <h3>Connect with us on social media</h3>
          <div className='row'>
            <Link to={`https://www.facebook.com/dogadopt`} className='col-1 text-dark'>
              <i className="bi bi-facebook"></i>
            </Link>
            <p className='col small'>www.facebook.com/dogadopt</p>
          </div>
          <div className='row'>
            <Link to={`https://www.instagram.com/dogadopt`} className='col-1 text-dark'>
              <i className="bi bi-instagram"></i>
            </Link>
            <p className='col small'>www.instagram.com/dogadopt</p>
          </div>
        </div>
        <div className='col-md'>
          <img id='footer-img' src="/img/img-3.png" alt="Footer dog" />
        </div>
      </div>
      </div>
    </div>
  )
}
