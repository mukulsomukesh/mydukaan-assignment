import React from 'react';
import wallet from "../../assets/wallet.svg";


export default function AvailableCreditCard() {
    return (
        <div className='px-[16px] py-[8px] w-full h-[54px] rounded-md bg-primary-400'>

            {/* Container for credit card details */}
            <div className='flex h-full items-center gap-[12px] '>

                {/* Wallet icon with rounded background */}
                <div className='w-[36px] h-[36px] rounded-md bg-primary-500 flex items-center justify-center'>
                    <img src={wallet} alt="Wallet Icon" className="w-[24px] text-primary-50 h-[24px]" />
                </div>
                
                {/* Container for credit information */}
                <div>
                    {/* Text displaying the type of information */}

                    <p className='text-[13px] leading-4 opacity-80 text-primary-50'>Available credits</p>
                    
                    {/* Numeric value of available credits */}
                    <p className='text-[16px] leading-6 text-primary-50'>222.10</p>
                </div>
            </div>
        </div>
    );
}
