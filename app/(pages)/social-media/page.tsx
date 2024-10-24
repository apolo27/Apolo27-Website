import { PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
export default function Marketplace() {
  type Episode = {
    img: string;
    title: string;
    description: string;
    duration: string;
    date: Date;
  };

  const episodes = [
    {
      img: "/caribestem.png",
      title: "Episode 1",
      description: "This is the first episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
    {
      img: "/caribestem.png",
      title: "Episode 2",
      description: "This is the second episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
  ] as Episode[];

  return (
    <div className="bg-apolo-empty-background w-full h-screen ">
      <div className="rounded-full p-4 text-center bg-gradient-to-t from-[#379AE1] to-[#69BF77]"><i className="text-5xl font-bold text-white">Social Media</i></div>
      <div className="flex justify-between">
        <Image src="/caribestem.png" alt="Instagram" width={100} height={100} />
        <div className="flex flex-col">
          <p className="text-[#67E1A8]">Podcast</p>
          <div className="bg-gradient-to-t from-[#379AE1] to-[#69BF77] bg-clip-text">
            <p className="text-4xl text-transparent">Caribe STEM</p>
          </div>
          <p className="text-white font-semibold">
            Caribe STEM is a podcast created in order to share and disseminate
            STEM (science, technology, engineering and mathematics) in the
            Dominican Republic and throughout Latin America. Created by Apolo
            27, the university team representing INTEC in the NASA HERC
            competition.
          </p>
        </div>
      </div>

      <div>
        <hr></hr>
      </div>

      <div className="flex">
        <div>
          <p className="text-[#DFC86A] text-xl">Latest Episodes</p>
          <div>
            {episodes.map((episode, i) => (
              <div key={i} className=" flex justify-between bg-gradient-to-r from-[#2A2A2A] to-[#161A2C] p-4 rounded-3xl">
                <Image
                  src={episode.img}
                  alt="Episode"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col justify-around ">
                  <div className="bg-gradient-to-t from-[#379AE1] to-[#69BF77] bg-clip-text">
                    <p className="text-4xl text-transparent">{episode.title}</p>
                  </div>
                  <p className="text-white font-medium">
                    {episode.description}
                  </p>
                  <div className="flex text-white items-center">
                    <div className="rounded-full  bg-[#69BF77]">
                      <PlayCircleIcon className="h-10 w-10" />
                    </div>
                    <p>{episode.date.toDateString()}</p>
                    <p>{episode.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[#DFC86A] text-xl">Abour our hosts</p>
          <Image src="/blankProfile.jpeg" alt="host" width={200} height={200} />
          <div>
            <p>Nombre</p>
            <p>Descripcion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
