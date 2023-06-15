import React from 'react'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className='main-header'>

        <div className="banner">
            <q className='quote on-red smx-unseen'>Do Your Best To Achieve Your Best</q>

            <div className='banner-contacts'>
                <a href="tel:+256754262702" className="on-red header-link sm-unseen">
                <FontAwesomeIcon
        icon={faPhone}
               
                
    />+256-754-262-702{" "}</a>
                <a href="tel:+256753965009" className="on-red header-link"> <FontAwesomeIcon
        icon={faPhone}/>{" "}+256-753-965-009</a>
                <a href="mailto:info@kamsaconsultants.com" className="on-red header-link smxx-unseen">
                <FontAwesomeIcon
        icon={faEnvelope}/>{" "} info@kamsaconsultants.com</a>
            </div>


        </div>




        <nav className="navbar w-full">
            <p className='logo'>Kamsa <span className='thin-gray'>Consultants</span></p>

            <div className="flex">
                    <ul className='flex'>
                        <li className='Link'><Link href={"/home"}>Home</Link></li>
                        <li className='Link'><Link href={"/about"}>About </Link></li>
                        <li className='Link'><Link href={"/about/founder"}>Founder </Link></li>
                        <li className='Link'><Link href={"/listofteam"}>Team </Link></li>
                        <li className='Link'><Link href={"/blog"}>Blog </Link></li>
                    </ul>

                    <CustomButton
                        title="Consult us"
                        btnType="button"
                        containerStyles="text-primary-blue
                        rounded-full bg-white min-w-[130px]
                        smx-unseen"
                        icon={''}
                    /> <FontAwesomeIcon
                    icon={ faBars}
                    className="onlyMobile nav-menu"
                    />
            </div>

        </nav>
        
        
    </header>
  )
}

export default Navbar