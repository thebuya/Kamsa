
import React from 'react';
import ServicesRender from '../components/ServicesRender';


const Services = () => {


  return (
    <main className='kamsa-container '>
      <header>
        <h1 className="heading">
          Our Services:
          <span className="highlight">
            {" "}Tailored Solutions for Sustainable Financial & Grants Management
          </span>.
        </h1>
      </header>


      <section className="section-container services-section">

      
    <ServicesRender/>

      </section>


    </main>
  )
}

export default Services