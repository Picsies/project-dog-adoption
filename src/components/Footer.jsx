import React from 'react'

export const Footer = () => {
  return (
    <div id='footer-container'>
      <div className='container pt-4'>
      <div className='row'>
        <div className='col-md'>
          <h4>For questions and suggestions</h4>
          <div className='row'>
            <i className='bi bi-envelope col-1'></i>
            <p className='col'>dogadopt@info.com</p>
          </div>
          <div className='row'>
            <i className="bi bi-phone col-1"></i>
            <p className='col'>+46 (0)79567842</p>
          </div>
        </div>
        <div className='col-md'>
          <h4>Connect with us on social media</h4>
          <div className='row'>
            <i className="bi bi-facebook col-1"></i>
            <p className='col small'>www.facebook.com/dogadopt</p>
          </div>
          <div className='row'>
            <i className="bi bi-instagram col-1"></i>
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
