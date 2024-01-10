import React from 'react'
import rightIcon from "../../assets/Chevron Right.svg"

export default function Pagination() {
    return (
        // Flex container for pagination controls
        <div className='flex items-center justify-center gap-8 mt-4'>

            {/* Previous button */}
            <div className='flex items-center justify-center px-2 py-1 h-8 rounded-md border  border-primary-[RGBA(217, 217, 217, 1)]  gap-2'>
                <img src={rightIcon} className='h-4 w-4 transform rotate-180' alt="Previous Icon" />
                <p className="text-sm">Previous</p>
            </div>

            {/* Page numbers */}
            <div className='flex items-center gap-2'>

                {/* Page number components (can be generated dynamically based on the total number of pages) */}
                {[1, '...', 10, 11, 12, 13, 14, 15, 16, 17, 18].map((page, index) => (
                    <p
                        key={index}
                        className={`h-8 w-8 rounded-md ${page === 10 ? 'bg-[#146EB4] text-primary-50' : ''} px-2 py-1 text-center`}
                    >
                        {page}
                    </p>
                ))}
            </div>

            {/* Next button */}
            <div className='flex items-center justify-center px-2 py-1 h-8 rounded-md border  border-primary-[RGBA(217, 217, 217, 1)]  gap-2'>
                <p className="text-sm">Next</p>
                <img src={rightIcon} className='h-4 w-4' alt="Next Icon" />
            </div>
        </div>
    );
}
