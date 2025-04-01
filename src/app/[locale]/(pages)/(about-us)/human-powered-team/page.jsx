import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link } from "../../../../../i18n/routing";
import { useTranslations } from "next-intl";

export default function HumanPoweredTeam() {
  const t = useTranslations("About-us");
  const members = [
    {
      name: "José Ezequiel Díaz",
      role: "Team Advisor",
      career: "Prof. " + t("mechatronics"),
      img: "/images/about-us/hp/Ezequiel.webp",
    },
    {
      name: "Anne Joaquín",
      role: "Team Leader",
      career: t("mechatronics"),
      img: "/images/about-us/hp/Anne.webp",
    },
    {
      name: "Keramsi Sánchez",
      role: "Safety Officer",
      career: t("mechatronics"),
      img: "/images/about-us/hp/Keramsi.webp",
    },
    {
      name: "Camila Tejada",
      role: "Funding Manager",
      career: t("internationalbusiness"),
      img: "/images/about-us/hp/Camila.webp",
    },
    {
      name: "Manuel Guerrero",
      role: "Manufacturing Assistant",
      career: t("systems"),
      img: "/images/about-us/hp/Mago.webp",
    },
    {
      name: "Marko De Los Santos",
      role: "Manufacturing Manager",
      career: t("mechanical"),
      img: "/images/about-us/hp/Marko.webp",
    },

    {
      name: "Angello Ortiz",
      role: "Manufacturing assistant",
      career: t("mechanical"),
      img: "/images/about-us/hp/Angello.webp",
    },
    {
      name: "Avril Neder",
      role: "Manufacturing Assistant",
      career: t("software"),
      img: "/images/about-us/hp/Avril.webp",
    },

    {
      name: "Jaileen Lacen",
      role: "Manufacturing Assistant",
      career: t("mechatronics"),
      img: "/images/about-us/hp/Jaileen.webp",
    },
    {
      name: "Nilo Reyes",
      role: "Manufacturing Assistant",
      career: t("mechatronics"),
      img: "/images/about-us/hp/Nilo.webp",
    },

    {
      name: "Birgit Sánchez",
      role: "Stem Manager",
      career: t("biotechnology"),
      img: "/images/about-us/hp/Birgit.webp",
    },

    {
      name: "Ángela Stacy",
      role: "Stem assistant",
      career: t("education"),
      img: "/images/about-us/hp/Angela.webp",
    },

    {
      name: "Lorennis Reyes",
      role: "Stem Assistant",
      career: t("datascience"),
      img: "/images/about-us/hp/Loren.webp",
    },

    {
      name: "Priscilla Castro",
      role: "Project Manager",
      career: t("software"),
      img: "/images/about-us/hp/Pris.webp",
    },
    {
      name: "Alí Rizvi",
      role: "Community Manager",
      career: t("software"),
      img: "/images/about-us/hp/Ali.webp",
    },
  ];

  const mentors = [
    {
      name: "Miguel Arredondo",
      career: t("mechatronics"),
      img: "/images/about-us/hp/Miguel.webp",
    },
    {
      name: "Hilary Mena",
      career: t("mechatronics"),
      img: "/images/about-us/hp/Hilary.webp",
    },
    {
      name: "Pedro David Disla",
      career: t("software"),
      img: "/images/about-us/hp/David.webp",
    },
    {
      name: "Jorge Colmenares",
      career: t("mechanical"),
      img: "/images/about-us/hp/Colme.webp",
    },
  ];

  return (
    <div
      className="text-center m-10"
      style={{
        backgroundImage: "url('')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex items-center justify-center mb-10">
        <div className="relative w-fit">
          <p className="text-3xl md:text-6xl 2xl:text-7xl font-bold bg-gradient-to-br from-red-700 to-violet-500 text-transparent bg-clip-text ">
            {t("HumanPoweredTeam.title")}
          </p>
          <span className="w-full flex justify-center md:justify-start items-center mt-2">
            <Link
              href="/remote-controlled-team"
              className="flex items-center gap-4 text-white font-medium py-2 px-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-700 transition-all ease-in-out hover:animate-pulse hover:scale-105"
            >
              {t("HumanPoweredTeam.rcDivision")}{" "}
              <ArrowRightIcon className="w-5 h-5" />{" "}
            </Link>
          </span>
        </div>
      </div>

      <div className="w-full flex  justify-center items-center">
        <div className="flex flex-col  w-fit">
          <p className="text-white text-4xl font-semibold drop-shadow-sm">
            {t("HumanPoweredTeam.officialMembers")}
          </p>
          <div className="bg-white h-1 w-full"></div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-evenly gap-20 p-10 lg:p-20">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-[250px] bg-stone-800 border rounded-xl position:relative z-10"
          >
            <Image
              src={member.img}
              width={250}
              height={250}
              alt={member.img}
              className="rounded-xl shadow-xl"
            />
            <div className="p-5">
              <p className="text-white font-bold text-xl">{member.name}</p>
              <p className="text-slate-300 font-medium">{member.career}</p>
              <p className="font-medium text-rose-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex  justify-center items-center">
        <div className="flex flex-col  w-fit">
          <p className="text-white text-4xl font-semibold drop-shadow-sm">
            {t("HumanPoweredTeam.specialMentors")}
          </p>
          <div className="bg-white h-1 w-full"></div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-evenly gap-20 p-10 lg:p-20">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="w-[250px] bg-stone-800 border rounded-xl position:relative z-10"
          >
            <Image
              src={mentor.img}
              width={250}
              height={250}
              alt={mentor.img}
              className="rounded-xl shadow-xl"
            />
            <div className="p-4">
              <p className="text-white font-bold text-xl">{mentor.name}</p>
              <p className="text-slate-300 font-medium">{mentor.career}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
