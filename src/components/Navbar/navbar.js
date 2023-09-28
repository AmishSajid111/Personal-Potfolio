import React from 'react'
import '../Navbar/navbar.css';
import  logo from '../../assets/codeWithAmish.svg'

import {Link} from 'react-scroll';
import cimg  from '../../assets/contact.png'
import menuimg from '../../assets/menu.png'
import { useState } from 'react';
const Navbar = () => {
 const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'  >Home</Link>
          
         <Link className='desktopMenuListItem'activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} >About</Link>
         <Link className='desktopMenuListItem'activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} >Portfolio</Link>
        </div>
        <button className="desktopMenuButton" onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behaviour:'smooth'});
        }}>
            <img src={cimg} alt="Contact" className='desktopMenuImg' />
        Contact Me
        </button>
        <img src={menuimg} alt="Menu" className='mobMenu' onClick={()=>setMenu(!menu)} />
        <div className="navMenu" style={{display:menu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setMenu(false)}  >Home</Link>
           
         <Link className='ListItem'activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}onClick={()=>setMenu(false)} >About</Link>
         <Link className='ListItem'activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setMenu(false)}>Portfolio</Link>
         <Link className='ListItem'activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}onClick={()=>setMenu(false)} >Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
