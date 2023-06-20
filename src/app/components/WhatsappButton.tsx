import React from 'react';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './backtotop.css'

const WhatsAppButton = () => {
    const message = encodeURIComponent('Hello Kamsa Consultants, I was just on your website.'); // Encode the message

  return (
    <Link
      className="whatsapp-button"
      href={`https://wa.me/256783909668?text=${message}`} 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on Whatsapp"
      title="WhatsApp"
    >
     <FontAwesomeIcon icon={faWhatsapp}/>
    </Link>
  );
};

export default WhatsAppButton;
