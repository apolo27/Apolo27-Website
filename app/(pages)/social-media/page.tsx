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

  type Video = {
    img: string;
    title: string;
    description: string;
    platform: string;
  };

  const episodes = [
    {
      img: "/caribestem.png",
      title: "Episode 1",
      description:
        "This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
    {
      img: "/caribestem.png",
      title: "Episode 2",
      description:
        "This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
  ] as Episode[];

  const videos = [
    {
      img: "/caribestem.png",
      title: "Video 1",
      description: "",
      platform: "Youtube",
    },
    {
      img: "/caribestem.png",
      title: "Video 2",
      description: "",
      platform: "Youtube",
    },
    {
      img: "/caribestem.png",
      title: "Video 3",
      description: "",
      platform: "Youtube",
    },
    {
      img: "/caribestem.png",
      title: "Video 1",
      description: "",
      platform: "Instagram",
    },
    {
      img: "/caribestem.png",
      title: "Video 2",
      description: "",
      platform: "Instagram",
    },
    {
      img: "/caribestem.png",
      title: "Video 3",
      description: "",
      platform: "Instagram",
    },
    {
      img: "/caribestem.png",
      title: "Video 1",
      description: "",
      platform: "TikTok",
    },
    {
      img: "/caribestem.png",
      title: "Video 2",
      description: "",
      platform: "TikTok",
    },
    {
      img: "/caribestem.png",
      title: "Video 3",
      description: "",
      platform: "TikTok",
    },
  ] as Video[];

  return (
    <div className="bg-apolo-empty-background lg:px-[200px] pt-16">
      <div className="mb-20 rounded-full p-4 text-center bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
        <i className="text-5xl font-bold text-white">Social Media</i>
      </div>
      <div className="flex justify-between">
        <Image src="/caribestem.png" alt="Instagram" width={300} height={300} />
        <div className="flex flex-col">
          <p className="text-[#67E1A8] text-4xl font-semibold">Podcast</p>
          <div className="bg-gradient-to-t from-[#379AE1] to-[#69BF77] bg-clip-text">
            <p className="text-9xl text-transparent font-extrabold">
              Caribe STEM
            </p>
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

      <div className="my-16">
        <hr></hr>
      </div>

      <div className="flex justify-between gap-10">
        <div>
          <p className="text-[#DFC86A] text-2xl">Latest Episodes</p>
          <div className="flex flex-col gap-4">
            {episodes.map((episode, i) => (
              <div
                key={i}
                className="flex justify-between bg-gradient-to-r from-[#2A2A2A] to-[#161A2C] p-4 rounded-3xl"
              >
                <Image
                  src={episode.img}
                  alt="Episode"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col justify-around w-[600px]">
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
        <div className="flex flex-col ">
          <p className="text-[#DFC86A] text-2xl">About our hosts</p>
          <Image src="/blankProfile.jpeg" alt="host" width={300} height={300} />
          <div className="bg-gradient-to-l from-[#2A2A2A] to-[#161A2C] p-4 rounded-3xl text-white flex flex-col gap-2 font-semibold">
            <p>Nombre</p>
            <p>Descripcion</p>
          </div>
        </div>
      </div>

      <div>
        <button>Youtube</button>
        <button>Instagram</button>
        <button>TikTok</button>

        <div className="flex flex-wrap gap-4">
          {videos.map((video, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Image src={video.img} alt="Video" width={200} height={200} />
              <p className="text-white font-semibold">{video.title}</p>
              <p className="text-white font-semibold">{video.platform}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
