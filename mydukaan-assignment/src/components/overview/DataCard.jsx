import React from 'react'

export default function DataCard({ name, value }) {
    return (
        <div className='w-full bg-primary-50 h-[118px] rounded-md p-[20px] flex flex-col gap-[16px]'>

            {/* Display the name with specified text size and leading */}
            <p className='text-[16px] leading-[24px]'>{name}</p>

            {/* Display the value with specified text size and leading */}
            <p className='text-[32px] leading-[38px]'>{value}</p>

        </div>
    )
}
