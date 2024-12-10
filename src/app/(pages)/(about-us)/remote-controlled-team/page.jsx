import Image from "next/image";
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
      name: "Chantal Jimenez",
      role: "Community Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Chantal.webp",
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
      img: "/images/about-us/rc/Parvati.webp",
    },
    {
      name: "José Humberto",
      role: "Manufacturing Manager",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Humberto.webp",
    },
    {
      name: "Pablo Encarnación",
      role: "Safety Officer",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Pablo.webp",
    },
    {
      name: "Manuel Mancebo",
      role: "Telemetry Assistant",
      career: "Ingeniería de Software",
      img: "/images/about-us/rc/Mancebo.webp",
    },
    {
      name: "Sebastian De Leon",
      role: "Telemetry Assistant",
      career: "Ingeniería en Ciencias de la Computación",
      img: "/images/about-us/rc/Sebastian.webp",
    },
    {
      name: "Richard Méndez",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Richard.webp",
    },
    {
      name: "José Neder",
      role: "Manufacturing Assistant",
      career: "Ingeniería Mecatrónica",
      img: "/images/about-us/rc/Neder.webp",
    },
  ];

  const mentors = [
    {
      name: "Chaljub",
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
      <div className="w-full flex flex-wrap justify-evenly gap-20 p-10 lg:p-20">
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
      <div className="w-full flex flex-wrap justify-evenly gap-20 p-10 lg:p-20">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-60 bg-gradient-to-t from-[#172746] to-[#056b82] p-5 rounded-xl position:relative z-10"
          >
            <Image
              src={member.img}
              width={250}
              height={250}
              alt={member.img}
              className="rounded-xl"
            />
            <p className="text-white font-bold">{member.name}</p>
            <p className="text-white font-semibold">{member.career}</p>
            <p className="text-white font-semibold">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
