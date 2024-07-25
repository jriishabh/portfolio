import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
         <p>I am a frontend developer from india, with experience of 10 years in companies like Microsoft , Adobe etc....</p> 
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            
            <input type='email' placeholder='Enter your email'></input>
           
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2024 Rishabh jain. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy policy</p>
          <p>Conect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer