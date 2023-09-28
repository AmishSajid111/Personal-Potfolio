import React from 'react'
import webdes from '../../assets/website-design.png'
import appdes from '../../assets/app-design.png'
import UIdes from '../../assets/ui-design.png'
import  '../Skills/Skills.css' 
const Skills = () => {
  return (
    <section id='skills'>
<span className="skillTitle">What I Do</span><br />
  <span className="skillDesc">I am skilled and passionate Front-End developer
  with experience in creating visually-appealing and user-friendly websites.
  I have a strong understanding of design and a keen eye for detail.
  I am proficient in HTML,CSS , Javascript and the framework ReactJs as well as design software such as figma and adobe photoshop.</span>  
   <div className="skillBars">
   <div className="skillBar">
        <img src={UIdes}alt="logo" className="skillBarImg" />
        <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={webdes}alt="logo" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={appdes}alt="logo" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Game Development</h2>
            <p> Lorem ipsum dolor sit amet consectetur </p>
        </div>
    </div>
   
    </div> 
    
    
    </section>
  )
}

export default Skills

