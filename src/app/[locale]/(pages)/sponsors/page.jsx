import "./sponsors.css";
import {Link} from '../../../../i18n/routing';
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Sponsors() {
  const t = useTranslations("Sponsors");
  const sponsors = [
    {
      name: "Grupo Thomas",
      img: "/images/sponsors/thomas.png",
    },
    {
      name: "Aes",
      img: "/images/sponsors/aes.png",
    },
    {
      name: "Wind Telecom",
      img: "/images/sponsors/Logo-Wind-Blanco.png",
    },
    {
      name: "CMI (Guarina Max)",
      img: "/images/sponsors/max.png",
    },
    {
      name: "Hípermercados Olé",
      img: "/images/sponsors/ole.png",
    },
    {
      name: "Pizzarelli",
      img: "/images/sponsors/pizzarellilogo.png",
    },
    {
      name: "Pabe Comercial",
      img: "/images/sponsors/pabecomercial.png",
    },
    {
      name: "3D printers RD",
      img: "/images/sponsors/3dprintersrd.png",
    },
    {
      name: "BM Cargo",
      img: "/images/sponsors/bmcargo.png",
    },
    {
      name: "Ministerio de la juventud",
      img: "/images/sponsors/juventud.png",
    },
    {
      name: "La Deli",
      img: "/images/sponsors/ladeli.png",
    },
  ];

  return (
    <div className="z-10 text-center space-y-10 h-screen">
      <div className="titleArea text-white">
        <h1 className="font-bold text-5xl sm:text-7xl md:text-8xl lg:text-7xl">{t("title")}</h1>
        <h3 className="mx-10 text-xl sm:text-6xl md:text-7xl lg:text-6xl font-semibold">
          {t("subtitle")}
        </h3>
      </div>

      <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="mb-20 animate-infinite-slider w-[calc(450px*11)] h-60 flex gap-10 items-center">
          {sponsors.map((sponsor, i) => (
            <Image
              key={i}
              width="0"
              height="0"
              sizes="100vw"
              className="slide flex w-1/11 items-center justify-center"
              src={sponsor.img}
              alt={sponsor.name}
            />
          ))}

          {sponsors.map((sponsor, i) => (
            <Image
              key={i}
              width="0"
              height="0"
              sizes="100vw"
              className="slide flex w-1/11 h-fit items-center justify-center"
              src={sponsor.img}
              alt={sponsor.name}
            />
          ))}
        </div>
      </div>
      <Link href="https://www.paypal.com/donate/?hosted_button_id=4ERGH2W4NPAWW">
        <button className="button-82-pushable mt-20">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text font-semibold">{t("buttonText")}</span>
        </button>
      </Link>
    </div>
  );
}
