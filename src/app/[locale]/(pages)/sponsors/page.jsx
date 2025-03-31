import "./sponsors.css";
import { Link } from "../../../../i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Sponsors() {
  const t = useTranslations("Sponsors");
  const sponsors = [
    {
      name: "Ministerio de la juventud",
      img: "/images/sponsors/juventud.png",
    },
    {
      name: "BM Cargo",
      img: "/images/sponsors/bmcargo.png",
    },
    {
      name: "3D printers RD",
      img: "/images/sponsors/3dprintersrd.png",
    },
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
      name: "La Deli",
      img: "/images/sponsors/ladeli.png",
    },
  ];

  return (
    <div className="text-center space-y-10 pt-10  bg-apolo-empty-background ">
      <div className="titleArea text-white">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {t("title")}
        </h1>
        <h3 className="mx-10 text-lg md:text-xl lg:text-3xl font-semibold">
          {t("subtitle")}
        </h3>
      </div>

      <div className="relative z-10 max-w-[1125px] mx-auto rounded-lg shadow-lg my-5 flex justify-center flex-col items-center">
        <p className="w-fit rounded-3xl px-3 py-2 text-gray-950 bg-slate-50 mt-5 font-semibold text-lg">Nuestros Patrocinadores</p>
        <div
          className="
       
      grid grid-rows-flow grid-cols-1 xs:grid-cols-2 md:grid-cols-3 
      justify-items-center gap-10 justify-center items-center"
        >
          {sponsors.map((sponsor, i) => (
            <Image
              key={i}
              width={0}
              height={0}
              sizes="100vw"
              className={`${
                i === sponsors.length - 1 ? "col-span-2 lg:col-span-1" : ""
              } w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-contain`}
              src={sponsor.img}
              alt={sponsor.name}
            />
          ))}
        </div>
      </div>

      <Link href="https://www.paypal.com/donate/?hosted_button_id=4ERGH2W4NPAWW">
        <button className="button-82-pushable my-20">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text font-semibold">
            {t("buttonText")}
          </span>
        </button>
      </Link>
    </div>
  );
}
