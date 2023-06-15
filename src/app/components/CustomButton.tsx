"use client";

import { CustomButtonProps } from '../types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';


const CustomButton = ({title, containerStyles, handleClick, icon}: CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >

    <span className={`flex-1`}>{title}</span>

    <FontAwesomeIcon
        icon={faArrowRight}
    />

    

        


    </button>
  )
}

export default CustomButton