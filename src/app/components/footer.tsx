"use client";

import React, {useState} from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavLinkClick = () => {
    setIsNavShowing(false);
    scrollToTop();
  };



  return (
    <footer className='kamsa-container '>
      <div className="upfooter">
                <div className="contacts">
                <Link href={"/"} onClick={() => {
            setIsNavShowing(false);
            handleNavLinkClick();
          }}><h4 className='logo'>Kamsa <span className='thin-gray'>Consultants</span></h4></Link>
                  <ul>
                    <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"
                           aria-label="Vist Kamsa Consultants on LinkedIn.">
                          
                            <FontAwesomeIcon icon={faLinkedin} />
                            
                        </a>
                    </li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"
                           aria-label="Vist Kamsa Consultants on Twitter.">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"
                           aria-label="Vist Kamsa Consultants on Facebook.">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li><a   href="https://wa.me/2567783909668" target="_blank" rel="noreferrer"
                           aria-label="Inbox Kamsa Consultants on W.">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </li>
                    <li><a   href="mailto:kmambo.kamsa@gmail.com" target="_blank" rel="noreferrer"
                           aria-label="Inbox Kamsa Consultants on W.">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                  </ul>

                  <p className="address Link"> 
                      <FontAwesomeIcon icon={faCaretRight  } />{"  "}Wakiso, Kampala, (U). <br />
                      <FontAwesomeIcon icon={faCaretRight  } />{"  "}Arua-Nebbi road, Arua City
                   </p>
                  

                </div>

                <div className="links">
                <ul>
                  <h4> Company </h4>
                    <li><Link className='Link' href={"/about"}>About us</Link></li>
                    <li><Link className='Link' href={"/about#listofteam"}>The Team</Link></li>
                    <li><Link className='Link ' href={"/about#Clients"}>Our Clients</Link></li>
                    <li><Link className='Link' href={"/https://opencorporates.com/companies/ug/80020002221215"}>Registration Status</Link></li>
                  </ul>

                  <ul>
                  <h4> Resources </h4>
                    <li><Link className='Link ' href={"/blog"}>Blogs</Link></li>
                    <li><Link className='Link' href={"/services"}>Services</Link></li>
                    <li><Link className='Link no-content' href={"/chatbot"}>ChatBot</Link></li>
                    <li><Link className='Link no-content' href={"/"}>Upcoming Events </Link></li>
                  </ul>
              </div>
      </div>

      <div className="footnotes_container">
        <p className="Link footer-kamasa">Kamsa Consultants Limited(U)©2023</p>
        <p className="Link footer-architect">
          Site-Architect:{" "}<span> 
              <a
                href="https://www.artbybuya.com/about.html"
                target="_blank"
                rel="noreferrer"
                aria-label="Go to the site architects personal website"
              >{" "}Buya
            </a> </span>
        </p>
      </div>
            
        
    </footer>
  )
}

export default Footer