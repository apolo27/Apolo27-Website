"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "../../../../i18n/routing";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "../../../../i18n/routing";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="w-full text-white">
      <nav
        className={`${
          pathName === "/"
            ? "bg-[#40D1FF] font-semibold"
            : pathName === "/marketplace"
            ? "bg-transparent absolute"
            : pathName === "/stem-with-us"
            ? "bg-transparent absolute"
            : "bg-gray-800 z-50"
        } w-full font-poppins shadow-md z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex-shrink-0 ml-0">
            <Link href={"/"}>
              <Image
                src="/images/logos/logoblanco.webp"
                alt="Apolo 27 Logo"
                width={45}
                height={45}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex-grow">
            <ul className="hidden lg:flex justify-center space-x-8 text-white">
              {[
                { href: "/", label: t("home") },
                { href: "/#about-us", label: t("aboutUs") },
                { href: "/stem-with-us", label: t("stemWithUs") },
                { href: "/sponsors", label: t("sponsors") },
                { href: "/games", label: t("games") },
                { href: "/social-media", label: t("socialMedia") },
                { href: "/marketplace", label: t("marketplace") },
              ].map((item, i) => (
                <li key={i} className="relative">
                  <Link
                    href={item.href}
                    className={`${
                      pathName === item.href ? "text-blue-500" : "text-white"
                    } ${
                      pathName === "/"
                        ? "hover:text-blue-800"
                        : "hover:text-blue-300"
                    }  transition-colors duration-300 text-lg`}
                  >
                    {item.label}
                  </Link>
                  {pathName === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <SelectLanguage />

          <button
            onClick={toggleSidebar}
            className="lg:hidden focus:outline-none transform transition-transform duration-300 hover:scale-110"
          >
            <Image
              src="/images/menu.svg"
              alt="Menu"
              width="0"
              height="0"
              sizes="100vw"
              className="h-8 w-8"
            />
          </button>

          {isSidebarOpen && (
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          )}
        </div>
      </nav>
    </header>
  );
}
