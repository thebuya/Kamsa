import React from 'react'
import './about.css';
import TrendUp from '../../../public/images/trending-up.svg'
import CustomButton from '../components/CustomButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEye, faArrowCircleUp, faAsterisk} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const About= () => {
  return (
    <div className='kamsa-container about-container'>
      <header>
          <h1 className="extra-heading">
            MORE THAN <span>{" "}JUST A CONSULTANCY COMPANY</span>. 
          </h1>
      </header>


      <section className='grouped-sections'>
        <section className='darkbg firstSection'>
          <div className="contentSection">

                <header className="contentheader">
                    <h2 className="numbered-title text-primary view1000">
                      01<span className="numbered-title-size text-white">
                            <span className="text-primary">/{" "}</span>
                      COMPANY PROFILE
                        </span> 
                    </h2>

                    <h3 className="lg-subheader none1000">
                    We are <br /> Professionals
                    </h3>
                </header>

                <article className="contentContainer">
                <h2 className="numbered-title text-primary none1000">
                      01<span className="numbered-title-size text-white">
                            <span className="text-primary">/{" "}</span>
                      COMPANY PROFILE
                        </span> 
                    </h2>
                  <p className="article-text text-on-gray aboutus-text">
                        KAMSA Consultants (U) Ltd (KCL) is committed to equipping 
                        Private and public-small and medium sized entities to 
                        build a sustainable future through customized financial 
                        and grants management education/ training and advisory services
                        Established in 2019, the KCL team is highly qualified and 
                        experienced professionals with a shared vision of ensuring 
                        sustainable economic and Healthy resource mobilization 
                        and utilization by entities in the region and beyond. 
                        We provide customized innovative reliable professional 
                        services – Advisory services, Finance and Grants training 
                        and capacity building to Public, Government, Private Institution, 
                        NGOs, CSOs & CBOs.
                        <br /><br />
                        We pride in working with entities to ensure that we contribute 
                        to creating the positive impact/change that our clients 
                        strive to create in the communities they serve; to improve their 
                        quality of life, and ensure a more self-reliant and sustainable future. 
                        We mind about reporting on Environmental, Social economical and 
                        Governance while we execute our service and product delivery engagements. 
                        We extend our consulting expertise across the greater East African regions. 
                        Our slogan/Vision is built on “Do your Best to achieve the Best”. 
                        KCL’s principle strategic objective is to “provide credible, reliable 
                        and sustainable products and services to our clients through 
                        collaborative engagements”.
                        <br /><br />
                        Our expertise and experience enable us to understand your 
                        entity/organization, your challenges/ needs and your opportunities, 
                        in order to create the right solutions to achieve your desired strategy 
                        as we strive to makes the exceptional positive impact you dream
                  </p>

                  <CustomButton
                    title='Book a consultation'
                    btnType='button'
                    containerStyles='rounded-full bg-white min-w-[150px] whitebutton'
                    icon={''}
                  />
                </article>

          </div>
        </section>

        <section className="darkbg secondSection">

              <div className="contentSection">

                    <header className="contentheader">
                        <h2 className="numbered-title text-primary view1000">
                        02<span className="numbered-title-size text-white">
                                <span className="text-primary">/{" "}</span>
                          OUR MISSION / VISION & VALUES
                            </span> 
                        </h2>

                        <h3 className="lg-subheader none1000">
                        We have a Strong <br /> Foundation
                        </h3>
                    </header>

                    <article className="contentContainer">
                        <h2 className="numbered-title text-primary none1000">
                      02<span className="numbered-title-size text-white">
                                <span className="text-primary">/{" "}</span>
                          OUR MISSION / VISION & VALUES
                            </span> 
                        </h2>

                        <div className="darkCards">

                        <div className="darkcard dC1">
                          <h3 className='article-text'>
                       {/**   <FontAwesomeIcon className='mr-4 rotate-45' icon={faArrowCircleUp}/> */} 
                           <Image src={TrendUp} className='mr-4' alt="Our Mission" width={20} height={20} />
                           Our Mission</h3>

                          <p className="article-text">
                            To be the leading Grants and Financial management 
                            consultancy firm in Uganda and across Africa 
                            through provision of value for money services and 
                            products, innovations and capacity building to our customers 
                            for enhanced sustainable financial planning 
                            and economic stability for a health living.
                          </p>
                        </div>

                        <div className="darkcard dC2">
                          <h3 className='article-text'>
                          <FontAwesomeIcon className='mr-4' icon={faEye}/>Our Vision</h3>

                          <p className="article-text">
                          A leading regional professional service 
                          firm focused on tailor made sustainable 
                          finance and grants management approaches.
                          </p>
                        </div>
                        </div>

                        

                    </article>

              </div>

              
        </section>

        <div className="coverfloat">
        <div className="floatingdiv">
                        <h3 className='article-text'>
                          <FontAwesomeIcon className='mr-4 rotate-45' icon={faArrowCircleUp}/>
                           
                           Our Core Values</h3>
         </div>

        </div>

        <section className='darkbg firstSection whiteSection pt-8'>
          <div className="contentSection flex-col">

                <header className="contentheader">
                    <h2 className="numbered-title text-primary">
                      03<span className="numbered-title-size active-red">
                            <span className="text-primary">/{" "}</span>
                      KCL STRATEGY
                        </span> 
                    </h2>

                    <h3 className="lg-subheader">
                    Focuses on efficient utilization 
                    <span className='highlight'>{" "}of clients’ resources</span> 
                    {" "}and effectiveness 
                    <span className='highlight'>{" "}in meeting clients’ expectations</span> 
                    <span className="active-red">.</span>
                    </h3>
                </header>

                <article className="contentContainer">
                
                  <p className="article-text text-on-gray aboutus-text pt-4 lh">
                      KCL seeks to preserve five (5) core operational 
                      objectives in her day-to-day business which are a 
                      trigger to exceptional service delivery to our clients 
                      and partners. These include; Cost/efficiency, quality, 
                      timeliness/speed, flexibility and dependability.
                  </p>

                </article>

          </div>
        </section>

        <section className="darkbg secondSection Team">

              <div className="contentSection flex-col">

                    <header className="contentheader">
                       

                        <h3 className="lg-subheader ">
                        Meet <span className='text-white'>The Team</span>
                        </h3>
                    </header>

                    <article className="contentContainer">
                        

                        <div className="darkCards">

                        <div className="darkcard dC1 bm">
                          <FontAwesomeIcon className='teamicon' icon={faLinkedin}/>
                           
                           

                          <p className="article-text">
                           Mrs. Patience Ozokwor
                          </p>
                        </div>

                        <div className="darkcard dC2 bm">
                         
                          <FontAwesomeIcon className='teamicon' icon={faLinkedin}/>
                          

                          <p className="article-text">
                          Mr. Hillary Bukunda
                          </p>
                        </div>
                        </div>

                        

                    </article>

              </div>

              
        </section>

        

      </section>



    </div>
  )
}

export default About