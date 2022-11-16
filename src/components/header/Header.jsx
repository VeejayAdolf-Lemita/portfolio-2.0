import React from 'react'
import './header.css'
import Me from '../../assets/no bg sir veejay.png'


const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h1>Hi I'm VEEJAY</h1>
        <h5 className="text-light">Front-end Developer - UI/UX</h5>
        <img src={Me} alt="" className='my-image' />
      </div>
    </header>
  )
}

export default Header