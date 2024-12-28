import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {Link} from '../../../../../i18n/routing';

export default function RemoteControlledTeam() {
  const members = [
    {
      name: "José Ezequiel Díaz",
      role: "Team Advisor",
      career: "Prof. Ing. Mecatrónica",
      img: "/images/about-us/hp/Ezequiel.webp",
    },
    {
      name: "Jorge Ceballo",
      role: "Team Leader",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Jorge.webp",
    },
    {
      name: "Pablo Encarnación",
      role: "Safety Officer",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Pablo.webp",
    },
    {
      name: "Pedro Rojas",
      role: "Funding",
      career: "Licenciatura en Negocios Internacionales",
      img: "/images/about-us/rc/PedroRojas.webp",
    },
    {
      name: "José Humberto",
      role: "Manufacturing Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Humberto.webp",
    },
    {
      name: "Richard Méndez",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Richard.webp",
    },
    {
      name: "Sebastian De Leon",
      role: "Telemetry Assistant",
      career: "Ingeniería en Ciencias de la Computación",
      img: "/images/about-us/rc/Sebastian.webp",
    },
    {
      name: "Manuel Mancebo",
      role: "Telemetry Assistant",
      career: "Ingeniería de Software",
      img: "/images/about-us/rc/Mancebo.webp",
    },
    {
      name: "Parvati López",
      role: "STEM Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Parvati.webp",
    },
    {
      name: "Chantal Jimenez",
      role: "Community Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Chantal.webp",
    },

  ];

  const mentors = [
    {
      name: "Carlos De Jesús Chaljub",
      career: "Ing. Mecatrónico",
      img: "/images/about-us/rc/Chaljub.webp",
    },
    {
      name: "Vantroi Morillo",
      career: "Ing. Electrónico y de Comunicaciones",
      img: "/images/about-us/rc/Vantroi.webp",
    },
    {
      name: "Irving Cedeño",
      career: "Ing. Mecatrónico",
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
          <p className="text-6xl 2xl:text-7xl font-bold bg-gradient-to-br from-blue-600 to-cyan-400 text-transparent bg-clip-text pb-10">
            Remote Controlled Team
          </p>
          <Link href="/human-powered-team" className="absolute bottom-0 left-0 flex items-center gap-4 text-white font-medium py-2 px-3 rounded-full bg-gradient-to-br from-red-800 to-violet-700 transition-all ease-in-out hover:scale-105">
            <ArrowLeftIcon className="w-5 h-5" /> HP Division
          </Link>
        </div>
      </div>{" "}

      <div className="w-full flex  justify-center items-center">
        <div className="flex flex-col  w-fit">
          <p className="text-white text-4xl font-semibold drop-shadow-sm">
            Official Team Members
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
            Special mentors
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
