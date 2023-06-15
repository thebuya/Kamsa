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
            <q className='quote on-red smx-unseen '>Do Your Best To Achieve Your Best</q>

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
            
        <Link href={"/"} onClick={() => {
            setIsNavShowing(false);
            handleNavLinkClick();
          }}><p className='logo'>Kamsa <span className='thin-gray'>Consultants</span></p></Link>

            <div className="flex">
                    <ul
                     className={`flex ${isNavShowing ? 'show' : ''}`}
                     
                  >
                        <li className='Link'><Link 
                            onClick={() => {
                       setIsNavShowing((prev) => !prev);
                       handleNavLinkClick();
                     }}
                        href={"/"}>Home</Link></li>
                        <li className='Link'><Link 
                            onClick={() => {
                       setIsNavShowing((prev) => !prev);
                       handleNavLinkClick();
                     }}
                        href={"/about"}>About </Link></li>
                        <li className='Link'><Link 
                            onClick={() => {
                       setIsNavShowing((prev) => !prev);
                       handleNavLinkClick();
                     }}
                        href={"/services"}>Services</Link></li>
                        <li className='Link'><Link 
                            onClick={() => {
                       setIsNavShowing((prev) => !prev);
                       handleNavLinkClick();
                     }}
                        href={"/listofteam"}>Team</Link></li>
                        <li className='Link'><Link 
                            onClick={() => {
                       setIsNavShowing((prev) => !prev);
                       handleNavLinkClick();
                     }}
                        href={"/blog"}>Blog </Link></li>
                    </ul>

                    <CustomButton
                        title="Consult us"
                        btnType="button"
                        containerStyles="text-primary-blue
                        rounded-full bg-white min-w-[130px]
                        smx-unseenb"
                        icon={''}
                    />
                    
                    <FontAwesomeIcon
                    onClick={() => setIsNavShowing((prev) => !prev)}
                    
                    icon={isNavShowing ? faTimes : faBars}
                    className="onlyMobile nav-menu"
                    />
            </div>

        </nav>
        
        
    </header>
  )
}

export default Navbar