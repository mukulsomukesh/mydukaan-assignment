import React from 'react'

import search from "../assets/search.svg"
import download from "../assets/download.svg"
import sort from "../assets/Sort.svg"
import DataTable from './dataTableContainer/dataTable'
import Pagination from './dataTableContainer/Pagination'


export default function DataTableContainer() {
  return (
    <div className=' px-4 py-2 mt-[10px]' >

      {/* Title */}
      <p className='text-[20px] leading-[28px] font-medium' >Transactions | This Month</p>

      {/* Container for search box, sorting options, data table, and pagination */}
      <div className='bg-primary-50 px-[12px] py-[12px] rounded-[8px] mt-[20px] ' >

        {/* Container for search box, sorting options */}
        <div className=' flex items-center justify-between ' >

          {/* Search Box */}
          <div className="w-[248px] h-[40px] rounded-md border-[2px] border-primary-200 flex px-[9px] py-[16px] items-center gap-8 ">
            <div className="flex ml-[10px] w-[400px] gap-[8px] items-center ">

              <img src={search} alt="Search Icon" />
              <input type="text" placeholder="Search by order ID..." className="bg-transparent outline-none text-sm font-normal text-gray-500 w-full" />
            </div>
          </div>
          {/* End of Search Box */}

          {/* Sorting options and download button */}
          <div className='flex gap-[12px] ' >

            {/* Sorting option */}
            <div className='h-[36px] w-[79px] px-[6px] py-[12px] gap-[6px]  rounded-[4px] border-[1px] flex items-center justify-center border-primary-[rgba(217, 217, 217, 1)] ' >
              <p className='text-[16px] leading-[24px] ' >Soft </p>
              <img src={sort} alt="Sort Icon" className=' h-[18px] w-[18px]  ' />
            </div>

            {/* Download button */}
            <div className='h-[36px] w-[36px] rounded-[4px] border-[1px] flex items-center border-primary-[rgba(217, 217, 217, 1)] ' >
              <img src={download} alt="Download Icon" className=' h-[18px] w-[18px] m-auto  ' />
            </div>
          </div>

        </div>

        {/* Data table */}
        <DataTable />

        {/* Pagination */}
        <Pagination />
      
      </div>
    </div>
  )
}
