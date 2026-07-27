import React from 'react';
import Logo from '../assets/logo.png';
import { format } from 'date-fns';

function Header() {
    return(
        <div className='flex flex-col justify-center items-center h-35 md:h-45 px-5'>
            <img src={Logo} alt="logo" />
            <p className='text-accent'>Journalisum Without Fear or Favour</p>
            <p>{
                format(new Date(), "EEEE, LLLL dd, yyyy")
            }</p>
        </div>
    )
}

export default Header;