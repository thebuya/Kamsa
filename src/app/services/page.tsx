//app/services/pages.tsx
'use client';
import React, { useState } from 'react';
import ServicesRender from '../components/ServicesRender';

const Services = () => {
  const [selectedService, setSelectedService] = useState('');


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




      
    <ServicesRender
      selectedService={selectedService}
      setSelectedService={setSelectedService}
    />


    </main>
  )
}

export default Services