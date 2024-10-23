import * as React from 'react';
import { NavigationItem } from './NavbarItem';

const navigationItems = [
  { text: 'ABOUT US', width: 'w-[80px]', href: '/about-us' },
  { text: 'DATA DASHBOARD', width: 'w-[110px]', href: '/dashboard' },
  { text: 'STEM WITH US', width: 'w-[80px]', href: '/stem-with-us' },
  { text: 'BECOME A SPONSOR', width: 'w-[120px]', href: '/become-a-sponsor' },
];

export const Navigation: React.FC = () => {
  return (
    <header className="navbar flex border bg-slate-500  border-black border-solid text-white flex-wrap gap-10 justify-between items-center px-11 py-2.5 text-xs bg-opacity-40 rounded-[47px] max-md:px-5 bg-blue-500 shadow-lg shadow-blue-500/50">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41541c817020e1073351d097c796b45a6d058c7ccc8401cbb93db40aa6600937?placeholderIfAbsent=true&apiKey=f806b9c6fce1476399767512f78ada35"
        alt="Company Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.95] w-[60px]"
      />
      <nav className="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[709px] max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <NavigationItem
            key={index}
            text={item.text}
            width={item.width}
            href={item.href}
          />
        ))}
      </nav>
    </header>
  );
};
