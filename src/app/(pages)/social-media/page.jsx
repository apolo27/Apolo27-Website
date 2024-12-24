"use client";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import EmblaCarousel from "../../components/Carousel/EmblaCarousel";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
export default function SocialMedia() {
  const OPTIONS = { dragFree: true, loop: true, containScroll: false };

  const episodes = [
    {
      img: "/images/social-media/caribestem.webp",
      title: "Episode 1",
      description:
        "This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
    {
      img: "/images/social-media/caribestem.webp",
      title: "Episode 2",
      description:
        "This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
  ];

  const videos = [
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 1",
      platform: "Youtube",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 2",
      platform: "Youtube",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 3",
      platform: "Youtube",
    },

    {
      img: "/images/thumbnailExample.webp",
      title: "Video 1",
      platform: "Instagram",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 2",
      platform: "Instagram",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 3",
      platform: "Instagram",
    },

    {
      img: "/images/thumbnailExample.webp",
      title: "Video 1",
      platform: "TikTok",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 2",
      platform: "TikTok",
    },
    {
      img: "/images/thumbnailExample.webp",
      title: "Video 3",
      platform: "TikTok",
    },
  ];

  return (
    <div className="bg-apolo-empty-background lg:px-40 px-4 pt-28 xl:pt-16">
      <div className="mb-20 rounded-full p-4 text-center bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
        <i className="text-3xl md:text-5xl font-bold text-white">
          Social Media
        </i>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/social-media/caribestem.webp"
            alt="Instagram"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] "
          />
        </div>
        <div className="w-full lg:w-1/2 text-center md:text-left flex flex-col justify-between">
          <p className="text-[#67E1A8] text-2xl md:text-4xl 2xl:text-5xl font-semibold">
            Podcast
          </p>
          <div className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77] 2xl:text-8xl">
              Caribe STEM
            </span>
          </div>
          <p className="text-white font-bold 2xl:text-2xl">
            Caribe STEM is a podcast created to share and disseminate STEM
            (science, technology, engineering and mathematics) in the Dominican
            Republic and throughout Latin America. Created by Apolo 27, the
            university team representing INTEC in the NASA HERC competition.
          </p>
        </div>
      </div>

      <hr className="my-16" />
{/* 
      <div className="flex flex-col lg:flex-row justify-between space-x-10">
        <div className="text-center md:text-left w-4/6">
          <p className="text-[#DFC86A] font-medium text-2xl 2xl:text-3xl mb-3">
            Latest Episodes
          </p>
          <div className="flex flex-col gap-4 items-center">
            <EmblaCarousel options={OPTIONS}>
              {episodes.map((episode, i) => (
                <div
                  key={i}
                  className="embla__slide flex flex-col lg:flex-row items-center w-full gap-5 bg-gradient-to-r from-[#2A2A2A] to-[#161A2C] p-4 rounded-3xl z-10"
                >
                  <Image
                    src={episode.img}
                    alt="Episode"
                    width={300}
                    height={300}
                    className="w-56 h-56 object-cover"
                  />
                  <div className="flex flex-col gap-4 justify-around md:w-[400px] 2xl:w-[600px]">
                    <div className="bg-gradient-to-t from-[#379AE1] to-[#69BF77] bg-clip-text">
                      <p className="text-2xl md:text-4xl text-transparent font-medium">
                        {episode.title}
                      </p>
                    </div>
                    <p className="text-white font-medium text-sm md:text-base">
                      {episode.description}
                    </p>
                    <div className="flex text-white gap-5 items-center">
                      <div className="rounded-full bg-[#69BF77]">
                        <PlayCircleIcon className="h-8 w-8" />
                      </div>
                      <p>
                        <strong>Published:</strong>{" "}
                        {episode.date.toDateString()}
                      </p>
                      <p>
                        <strong>Length:</strong> {episode.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
        <div className="flex flex-col px-10 z-10 w-2/6">
          <p className="text-[#DFC86A] text-2xl 2xl:text-3xl mb-3 font-medium">
            About our hosts
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/blankProfile.webp"
              alt="host"
              width={300}
              height={300}
              className="object-cover rounded-t-xl"
            />
          </div>
          <div className="bg-gradient-to-l from-[#2A2A2A] to-[#161A2C] p-4 rounded-b-xl text-white flex flex-col gap-2 font-semibold">
            <p>Nombre</p>
            <p>Descripcion</p>
          </div>
        </div>
      </div> */}

      <TabGroup className="mt-20 pb-10 z-10">
        <TabList className="flex flex-col lg:flex-row justify-center items-center gap-5 mb-5">
          <Tab className="rounded-full w-42 p-4 text-white text-sm md:text-xl font-bold bg-black w-full max-w-xs">
            Tiktok
          </Tab>
          <Tab className="rounded-full w-42 p-4 text-white text-sm md:text-xl font-bold bg-pink-500 w-full max-w-xs">
            Instagram
          </Tab>
          <Tab className="rounded-full w-42 p-4 text-white text-sm md:text-xl font-bold bg-red-600 w-full max-w-xs">
            Youtube
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="flex gap-4 justify-center">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@apolo27rd/video/7451602179384691974"
              data-video-id="7451602179384691974"
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@apolo27rd"
                  href="https://www.tiktok.com/@apolo27rd?refer=embed"
                >
                  @apolo27rd
                </a>{" "}
                🎥💸 Cuando{" "}
                <a
                  title="manufactura"
                  target="_blank"
                  href="https://www.tiktok.com/tag/manufactura?refer=embed"
                >
                  #Manufactura
                </a>{" "}
                necesita $$$ y{" "}
                <a
                  title="funding"
                  target="_blank"
                  href="https://www.tiktok.com/tag/funding?refer=embed"
                >
                  #Funding
                </a>{" "}
                no coopera... 😂💀 💬 ¿A quién más le pasa esto? 👇{" "}
                <a
                  title="teamapolo27"
                  target="_blank"
                  href="https://www.tiktok.com/tag/teamapolo27?refer=embed"
                >
                  #TeamApolo27
                </a>{" "}
                <a
                  title="dineroporfavor"
                  target="_blank"
                  href="https://www.tiktok.com/tag/dineroporfavor?refer=embed"
                >
                  #DineroPorFavor
                </a>{" "}
                <a
                  title="cosasdeequipos"
                  target="_blank"
                  href="https://www.tiktok.com/tag/cosasdeequipos?refer=embed"
                >
                  #CosasDeEquipos
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ sonido original - 💘🐩"
                  href="https://www.tiktok.com/music/sonido-original-7437180412940192567?refer=embed"
                >
                  ♬ sonido original - 💘🐩
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@apolo27rd/video/7451273044825214213"
              data-video-id="7451273044825214213"
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@apolo27rd"
                  href="https://www.tiktok.com/@apolo27rd?refer=embed"
                >
                  @apolo27rd
                </a>{" "}
                🚀📚 ¡El equipo de{" "}
                <a
                  title="apolo27"
                  target="_blank"
                  href="https://www.tiktok.com/tag/apolo27?refer=embed"
                >
                  #Apolo27
                </a>{" "}
                dijo presente en la Feria Internacional del Libro 2024 en
                República Dominicana! 🇩🇴✨ Más allá de los libros, aprovechamos
                esta increíble plataforma para compartir nuestra misión, valores
                y todo lo que hacemos como equipo. 💡🔥 Conectamos con mentes
                brillantes, exploramos nuevas ideas y presentamos cómo{" "}
                <a
                  title="apolo27"
                  target="_blank"
                  href="https://www.tiktok.com/tag/apolo27?refer=embed"
                >
                  #Apolo27
                </a>{" "}
                está marcando la diferencia. 🌟 ¿Te gustaría saber más sobre
                nuestro trabajo? ¡Déjanos tus preguntas en los comentarios! 👇🤝
                🎥✨ ¡Dale play y descubre cómo vivimos este día tan especial!
                ❤️{" "}
                <a
                  title="apolo27rd"
                  target="_blank"
                  href="https://www.tiktok.com/tag/apolo27rd?refer=embed"
                >
                  #Apolo27RD
                </a>{" "}
                <a
                  title="innovaciónconpropósito"
                  target="_blank"
                  href="https://www.tiktok.com/tag/innovaci%C3%B3nconprop%C3%B3sito?refer=embed"
                >
                  #InnovaciónConPropósito
                </a>{" "}
                <a
                  title="feriadellibro2024"
                  target="_blank"
                  href="https://www.tiktok.com/tag/feriadellibro2024?refer=embed"
                >
                  #FeriaDelLibro2024
                </a>{" "}
                <a
                  title="construyendofuturo"
                  target="_blank"
                  href="https://www.tiktok.com/tag/construyendofuturo?refer=embed"
                >
                  #ConstruyendoFuturo
                </a>{" "}
                <a
                  title="equipoimparable"
                  target="_blank"
                  href="https://www.tiktok.com/tag/equipoimparable?refer=embed"
                >
                  #EquipoImparable
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ sonido original  - Apolo 27 RD"
                  href="https://www.tiktok.com/music/sonido-original-Apolo-27-RD-7451273087745542918?refer=embed"
                >
                  ♬ sonido original - Apolo 27 RD
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@apolo27rd/video/7451236221482765573"
              data-video-id="7451236221482765573"
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@apolo27rd"
                  href="https://www.tiktok.com/@apolo27rd?refer=embed"
                >
                  @apolo27rd
                </a>{" "}
                <p>
                  ¡Presentamos a algunos de nuestros integrantes del team 2025!
                </p>{" "}
                <a
                  target="_blank"
                  title="♬ Alana Hughes - LANA"
                  href="https://www.tiktok.com/music/Alana-Hughes-7141796735709416238?refer=embed"
                >
                  ♬ Alana Hughes - LANA
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
          </TabPanel>
          <TabPanel className="flex gap-4 justify-center">
            <p>Contenido</p>
          </TabPanel>
          <TabPanel className="flex gap-4 justify-center">
            <div className="flex justify-center gap-4">
            <iframe width="320" height="525" src="https://www.youtube.com/embed/OGz4aQKsJmM" title="Apolo 27 | Expo STEM: Las Carreras del Hoy y el Mañana #ciencia #aprendizajedivertido #tecnologia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="320" height="525" src="https://www.youtube.com/embed/017Eo5GvwQg" title="Apolo 27 | Expo STEM: Las Carreras del Hoy y el Mañana #ciencia #aprendizajedivertido #tecnologia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <div className="mt-10 pb-20 flex flex-col text-center items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-black border-2 border-white rounded-lg p-3 w-fit">
            <Image
              src={"/images/icons/spotify.svg"}
              alt="listen on spotify"
              width={300}
              height={100}
            />
          </div>
          <span className=" text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
            Connect with us!
          </span>
          <p className="font-semibold text-white text-lg md:text-xl w-3/4">
            FOLLOW US ON ALL OUR SOCIAL MEDIA
          </p>
        </div>

        <div className="bg-black border-white border-2 p-4 flex justify-evenly text-white w-3/4 lg:w-1/3">
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faTiktok}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faInstagram}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faFacebook}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faXTwitter}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faYoutube}
            size="2xl"
          />
        </div>
      </div>
    </div>
  );
}
