"use client";

import React, {useState} from 'react'
import Link from 'next/link'

import CustomButton from './CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);



    

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = () => {
    setIsNavShowing(false);
    scrollToTop();
  };

  



  return (
    <header className='main-header'>

        <div className="banner">
            <q className='quote on-red smx-unseen '>Professional advice for sustainable growth</q>

            <div className='banner-contacts'>
                <a href="tel:+256754262702" className="on-red header-link sm-unseen reappear">
                <FontAwesomeIcon icon={faPhone} />+256-754-262-702{" "}</a>

                <a href="tel:+256753965009" className="on-red header-link"> <FontAwesomeIcon
        icon={faPhone}/>{" "}+256-753-965-009</a>

                <a href="mailto:kmambo.kamsa@gmail.com" className="on-red header-link smxx-unseen">
                <FontAwesomeIcon
        icon={faEnvelope}/>{" "}kmambo.kamsa@gmail.com</a>
            </div>


        </div>




        <nav className="navbar w-full">
            
        <Link href={"/"} className='logo' onClick={() => {
            setIsNavShowing(false);
            handleNavLinkClick();
          }}>Kamsa <span className='thin-gray'>Consultants</span>
          </Link>

        <div className='flex'>
          <ul className={`flex ${isNavShowing ? 'show' : ''}`}>
            <li className='Link no-content'>
              <Link
                onClick={() => {
                  setIsNavShowing((prev) => !prev);
                  handleNavLinkClick();
                }}
                href={'/'}
              >
                Home
              </Link>
            </li>
            <li className='Link'>
              <Link
                onClick={() => {
                  setIsNavShowing((prev) => !prev);
                  handleNavLinkClick();
                }}
                href={'/about'}
              >
                About us
              </Link>
            </li>
            <li  className='Link ' id='navServices'>
              <Link
                onClick={() => {
                  setIsNavShowing((prev) => !prev);
                  handleNavLinkClick();
                }}
                href={'/services'}
              >
                Our Services
              </Link>
            </li>
            <li className='Link no-content'>
              <Link
                onClick={() => {
                  setIsNavShowing((prev) => !prev);
                  handleNavLinkClick();
                }}
                href={'/listofteam'}
              >
                Our Team
              </Link>
            </li>
            <li className='Link no-content' id='navBlog'>
              <Link
                onClick={() => {
                  setIsNavShowing((prev) => !prev);
                  handleNavLinkClick();
                }}
                href={'/blog'}
              >
                Blog
              </Link>
            </li>
          </ul>

          <CustomButton
            title='Consult us'
            btnType='button'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] smx-unseenb'
            icon={''}
          />

          <FontAwesomeIcon
            onClick={() => setIsNavShowing((prev) => !prev)}
            icon={isNavShowing ? faTimes : faBars}
            className='onlyMobile nav-menu'
          />
        </div>

        </nav>
        
        
    </header>
  )
}

export default Navbar