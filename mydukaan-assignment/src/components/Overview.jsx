import React from 'react';
import DataCard from './overview/DataCard';

export default function Overview() {
    return (
        <div className='w-full mt-4 px-4 py-2 flex items-center min-h-content  flex-wrap justify-between'>

        {/* Title section */}
        <p className='text-[20px] leading-[28px] font-medium'> Overview </p>

        {/* Dropdown for selecting time range */}
        <div className='flex items-center'>
            <div className='border-2 border-gray-300 px-4 h-[36px] w-[137px] rounded-md bg-primary-50 flex items-center'>
          
                {/* Select dropdown with default option */}
                <select className="w-full outline-none bg-transparent">
                    <option selected>Last Month</option>
                </select>
            </div>
        </div>

    </div>
    );
}
