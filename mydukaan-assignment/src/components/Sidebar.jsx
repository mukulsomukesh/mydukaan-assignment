import React from 'react';
import home from "../assets/home.svg";
import plugins from "../assets/plugins.svg";
import products from "../assets/products.svg";
import first6 from "../assets/Navbar Iconff.svg";
import marketing from "../assets/marketing.svg";
import analytics from "../assets/analytics.svg";
import payment from "../assets/payment.svg";
import appearance from "../assets/appearance.svg";
import orders from "../assets/orders.svg";
import audience from "../assets/audience.svg";
import delivery from "../assets/delivery.svg";
import tools from "../assets/tools.svg";
import NavigationCard from './sidebar/NavigationCard';
import ProfileMenu from './sidebar/ProfileMenu';
import AvailableCreditCard from './sidebar/AvailableCreditCard';


export default function Sidebar() {
    // Array of icons with their names and selected status
    const icons = [
        { icon: home, name: "Home", selected: false },
        { icon: orders, name: "Orders", selected: false },
        { icon: products, name: "Products", selected: false },
        { icon: delivery, name: "Delivery", selected: false },
        { icon: marketing, name: "Marketing", selected: false },
        { icon: analytics, name: "Analytics", selected: false },
        { icon: payment, name: "Payments", selected: true },
        { icon: tools, name: "Tools", selected: false },
        { icon: first6, name: "Discounts", selected: false },
        { icon: audience, name: "Audience", selected: false },
        { icon: appearance, name: "Appearance", selected: false },
        { icon: plugins, name: "Plugins", selected: false },
    ];

    return (
        // Main container for the sidebar with styling
        <div className='w-56 flex px-[16px] py-[10px] gap-[16px] flex-col min-h-content  justify-between h-[100%] bg-primary-300'>

            {/* User profile and menu section */}
            <div className='flex flex-col gap-[24px]'>
                {/* ProfileMenu component */}
                <ProfileMenu />

                {/* Navigation icons section */}
                <div>
                    {icons.map((item, index) => (
                        // NavigationCard component for each icon
                        <NavigationCard selected={item.selected} key={index} icon={item.icon} title={item.name} />
                    ))}
                </div>
            </div>

            {/* AvailableCreditCard component section */}
            <div>
                <AvailableCreditCard />
            </div>
        </div>
    );
}
