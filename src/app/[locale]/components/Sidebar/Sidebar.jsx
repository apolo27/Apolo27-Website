import React, { useEffect } from "react";
import { Link } from "../../../../i18n/routing";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleBackgroundClick = () => {
    toggleSidebar();
  };

  return (
    <div
      className="transition-all fixed inset-0 bg-gray-900 bg-opacity-80 z-50 backdrop-blur-md"
      onClick={handleBackgroundClick}
    >
      <div
        className="flex flex-col items-center justify-center h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="space-y-6 z-50">
          {[
            { href: "/", label: "Home" },
            { href: "/#about-us", label: "About us" },
            { href: "/stem-with-us", label: "Stem With Us" },
            { href: "/sponsors", label: "Become a Sponsor" },
            { href: "/games", label: "Games" },
            { href: "/social-media", label: "Social Media" },
            { href: "/marketplace", label: "Marketplace" },
          ].map((item, i) => (
            <li key={i} className="relative">
              <Link href={item.href} className="">
                <span className="block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
