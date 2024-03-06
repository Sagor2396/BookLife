import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Dedicated to promoting the joy of reading, my website offers curated book recommendations and insightful reviews to inspire a love for literature. Join me on a journey of discovery and unlock the transformative power of books for personal enrichment.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header