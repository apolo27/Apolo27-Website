'use client'; // Descomenta si lo usas en un entorno Next.js
import { Card } from '@nextui-org/react';
import Image from 'next/image';

export default function RemoteControlledTeam() {
  const members = [
    {
      name: 'José Ezequiel Díaz',
      role: 'Team Advisor',
      career: 'Prof. Ing. Mecatrónica',
      img: '/images/about-us/hp/Ezequiel.webp',
    },
    {
      name: 'Jorge Ceballo',
      role: 'Team Leader',
      career: 'Ingeniería Mecatrónica',
      img: '/images/about-us/rc/Jorge.webp',
    },
    {
      name: 'Pablo Encarnación',
      role: 'Safety Officer',
      career: 'Ingeniería Mecatrónica',
      img: '/images/about-us/rc/Pablo.webp',
    },
    {
      name: 'José Humberto',
      role: 'Manufacturing Manager',
      career: 'Ingeniería Mecatrónica',
      img: '/images/about-us/rc/Humberto.webp',
    },
    {
      name: 'Richard Méndez',
      role: 'Manufacturing Assistant',
      career: 'Ingeniería Mecatrónica',
      img: '/images/about-us/rc/Richard.webp',
    },
    {
      name: 'José Neder',
      role: 'Manufacturing Assistant',
      career: 'Ingeniería Mecatrónica',
      img: '/images/about-us/rc/Neder.webp',
    },
    {
      name: 'Sebastian De Leon',
      role: 'Telemetry Assistant',
      career: 'Ingeniería en Ciencias de la Computación',
      img: '/images/about-us/rc/Sebastian.webp',
    },
    {
      name: 'Manuel Mancebo',
      role: 'Telemetry Assistant',
      career: 'Ingeniería de Software',
      img: '/images/about-us/rc/Mancebo.webp',
    },
    {
      name: 'Parvati López',
      role: 'STEM Manager',
      career: 'Ingeniería Mecatrónica',
      img: '/images/about-us/rc/Parvati.webp',
    },
    {
      name: 'Chantal Jimenez',
      role: 'Community Manager',
      career: 'Ingeniería Mecatrónica',
      img: '/images/about-us/rc/Chantal.webp',
    },
    {
      name: 'Pedro Rojas',
      role: 'Funding',
      career: 'Licenciatura en Negocios Internacionales',
      img: '/images/about-us/rc/PedroRojas.webp',
    },
  ];

  const mentors = [
    {
      name: 'Carlos De Jesús Chaljub',
      career: 'Ing. Mecatrónico',
      img: '/images/about-us/rc/Chaljub.webp',
    },
    {
      name: 'Vantroi Morillo',
      career: 'Ing. Electrónico y de Comunicaciones',
      img: '/images/about-us/rc/Vantroi.webp',
    },
    {
      name: 'Irving Cedeño',
      career: 'Ing. Mecatrónico',
      img: '/images/about-us/rc/Irving.webp',
    },
  ];

  return (
    <div className="text-center m-10">
      <header className="mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-cyan-400 text-transparent bg-clip-text">
          Remote Controlled Team
        </h1>
      </header>

      <Section title="Official Team Members">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {members.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </Section>

      <Section title="Special Mentors">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {mentors.map((mentor, index) => (
            <TeamCard key={index} member={mentor} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-16">
      <div className="flex justify-center items-center mb-8">
        <div className="flex flex-col w-fit">
          <h2 className="text-white text-4xl font-semibold">{title}</h2>
          <div className="bg-white h-1 w-full mt-2"></div>
        </div>
      </div>
      {children}
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <div className="relative group flex justify-center">
      <Card
        isHoverable
        isPressable
        className="w-80 h-[26rem] overflow-hidden bg-white/10 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        <div className="w-full h-72 relative">
          <Image
            src={member.img}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="p-4 w-full text-center">
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-gray-300">{member.career}</p>
          {member.role && (
            <p className="text-sm text-cyan-300">{member.role}</p>
          )}
        </div>
      </Card>
    </div>
  );
}
