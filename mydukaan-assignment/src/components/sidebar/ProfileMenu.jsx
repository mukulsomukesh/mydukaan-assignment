import React from 'react'
import icon from "../../assets/Chevron Down.svg"
import profileImage from "../../assets/profileImage.png"


export default function ProfileMenu() {
    return (
        <div className='w-full  h-[42px]   text-primary-50  flex items-center justify-between'>

            {/* Container for profile image, username, and visit store link */}
            <div className='flex h-full items-center  gap-[12px]' >
         
                {/* User profile image */}
                <img src={profileImage} alt="Profile" className="w-[40px] text-primary-50 h-[40px] rounded-xl" />
                
                {/* Container for username and visit store link */}
                <div>
       
                    {/* User's username */}
                    <p className='text-[15px] leading-5  text-primary-50 ' > Nishyan </p>
                    
                    {/* Visit store link */}
                    <p className='text-[13px] leading-2 underline opacity-80 text-primary-50 ' > Visit Store </p>
                </div>
            </div>

            {/* Dropdown icon */}
            <div>  <img src={icon} alt="Dropdown Icon" className="w-[15px] text-primary-50 h-20px" /> </div>
        </div>
    )
}
