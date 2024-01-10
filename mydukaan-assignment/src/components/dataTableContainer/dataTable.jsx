import React from 'react'
import info from "../../assets/Info.svg"
import polygon from "../../assets/polygon.svg"

const data = [
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
    { orderId: '#281209', orderDate: '7 July, 2023', orderAmount: '₹1,278.23', transactionFees: '₹22' },
];


export default function dataTable() {
    return (
        <div className="overflow-x-auto mt-4">

        {/* Table element */}
        <table className="w-full text-sm bg-primary-200">

            {/* Table header */}
            <thead className="text-xs h-[40px] ">
                <tr>
                    {/* Order ID column */}
                    <td scope="col" className="px-6 py-3 text-left font-semibold">
                        Order ID
                    </td>

                    {/* Order date column */}
                    <td scope="col" className="px-6 py-3 text-left flex justify-start items-center gap-[4px] font-semibold">
                        <p className='h-[20px]' >Order date</p>
                        <img className='h-[5px] w-[7px]' src={polygon} alt="polygon" />
                    </td>

                    {/* Order amount column */}
                    <td scope="col" className="px-6 py-3 text-right font-semibold">
                        Order amount
                    </td>

                    {/* Transaction fees column */}
                    <td scope="col" className="px-6 py-3 text-right flex justify-end items-center gap-[4px] font-semibold">
                        <p className='h-[20px]' >Transaction fees</p>
                        <img className='h-[14px] w-[14px]' src={info} alt="info" />
                    </td>
                </tr>
            </thead>

            {/* Table body */}
            <tbody>
                {data.map((item, index) => (
                    // Table row for each data item
                    <tr key={index} className='bg-primary-50  border-b-[2px] border-primary-200 '>
                        {/* Order ID cell */}
                        <td className="text-[14px] text-[#146EB4] font-medium px-6 py-4 ">
                            {item.orderId}
                        </td>

                        {/* Order date cell */}
                        <td className="text-[14px] px-6 py-4">
                            {item.orderDate}
                        </td>

                        {/* Order amount cell */}
                        <td className="text-[14px] px-6 py-4 text-right">
                            {item.orderAmount}
                        </td>

                        {/* Transaction fees cell */}
                        <td className="text-[14px] px-6 py-4  text-right">
                            {item.transactionFees}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
