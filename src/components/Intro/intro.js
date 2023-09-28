import React from 'react'
import '../Intro/intro.css'
import {Link} from 'react-scroll';
import btnimg from '../../assets/hireme.png'
import bg from '../../assets/1686293295481.jpg'
const Intro = () => {
  return (
    <div>
      <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
       <span className="introText">I'm <span className="introName">Amish</span><br/>Web Developer</span>
       <p className="introPara">I am a skilled and passionate web developer with experience in creating responsive Front-End websites</p>
        <Link><button className="btn"onClick={()=>{ document.getElementById('contactPage').scrollIntoView({behaviour:'smooth'})}} ><img src={btnimg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg' />
      </section>
    </div>
  )
}

export default Intro;
