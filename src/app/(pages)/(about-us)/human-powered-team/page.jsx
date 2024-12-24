import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
export default function HumanPoweredTeam() {
  const members = [
    {
      name: "José Ezequiel Díaz",
      role: "Team Advisor",
      career: "Prof. Ing. Mecatrónica",
      img: "/images/about-us/hp/Ezequiel.webp",
    },
    {
      name: "Anne Joaquín",
      role: "Team Leader",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/hp/Anne.webp",
    },
    {
      name: "Manuel Guerrero",
      role: "Safety Officer",
      career: "Ingeniería de Sistemas",
      img: "/images/about-us/hp/Mago.webp",
    },
    {
      name: "Camila Tejada",
      role: "Funding Manager",
      career: "Lic. Negocios Internacionales",
      img: "/images/about-us/hp/Camila.webp",
    },
    {
      name: "Marko De Los Santos",
      role: "Manufacturing Manager",
      career: "Ingeniería Mecánica",
      img: "/images/about-us/hp/Marko.webp",
    },

    {
      name: "Angello Ortiz",
      role: "Manufacturing assistant",
      career: "Ingeniería Mecánica",
      img: "/images/about-us/hp/Angello.webp",
    },
    {
      name: "Avril Neder",
      role: "Manufacturing Assistant",
      career: "Ingeniería de Software",
      img: "/images/about-us/hp/Avril.webp",
    },

    {
      name: "Jaileen Lacen",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/hp/Jaileen.webp",
    },
    {
      name: "Keramsi Sánchez",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/hp/Keramsi.webp",
    },
    {
      name: "Nilo Reyes",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/hp/Nilo.webp",
    },


    {
      name: "Birgit Sánchez",
      role: "Stem Manager",
      career: "Lic. Biotecnología",
      img: "/images/about-us/hp/Birgit.webp",
    },



    {
      name: "Ángela Stacy",
      role: "Stem assistant",
      career: "Ingeniería de Software",
      img: "/images/about-us/hp/Angela.webp",
    },


    {
      name: "Lorennis Reyes",
      role: "Stem Assistant",
      career: "Ciencias de Datos",
      img: "/images/about-us/hp/Loren.webp",
    },



    {
      name: "Priscilla Castro",
      role: "Project Manager",
      career: "Ingeniería de Software",
      img: "/images/about-us/hp/Pris.webp",
    },
    {
      name: "Alí Rizvi",
      role: "Community Manager",
      career: "Ingeniería de Software",
      img: "/images/about-us/hp/Ali.webp",
    },
  ];

  const mentors = [
    {
      name: "Miguel Arredondo",
      career: "Ing. Mecatrónico",
      img: "/images/about-us/hp/Miguel.webp",
    },
    {
      name: "Hilary Mena",
      career: "Ing. Mecatrónica",
      img: "/images/about-us/hp/Hilary.webp",
    },
    {
      name: "Pedro David Disla",
      career: "Ing. De Software",
      img: "/images/about-us/hp/David.webp",
    },
    {
      name: "Jorge Colmenares",
      career: "Ing. Mecanico",
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
          <p className="text-6xl 2xl:text-7xl font-bold bg-gradient-to-br from-red-800 to-violet-500 text-transparent bg-clip-text pb-10">
            Human Powered Team
          </p>
          <Link
            href="/remote-controlled-team"
            className="absolute bottom-0 right-0 flex items-center gap-4 text-white font-medium py-2 px-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-700 transition-all ease-in-out hover:animate-pulse hover:scale-105"
          >
            RC Division <ArrowRightIcon className="w-5 h-5" />{" "}
          </Link>
        </div>
      </div>

      <div className="w-full flex  justify-center items-center">
        <div className="flex flex-col  w-fit">
          <p className="text-white text-4xl font-semibold drop-shadow-sm">
            Official Team Members
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
            Special mentors
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
