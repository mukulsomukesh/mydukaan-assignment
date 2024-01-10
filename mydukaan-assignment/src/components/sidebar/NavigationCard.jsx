import React from 'react';

export default function NavigationCard({ icon, title, selected }) {
    return (
        <div className={`w-full h-[36px] px-[8px] py-[8px] text-primary-50 flex items-center gap-[12px] rounded-md ${selected ? 'bg-primary-500' : 'bg-primary-300'}`}>
            <div><img src={icon} alt="Icon" className="w-[20px] h-[20px]" /></div>
            <p className={`${selected ? 'opacity-100' : 'opacity-80'} text-primary-50 leading-5 text-[14px]`}>{title}</p>
        </div>
    );
}
