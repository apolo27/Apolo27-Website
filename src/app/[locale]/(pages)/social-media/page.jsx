"use client";

{
  /*
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import EmblaCarousel from "../../components/Carousel/EmblaCarousel";

const TikTokVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/tiktok", {
          cache: "no-cache",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.videos?.length) {
          throw new Error("No videos available");
        }

        setVideos(data.videos);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const loadTikTokScript = async () => {
      if (videos.length > 0) {
        try {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://www.tiktok.com/embed.js";
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        } catch (err) {
          console.error("Error loading TikTok script:", err);
        }
      }
    };

    loadTikTokScript();
  }, [videos]);

  if (loading) {
    return (
      <div className="flex gap-6 justify-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-2xl w-[320px] h-[600px] animate-pulse flex flex-col items-center justify-center shadow-xl"
          >
            <div className="w-16 h-16 bg-gray-700 rounded-full animate-bounce mb-4" />
            <div className="text-lg font-semibold text-gray-300">
              Cargando...
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center p-4">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl">⚠️</div>
            <h3 className="text-2xl font-bold">Error al cargar los videos</h3>
            <p className="text-gray-200 text-center">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-white text-red-800 px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap max-w-full">
      {videos.map((video) => (
        <div
          key={video.videoId}
          className="relative w-full md:w-[320px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
        >
          <blockquote
            className="tiktok-embed"
            cite={video.videoUrl}
            data-video-id={video.videoId}
            style={{ maxWidth: "100%" }}
          >
            <section>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="@apolo27rd"
                href="https://www.tiktok.com/@apolo27rd"
                className="font-medium text-white hover:text-[#69BF77] transition-colors"
              >
                @apolo27rd
              </a>
              <p className="text-sm text-gray-200 mt-2">{video.description}</p>
            </section>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

const InstagramReels = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await fetch("/api/instagram");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setReels(data.reels);
      } catch (err) {
        console.error("Error fetching reels:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-6 justify-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-pink-500/30 to-pink-600/30 text-white rounded-2xl w-[320px] h-[600px] animate-pulse flex flex-col items-center justify-center shadow-xl"
          >
            <div className="w-16 h-16 bg-pink-400/50 rounded-full animate-bounce mb-4" />
            <div className="text-lg font-semibold text-pink-100">
              Cargando...
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center p-4">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl">⚠️</div>
            <h3 className="text-2xl font-bold">Error al cargar los reels</h3>
            <p className="text-gray-200 text-center">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-white text-pink-600 px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap max-w-full">
      {reels.map((reel) => (
        <div
          key={reel.reelId}
          className="relative w-full md:w-[320px] bg-gradient-to-b from-pink-500/10 to-purple-600/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src={`https://www.instagram.com/reel/${reel.reelId}/embed`}
            className="w-full h-[600px]"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <p className="text-white text-sm line-clamp-2">
              {reel.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function SocialMedia() {
  const t = useTranslations("SocialMedia");
  const OPTIONS = { dragFree: true, loop: true, containScroll: false };

  return (
    <>
      {/* <div className="bg-apolo-empty-background lg:px-40 px-4 pt-28 xl:pt-16">
        <div className="mb-20 rounded-full p-4 text-center bg-gradient-to-t from-[#379AE1] to-[#69BF77] z-10">
          <p className="text-3xl md:text-5xl font-bold text-white">
            {t('title')}
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 flex justify-center z-10">
            <Image
              src="/images/social-media/caribestem.webp"
              alt="Instagram"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] "
            />
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-left flex flex-col justify-between z-10">
            <p className="text-[#67E1A8] text-2xl md:text-4xl 2xl:text-5xl font-semibold">
              {t('podcast.title')}
            </p>
            <div className="text-4xl md:text-4xl 3xl:text-6xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77] 2xl:text-8xl">
                Caribe STEM
              </span>
            </div>
            <p className="text-white font-semibold 2xl:text-2xl">
              {t('podcast.description')}
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
      </div> 

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
              style={{ maxWidth: 605, minWidth: 325 }}>
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@apolo27rd"
                  href="https://www.tiktok.com/@apolo27rd?refer=embed">
                  @apolo27rd
                </a>{" "}
                🎥💸 Cuando{" "}
                <a
                  title="manufactura"
                  target="_blank"
                  href="https://www.tiktok.com/tag/manufactura?refer=embed">
                  #Manufactura
                </a>{" "}
                necesita $$$ y{" "}
                <a
                  title="funding"
                  target="_blank"
                  href="https://www.tiktok.com/tag/funding?refer=embed">
                  #Funding
                </a>{" "}
                no coopera... 😂💀 💬 ¿A quién más le pasa esto? 👇{" "}
                <a
                  title="teamapolo27"
                  target="_blank"
                  href="https://www.tiktok.com/tag/teamapolo27?refer=embed">
                  #TeamApolo27
                </a>{" "}
                <a
                  title="dineroporfavor"
                  target="_blank"
                  href="https://www.tiktok.com/tag/dineroporfavor?refer=embed">
                  #DineroPorFavor
                </a>{" "}
                <a
                  title="cosasdeequipos"
                  target="_blank"
                  href="https://www.tiktok.com/tag/cosasdeequipos?refer=embed">
                  #CosasDeEquipos
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ sonido original - 💘🐩"
                  href="https://www.tiktok.com/music/sonido-original-7437180412940192567?refer=embed">
                  ♬ sonido original - 💘🐩
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@apolo27rd/video/7451273044825214213"
              data-video-id="7451273044825214213"
              style={{ maxWidth: 605, minWidth: 325 }}>
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@apolo27rd"
                  href="https://www.tiktok.com/@apolo27rd?refer=embed">
                  @apolo27rd
                </a>{" "}
                🚀📚 ¡El equipo de{" "}
                <a
                  href="https://www.instagram.com/apolo27_rd"
                  target="_blank"
                  href="https://www.tiktok.com/tag/apolo27?refer=embed">
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
                  href="https://www.tiktok.com/tag/apolo27?refer=embed">
                  #Apolo27
                </a>{" "}
                está marcando la diferencia. 🌟 ¿Te gustaría saber más sobre
                nuestro trabajo? ¡Déjanos tus preguntas en los comentarios! 👇🤝
                🎥✨ ¡Dale play y descubre cómo vivimos este día tan especial!
                ❤️{" "}
                <a
                  title="apolo27rd"
                  target="_blank"
                  href="https://www.tiktok.com/tag/apolo27rd?refer=embed">
                  #Apolo27RD
                </a>{" "}
                <a
                  href="https://www.youtube.com/@apolo2730"
                  target="_blank"
                  href="https://www.tiktok.com/tag/innovaci%C3%B3nconprop%C3%B3sito?refer=embed">
                  #InnovaciónConPropósito
                </a>{" "}
                <a
                  title="feriadellibro2024"
                  target="_blank"
                  href="https://www.tiktok.com/tag/feriadellibro2024?refer=embed">
                  #FeriaDelLibro2024
                </a>{" "}
                <a
                  title="construyendofuturo"
                  target="_blank"
                  href="https://www.tiktok.com/tag/construyendofuturo?refer=embed">
                  #ConstruyendoFuturo
                </a>{" "}
                <a
                  href="https://www.instagram.com/apolo27_rd"
                  target="_blank"
                  href="https://www.tiktok.com/tag/equipoimparable?refer=embed">
                  #EquipoImparable
                </a>{" "}
                <a
                  href="https://www.facebook.com/Apolo27.rd/"
                  target="_blank"
                  title="♬ sonido original  - Apolo 27 RD"
                  href="https://www.tiktok.com/music/sonido-original-Apolo-27-RD-7451273087745542918?refer=embed">
                  ♬ sonido original - Apolo 27 RD
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@apolo27rd/video/7451236221482765573"
              data-video-id="7451236221482765573"
              style={{ maxWidth: 605, minWidth: 325 }}>
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@apolo27rd"
                  href="https://www.tiktok.com/@apolo27rd?refer=embed">
                  @apolo27rd
                </a>{" "}
                <p>
                  ¡Presentamos a algunos de nuestros integrantes del team 2025!
                </p>{" "}
                <a
                  target="_blank"
                  title="♬ Alana Hughes - LANA"
                  href="https://www.tiktok.com/music/Alana-Hughes-7141796735709416238?refer=embed">
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
              <iframe
                width="320"
                height="525"
                src="https://www.youtube.com/embed/OGz4aQKsJmM"
                title="Apolo 27 | Expo STEM: Las Carreras del Hoy y el Mañana #ciencia #aprendizajedivertido #tecnologia"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
              <iframe
                width="320"
                height="525"
                src="https://www.youtube.com/embed/017Eo5GvwQg"
                title="Apolo 27 | Expo STEM: Las Carreras del Hoy y el Mañana #ciencia #aprendizajedivertido #tecnologia"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
            <EmblaCarousel
              options={OPTIONS}
              className="w-1/2 flex items-center self-center h-fit rounded-2xl"
            >
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/rc/astronight.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/rc/lidar.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/rc/retostem.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/rc/whatif.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </EmblaCarousel>
          </div>
        </section>
      </div>
    </div>
  );
}
*/
}
import React, { useEffect, useRef } from "react";

export default function SocialMedia() {
  const videoRef = useRef(null);

  useEffect(() => {
    // This will help debug any loading issues
    if (videoRef.current) {
      videoRef.current.addEventListener("error", (e) => {
        console.error("Video error:", videoRef.current.error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-row bg-gradient-to-r from-slate-900 to-black text-white">
      <div className="w-20 lg:w-48 flex items-center justify-center px-2 py-4"></div>
      <video
        ref={videoRef}
        width="600"
        controls
        autoPlay={false}
        loop
        onError={(e) => console.error("Video error event:", e)}>
        {/* Try both paths to see which one works */}
        <source
          src="/videos/social-media/Apolo-27-3d.mp4"
          type="video/mp4"
          onError={(e) => console.error("Source error:", e)}
        />
        <p>
          Tu navegador no soporta la reproducción de video. Error code:{" "}
          {videoRef.current?.error?.code}
        </p>
      </video>
    </div>
  );
}
