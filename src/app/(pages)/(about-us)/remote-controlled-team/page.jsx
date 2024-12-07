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

  const mentors = [
    {
      name: "Chaljub",
      career: "Prof. Ing. Mecatrónica",
      img: "/images/about-us/rc/Ezequielwebp",
    },
    {
      name: "Hilary",
      career: "Prof. Ing. Mecatrónica",
      img: "/images/about-us/rc/Ezequielwebp",
    },
    {
      name: "Vantroi",
      career: "Prof. Ing. Mecatrónica",
      img: "/images/about-us/rc/Ezequielwebp",
    },
    {
      name: "Irving",
      career: "Prof. Ing. Mecatrónica",
      img: "/images/about-us/rc/Ezequielwebp",
    }
    
  ]

  return (
    <div
      className="text-center m-10"
      style={{
        backgroundImage: "url('')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",

      }}
    >
      <p className="text-5xl font-bold text-white pb-10">Remote Controlled Team</p>
      <p className="text-white text-4xl font-semibold">Special mentors</p>
      <div className="w-full flex flex-wrap justify-evenly gap-20 p-20">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="w-60 bg-gradient-to-br from-[#1d2f49] to-[#20584a] p-5 rounded-xl position:relative z-10"
          >
            <Image
              src={"/images/250.webp"}
              width={250}
              height={250}
              alt={mentor.img}
              className="rounded-xl"
            />
            <p className="text-white font-bold">{mentor.name}</p>
            <p className="text-white font-semibold">{mentor.career}</p>
          </div>
        ))}
      </div>
      <p className="text-white text-4xl font-semibold">Official Members</p>
      <div className="w-full flex flex-wrap justify-evenly gap-20 p-20">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-60 bg-gradient-to-t from-[#172746] to-[#056b82] p-5 rounded-xl position:relative z-10"
          >
            <Image
              src={"/images/250.webp"}
              width={250}
              height={250}
              alt={member.img}
              className="rounded-xl"
            />
            <p className="text-white font-bold">{member.name}</p>
            <p className="text-white font-semibold">{member.career}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
