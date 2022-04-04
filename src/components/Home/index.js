import React from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            sahil
            <br />
            web developer
            </h1>
            <h2>Frontent Developer</h2>
            <Link to="/contact" className='flat-button'></Link>
        </div>
    </div>
  )
}

export default Home