import Image from "next/image";
export default function RemoteControlledTeam() {

  const members = [
    {
      name: "José Ezequiel Díaz",
      role: "Team Advisor",
      career: "Prof. Ing. Mecatrónica",
      img: "/images/about-us/rc/Ezequielwebp",
    },
    {
      name: "Jorge Ceballo",
      role: "Team Leader",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/JorgeCeballo.webp",
    },
    {
      name: "Chantal Jimenez",
      role: "Community Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/ChantalJimenez.webp",
    },
    {
      name: "Pedro Rojas",
      role: "Funding",
      career: "Licenciatura en Negocios Internacionales",
      img: "/images/about-us/rc/PedroRojas.webp",
    },
    {
      name: "Parvati López",
      role: "STEM Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/ParvatiLopez.webp",
    },
    {
      name: "Eduardo Ortega",
      role: "STEM Assistant",
      career: "Ingeniería Mecánica",
      img: "/images/about-us/rc/EduardoOrtega.webp",
    },
    {
      name: "José Humberto",
      role: "Manufacturing Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/JoseHumberto.webp",
    },
    {
      name: "Pablo Encarnación",
      role: "Safety Officer",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/PabloEncarnacion.webp",
    },
    {
      name: "Manuel Mancebo",
      role: "Telemetry Assistant",
      career: "Ingeniería de Software",
      img: "/images/about-us/rc/ManuelMancebo.webp",
    },
    {
      name: "Sebastian De Leon",
      role: "Telemetry Assistant",
      career: "Ingeniería en Ciencias de la Computación",
      img: "/images/about-us/rc/SebastianDeLeon.webp",
    },
    {
      name: "Richard Méndez",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/RichardMendez.webp",
    },
    {
      name: "José Neder",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/JoseNeder.webp",
    },
  ];
  

  return (
    <div className="text-center pt-10">
      <p className="text-4xl font-bold text-white">Remote Controlled Team</p>
      <div className="h-fit justify-center w-full flex">
        <Image
          src={"/images/about-us/RCROVER.png"}
          width={1280}
          height={720}
          alt="Remote Controlled Team"
          className="py-10"
        />
        
          <div className="w-3 h-3 bg-white rounded-full absolute top-72 left-1/2"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute left-0"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute right-0"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute -bottom-40 left-[51.5%]"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute bottom-0"></div>
      </div>
    </div>
  );
}
