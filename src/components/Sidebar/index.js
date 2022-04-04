import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.scss';

//logos
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const  Sidebar =() => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"></img>
        <img className='sub-logo' src={LogoSubtitle} alt="logo"></img>
      </Link>

      <nav>
        <NavLink exact="true" activeClassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="linkedin">
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar