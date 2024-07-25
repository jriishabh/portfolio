import React from 'react'
import './hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.png'
const Hero = () => {
  return (
    <div id='home' className='Hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Rishabh jain </span>, frontend developer based in India.</h1>
      <p>I am a front-end developer currently searching for an internship and this is my first portfolio</p>
     <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with me</AnchorLink></div>
      <div className="hero-resume">My resume</div>

     </div>
    </div>
  )
}

export default Hero