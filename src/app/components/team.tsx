"use client";

import React, {useState} from 'react'
import CustomButton from './CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Team = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
      console.log(isVisible);
    };

  return (
    <section className="darkbg secondSection Team">

              <div className="contentSection flex-col">

                    <header className="contentheader">
                       

                        <h3 className="lg-subheader ">
                        Meet <span className='text-white'>The Team</span>
                        </h3>
                    </header>

                    <article className="contentContainer">
                        

                        <ul className="darkCards">
                          <li className="e-team flex flex-col">
                              <div className="darkcard dC1 bm">
                          <FontAwesomeIcon className='teamicon' icon={faLinkedin}/>
                           
                           

                          <p className="article-text">
                           FullName
                          </p>
                              </div>

                              <h5>Founder</h5>
                          </li>

                          <li className="e-team flex flex-col">
                              <div className="darkcard dC2 bm">
                          <FontAwesomeIcon className='teamicon' icon={faLinkedin}/>
                           
                           

                          <p className="article-text">
                           FullName
                          </p>
                              </div>

                              <h5>Founder</h5>
                          </li>

                          <li className="e-team flex flex-col">
                              <div className="darkcard dC2 bm">
                          <FontAwesomeIcon className='teamicon' icon={faLinkedin}/>
                           
                           

                          <p className="article-text">
                           FullName
                          </p>
                              </div>

                              <h5>Founder</h5>
                          </li>

                          <li className="e-team flex flex-col">
                              <div className="darkcard dC2 bm">
                          <FontAwesomeIcon className='teamicon' icon={faLinkedin}/>
                           
                           

                          <p className="article-text">
                           FullName
                          </p>
                              </div>

                              <h5>Founder</h5>
                          </li>
                        </ul>


                        {isVisible && (
            <ul className="darkCards">
              <li className="e-team flex flex-col">
                <div className="darkcard dC1 bm">
                  <FontAwesomeIcon className="teamicon" icon={faLinkedin} />
                  <p className="article-text">Mr. Bukunda Hillary</p>
                </div>
                <h5>Head of Accounts</h5>
              </li>

              <li className="e-team flex flex-col">
                <div className="darkcard dC2 bm">
                  <FontAwesomeIcon className="teamicon" icon={faLinkedin} />
                  <p className="article-text">Mr. Bukunda Hillary</p>
                </div>
                <h5>Head of Accounts</h5>
              </li>

              <li className="e-team flex flex-col">
                <div className="darkcard dC2 bm">
                  <FontAwesomeIcon className="teamicon" icon={faLinkedin} />
                  <p className="article-text">Mr. Bukunda Hillary</p>
                </div>
                <h5>Head of Accounts</h5>
              </li>

              <li className="e-team flex flex-col">
                <div className="darkcard dC2 bm">
                  <FontAwesomeIcon className="teamicon" icon={faLinkedin} />
                  <p className="article-text">Mr. Bukunda Hillary</p>
                </div>
                <h5>Head of Accounts</h5>
              </li>
            </ul>
          )}

  
              <CustomButton
            title={isVisible ? 'Hide Team' : 'View Entire Team'}
            btnType="button"
            containerStyles="rounded-full bg-white min-w-[150px] whitebutton borderRed"
            icon={''}
            aria-label="Toggle between seeing more and less team members"
            handleClick={toggleVisibility} // Pass toggleVisibility as handleClick
            />

                        

                    </article>

              </div>

              
        </section>
  )
}

export default Team