import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {Link} from '../../../../../i18n/routing';
import { useTranslations } from "next-intl";

export default function RemoteControlledTeam() {
  const t = useTranslations("About-us");
  const members = [
    {
      name: "José Ezequiel Díaz",
      role: "Team Advisor",
      career: "Prof. " + t("mechatronics"),
      img: "/images/about-us/hp/Ezequiel.webp",
    },
    {
      name: "Jorge Ceballo",
      role: "Team Leader",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Jorge.webp",
    },
    {
      name: "Pablo Encarnación",
      role: "Safety Officer",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Pablo.webp",
    },
    {
      name: "Pedro Rojas",
      role: "Funding",
      career: t("internationalbusiness"),
      img: "/images/about-us/rc/PedroRojas.webp",
    },
    {
      name: "José Humberto",
      role: "Manufacturing Manager",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Humberto.webp",
    },
    {
      name: "Richard Méndez",
      role: "Manufacturing Assistant",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Richard.webp",
    },
    {
      name: "Sebastian De Leon",
      role: "Telemetry Assistant",
      career: t("computer"),
      img: "/images/about-us/rc/Sebastian.webp",
    },
    {
      name: "Manuel Mancebo",
      role: "Telemetry Assistant",
      career: t("software"),
      img: "/images/about-us/rc/Mancebo.webp",
    },
    {
      name: "Parvati López",
      role: "STEM Manager",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Parvati.webp",
    },
    {
      name: "Chantal Jimenez",
      role: "Community Manager",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Chantal.webp",
    },

  ];

  const mentors = [
    {
      name: "Carlos De Jesús Chaljub",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Chaljub.webp",
    },
    {
      name: "Vantroi Morillo",
      career: t("electronics"),
      img: "/images/about-us/rc/Vantroi.webp",
    },
    {
      name: "Irving Cedeño",
      career: t("mechatronics"),
      img: "/images/about-us/rc/Irving.webp",
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
          <p className="text-3xl md:text-6xl 2xl:text-7xl font-bold bg-gradient-to-br from-blue-600 to-cyan-400 text-transparent bg-clip-text ">
            {t("RemoteControlledTeam.title")}
          </p>
          <span className="w-full flex justify-center md:justify-start items-center mt-2">

          <Link href="/human-powered-team" className="w-fit flex items-center gap-4 text-white font-medium py-2 px-3 rounded-full bg-gradient-to-br from-red-800 to-violet-700 transition-all ease-in-out hover:scale-105">
            <ArrowLeftIcon className="w-5 h-5" /> {t("RemoteControlledTeam.hpDivision")}
          </Link>
          </span>
        </div>
      </div>{" "}

      <div className="w-full flex  justify-center items-center">
        <div className="flex flex-col  w-fit">
          <p className="text-white text-4xl font-semibold drop-shadow-sm">
            {t("RemoteControlledTeam.officialMembers")}
          </p>
          <div className="bg-white h-1 w-full"></div>
        </div>
      </div>{" "}
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
              <p className="font-medium text-cyan-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-full flex  justify-center items-center">
        <div className="flex flex-col  w-fit">
          <p className="text-white text-4xl font-semibold drop-shadow-sm">
            {t("RemoteControlledTeam.specialMentors")}
          </p>
          <div className="bg-white h-1 w-full"></div>
        </div>
      </div>{" "}
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
                  <div className="p-5">
                    <p className="text-white font-bold text-xl">{mentor.name}</p>
                    <p className="text-slate-300 font-medium">{mentor.career}</p>
                  </div>
                </div>
        ))}
      </div>
    </div>
  );
}
