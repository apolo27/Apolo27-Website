import React, { useEffect } from "react";
import { Link } from "../../../../i18n/routing";
import { useTranslations } from "next-intl";
import { BanknotesIcon, BeakerIcon, BuildingStorefrontIcon, ComputerDesktopIcon, GlobeAltIcon, HomeIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const t = useTranslations("header");
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
          <li onClick={() => toggleSidebar()} className="relative">
            <span className="block bg-black text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <XMarkIcon className="w-5 h-5 inline-block"/> {t("close")}
            </span>
          </li>
          {[
            { icon: <HomeIcon className="w-5 h-5 inline-block" />, href: "/", label: t("home") },
            { icon: <UserGroupIcon className="w-5 h-5 inline-block" />, href: "/#about-us", label: t("aboutUs") },
            { icon: <BeakerIcon className="w-5 h-5 inline-block" />, href: "/stem-with-us", label: t("stemWithUs") },
            { icon: <BanknotesIcon className="w-5 h-5 inline-block" />, href: "/sponsors", label: t("sponsors") },
            { icon: <ComputerDesktopIcon className="w-5 h-5 inline-block" />, href: "/games", label: t("games") },
            { icon: <GlobeAltIcon className="w-5 h-5 inline-block" />, href: "/social-media", label: t("socialMedia") },
            { icon: <BuildingStorefrontIcon className="w-5 h-5 inline-block" />, href: "/marketplace", label: t("marketplace") },
          ].map((item, i) => (
            <li key={i} className="relative">
              <Link href={item.href} className="">
                <span className="block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {item.icon} {item.label}
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
