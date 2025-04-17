import "./Footer.css";
import React from "react";
import { Link } from "../../../../i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer
      className="flex z-50 p-10 pb-12 bg-[#0d0f18] border-t-2 border-[#b9efff9f]"
      style={{ position: "relative", zIndex: 10 }}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1125px] mx-auto text-white">
          <div className="footer-col">
            <Image
            alt="apolo 27 logo"
            src={"/images/logos/logoblanco.webp"}
            width={75}
            height={75}
            />
            <p>{t("subtitle")}</p>
          </div>
          <div className="footer-col">
            <h4>{t("aboutUs")}</h4>
            <ul className="">
              <li>
                <Link href="/#timeline">{t("ourTimeline")}</Link>
              </li>
              <li>
                <Link href="human-powered-team">{t("hpTeam")}</Link>
              </li>
              <li>
                <Link href="remote-controlled-team">
                  {t("rcTeam")}
                </Link>
              </li>

            </ul>
          </div>
          <div className="footer-col">
          <h4>{t("explore")}</h4>
            <ul>
            <li>
                <Link href="games">{t("stemGames")}</Link>
              </li>
              <li>
                <Link href="marketplace">{t("marketplace")}</Link>
              </li>
            </ul>
            
          </div>
          <div className="footer-col">
            <h4>{t("stemWithUs")}</h4>
            <ul>
              <li>
                <Link href="/stem-with-us#blogs">{t("blogs")}</Link>
              </li>
              <li>
                <Link href="/stem-with-us#calendar">{t("calendar")}</Link>
              </li>
              <li>
                <Link href="/stem-with-us#form">{t("schoolVisits")}</Link>
              </li>
            </ul>
          </div>
          <p className="col-span-full text-center text-gray-400/[0.5]">{t("madeWithLove")}</p>
        </div>
    </footer>
  );
}
