import React from 'react';
import aboutImg from "../../images/about-img.jpg";
import "./About.css";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BOOKLIFE</h2>
            <p className='fs-17'>At BOOKLIFE, we believe in the unparalleled magic of books to transport, educate, and transform lives. Founded by Sagor, an avid reader and literature enthusiast, this platform is a celebration of the written word and its ability to inspire and connect people.</p>
            <p className='fs-17'>Whether you're a seasoned bibliophile or just starting your reading journey, BOOKLIFE is your companion in exploration. Explore diverse genres, discover hidden gems, and connect with fellow readers through our vibrant community. We believe in the power of books to not only entertain but also to foster personal growth and understanding.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
