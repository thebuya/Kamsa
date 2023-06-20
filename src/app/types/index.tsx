import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
    icon: string;
    onClick?: () => void; // Add the onClick property
}


export interface SearchServicesProps{
    selectedService: string;
    setSelectedService: (selectedService: string) => void;
}
