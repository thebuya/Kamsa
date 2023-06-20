import React from 'react'
import './about.css';

import Link from 'next/link';
import TrendUp from '../../../public/images/trending-up.svg'
import CustomButton from '../components/CustomButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEye, faArrowCircleUp, faAsterisk, faUserPlus, faUsers, faUsd, faBolt, faShield, faThumbsUp, faShieldAlt} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Team from '../components/team';

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

                  <Link href='/' >
                  <CustomButton
                    title='Book a consultation'
                    btnType='button'
                    containerStyles='rounded-full bg-white min-w-[150px] whitebutton'
                    icon={''}
                  />

                  </Link>
                  
                </article>

          </div>
        </section>

        <section className="darkbg secondSection mission">

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
        <div className="floatingdiv corediv">
        <h3 className='article-text'>
        <FontAwesomeIcon className='mr-4 rotate-45' icon={faArrowCircleUp}/>                          
            Our Core Values
        </h3>


           
            <div className="marquee values">
                <div className="marquee--inner">
                  <span>
                  <p className="orb">ACCOUNTABILITY</p>
                    <p className="orb red">INTEGRITY</p>
                    <p className="orb yellow">INNOVATION </p>
                    <p className="orb blue">PROFESSIONALISM</p>
                    <p className="orb orange">TRANSPARENCY</p>
                    <p className="orb purple">RELIABILITY</p>
                    <p className="orb green">EFFICIENCY</p>
                  </span>
                  <span>
                    <p className="orb">ACCOUNTABILITY</p>
                    <p className="orb red">INTEGRITY</p>
                    <p className="orb yellow">INNOVATION </p>
                    <p className="orb blue">PROFESSIONALISM</p>
                    <p className="orb orange">TRANSPARENCY</p>
                    <p className="orb purple">RELIABILITY</p>
                    <p className="orb green">EFFICIENCY</p>
                  </span>

                </div>
            </div>
         </div>




        </div>

        <section className=' firstSection whiteSection pt-8 strategy-container'>
          <div className="contentSection flex-col">

                <header className="contentheader">
                    <h2 className="numbered-title text-primary">
                      03<span className="numbered-title-size active-red">
                            <span className="text-primary">/{" "}</span>
                      KCL STRATEGY
                        </span> 
                    </h2>
                    <p className="article-text text-on-gray aboutus-text pt-4 lh">
                      KCL seeks to preserve five (5) core operational 
                      objectives in her day-to-day business which are a 
                      trigger to exceptional service delivery to our clients 
                      and partners. These include:
                   </p>
    
                </header>

                <article className="contentContainer">
                  <ul className="grid grid-cols-1 md:grid-cols-2 strategy-list">
                    <li className="flex flex-row strategy">
                    <FontAwesomeIcon className='mr-4' icon={faUsd}/> 
                    <div className='flex flex-col'>
                      <h4  className="  article-text  active-red">Cost / Efficiency</h4>
                      <p className="article-text"> 
                        We consistently review our cost strategies to 
                        produce the product/service at the best lowest 
                        and affordable cost. </p>
                    </div>
                    </li>
                    <li className="flex flex-row strategy">
                    <FontAwesomeIcon className='mr-4' icon={faArrowCircleUp}/> 
                    <div className='flex flex-col'>
                      <h4  className="  article-text  active-red">Flexibility</h4>
                      <p className="article-text">
                      This is because we understand customers have different 
                      tastes and preference. We listen to our customers 
                      feedback and provide services that meet expectations.  </p>
                    </div>
                    </li>
                    <li className="flex flex-row strategy">
                    <FontAwesomeIcon className='mr-4' icon={faBolt}/> 
                    <div className='flex flex-col'>
                      <h4  className="  article-text  active-red">Speed / Timeliness</h4>
                      <p className="article-text">
                      Speed is priority as we serve our customers. 
                      We deliver our services/products at the right time 
                      they are needed and as per the terms of engagement. </p>
                    </div>
                    </li>
                    <li className="flex flex-row strategy">
                    <FontAwesomeIcon className='mr-4' icon={faShieldAlt}/> 
                    <div className='flex flex-col'>
                      <h4  className="  article-text  active-red">Quality</h4>
                      <p className="article-text">We emphasize on conformity with the service 
                      standards when executing customer and partner 
                      engagements. </p>
                    </div>
                    </li>
                    <li className="flex flex-row strategy">
                    <FontAwesomeIcon className='mr-4' icon={faThumbsUp}/> 
                    <div className='flex flex-col'>
                      <h4  className="  article-text  active-red">Dependability</h4>
                      <p className="article-text">
                      KCL boasts of living to its promises to customers and partners. 
                      Our loyal customers are the channel of communication to the 
                      community we serve because of our dependable service approaches.</p>
                    </div>
                    </li>
                  </ul>

                <h3 className="lg-subheader">
                    ...Focuses on efficient utilization 
                    <span className='highlight'>{" "}of clients’ resources</span> 
                    {" "}and effectiveness 
                    <span className='highlight'>{" "}in meeting clients’ expectations..</span> 
                    <span className="active-red" id='listofteam'>.</span>
                    </h3>
                
                  

                </article>

          </div>
        </section>

        <Team />

        <section className='firstSection whiteSection Experience'>
          <div className="contentSection">

                <header className="contentheader">
                    <h2 className="numbered-title text-primary view1000">
                      04<span className="numbered-title-size ">
                            <span className="text-primary">/{" "}</span>
                          OUR EXPERIENCE
                        </span> 
                    </h2>

                    <div className='flex flex-col infographs'>
                        <div className=' flex flex-col'>
                        <h3 className="lg-subheader ">
                          13<FontAwesomeIcon className='ml-4' icon={faAsterisk} />
                        </h3>
                        <p className="article-text ">
                            Combined Years <br /> of Experience
                        </p>
                      </div>
                        
                          
                        <div className=' flex flex-col'>
                          <h3 className="lg-subheader">
                          10<FontAwesomeIcon className='ml-4' icon={faUserPlus}/>
                          </h3>
                          <p className="article-text ">
                            Client Projects
                          </p>
                        </div>
                    </div >
                  
                    
                      

                    
                </header>

                <article className="contentContainer">
                  <h2 className="numbered-title text-primary none1000">
                      04<span className="numbered-title-size ">
                            <span className="text-primary">/{" "}</span>
                          OUR EXPERIENCE
                        </span> 
                    </h2>
                  <p className="article-text text-on-gray aboutus-text lh">
                      We have been tested and proven excellent by our customers. 
                      We continue to provide up-to-date, quality, flexible and 
                      dependable services to satisfy, retain and sustain our customers. 
                      
                      We listen and take seriously customer feedback for continuous 
                      improvement. We exist because we give our customers priority in 
                      everything we do. The team of KCL delivers exceptional professional 
                      services and have over 13 years working experience nationally and 
                      internationally in zone/areas of Capacity building for Private and 
                      public institutions in Grants/Project management, Budgeting, 
                      financial management, proposal writing/resources mobilization, 
                      sustainability planning and reporting, documentation of best 
                      practices, policies and procedures, flagship grants and financial 
                      management trainings etc.
                  </p>

                  <CustomButton
                    title='Book a consultation'
                    btnType='button'
                    containerStyles='rounded-full bg-white min-w-[150px] whitebutton borderRed'
                    icon={''}
                  />
                </article>

          </div>
        </section>


        <section className="darkbg secondSection Team Clients">

<div className="contentSection flex-col">

      <header className="contentheader" id='Clients'>
         

          <h3 className="lg-subheader ">
          What<span className='text-white'>{" "}Our Clients</span>{" "}Say
          </h3>
      </header>

      <article className="contentContainer">
          

          <div className="darkCards w-full">

          

          <div className="darkcard dC2 bm w-full">
           
           
            

            <p className="article-text">
            Space For Various Reviews
            </p>
          </div>
          </div>

          

      </article>

</div>


        </section>

        <div className="coverfloat">
        <div className="floatingdiv">
            <h3 className='article-text'>
              <FontAwesomeIcon className='mr-4' icon={faUsers}/>            
              Our Clients
            </h3>

            <div className="logos">
             
            </div>
         </div>

        </div>


        <section className=' firstSection whiteSection pt-8 NewsLetter'>
          <div className="contentSection flex-col">

                <header className="contentheader">
                    <h2 className="numbered-title text-primary">
                      Stay Informed To Stay Ahead.
                    </h2>
                </header>

                <article className="contentContainer">

                    <h3 className="lg-subheader newshead">
                        Get Financial Insights and Tips
                    </h3>

                    
                    <form className="newsletter-form">
                      <input type="email" name="email" placeholder="Enter your email ...." required />
                      <button type="submit" className="">
                        Stay Updated
                      </button>
                    </form> 
                  

                </article>

          </div>
        </section>

        

      </section>



    </div>
  )
}

export default About