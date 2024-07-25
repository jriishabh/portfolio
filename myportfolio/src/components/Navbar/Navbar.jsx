import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import underline from '../../assets/underline.png'
import menu_icon from '../../assets/menu_icon.svg'
import cross_icon from '../../assets/cross_icon.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
  
  const closeMenu=()=>{
    menuRef.current.style.right='-350px';
  }
  return (
    <div className='navbar'>
        <img src={menu_icon} onClick={openMenu} alt="" className='nav-mob-open'/>
       <ul ref = {menuRef} className="nav-menu">
        <img src={cross_icon} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img className='image' src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#About Me'><p onClick={()=>setMenu("About Me")}>About Me</p></AnchorLink>{menu==="About Me"?<img className='image' src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Services'><p onClick={()=>setMenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img className='image' src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu==="Contact"?<img className='image' src={underline} alt=''/>:<></>}</li>
       </ul>
       <div className="nav-connect" ><AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar