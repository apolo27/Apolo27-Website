"use client";
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
              <TikTokVideos />
            </TabPanel>
            <TabPanel className="flex gap-4 justify-center">
              <InstagramReels />
            </TabPanel>
            <TabPanel className="flex gap-4 justify-center">
              <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
                <iframe
                  className="w-full md:w-[250px] h-[525px]"
                  src="https://www.youtube.com/embed/OGz4aQKsJmM"
                  title="Apolo 27 | Expo STEM: Las Carreras del Hoy y el Mañana"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <iframe
                  className="w-full md:w-[250px] h-[525px]"
                  src="https://www.youtube.com/embed/017Eo5GvwQg"
                  title="Apolo 27 | Expo STEM: Las Carreras del Hoy y el Mañana"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <div className="mt-10 pb-20 flex flex-col text-center items-center gap-10">
          <div className="flex flex-col items-center gap-4">

            <span className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
              {t('connect.title')}
            </span>
            <p className="font-semibold text-white text-lg md:text-xl w-3/4">
              {t('connect.subtitle')}
            </p>
          </div>

          <div className="bg-black border-white border-2 p-4 flex justify-evenly text-white w-3/4 lg:w-1/3">
            <a
              href="https://www.tiktok.com/@apolo27rd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </a>
            <a
              href="https://www.instagram.com/apolo27_rd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              href="https://www.facebook.com/Apolo27.rd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a
              href="https://x.com/apolo27_rd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>
            <a
              href="https://www.youtube.com/@apolo2730"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </a>
          </div>
        </div>
      </div> */}
      <div className="bg-apolo-empty-background lg:px-40 py-10">
        <p className="text-3xl md:text-5xl text-center font-bold text-white">
          {t("title")}
        </p>

        <p className="text-white font-medium text-xl text-center">
          The social media team of Apolo 27 is in charge of managing our
          community and updating our country about all of our events and
          progress.
        </p>
        <hr className="my-8" />

        <section className="text-white space-y-3 my-10">
          <p className="text-4xl text-center font-bold bg-gradient-to-br from-red-700 to-violet-400 text-transparent bg-clip-text">
            HP division social media
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="space-y-5">
              <div className="space-y-2 bg-red-400 p-5 h-fit rounded-xl font-medium z-50 w-[300px]">
                <p className="font-bold text-2xl">Topics</p>
                <ul className="space-y-2 text-lg">
                  <li>• Mechanics</li>
                  <li>• Design</li>
                  <li>• Rover Requirements</li>
                  <li>• Vehicle parts</li>
                  <li>• Astronomical events</li>
                  <li>• School visits</li>
                </ul>
              </div>
              <div className="bg-black border-white border-2 p-4 flex justify-evenly text-white rounded-xl">
                <a
                  href="https://www.tiktok.com/@apolo27rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faTiktok} size="xl" />
                </a>
                <a
                  href="https://www.instagram.com/apolo27_rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
                <a
                  href="https://www.facebook.com/Apolo27.rd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </a>
                <a
                  href="https://x.com/apolo27_rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faXTwitter} size="xl" />
                </a>
                <a
                  href="https://www.youtube.com/@apolo2730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faYoutube} size="xl" />
                </a>
              </div>
            </div>
            <EmblaCarousel
              options={OPTIONS}
              className="w-1/2 flex items-center self-center h-fit rounded-2xl"
            >
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/hp/vehiclepart.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/hp/portamasas.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/hp/stemfest.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="w-full h-full embla__slide"
                src="/images/social-media/hp/keramsi.jpg"
                alt="customization"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </EmblaCarousel>
          </div>
        </section>

        <section className="text-white space-y-3 my-10">
          <p className="text-4xl font-bold text-center bg-gradient-to-br from-blue-600 to-cyan-400 text-transparent bg-clip-text">
            RC division social media
          </p>
          <div className="flex flex-row-reverse items-center">
            <div className="space-y-5">
              <div className="space-y-2 bg-blue-400 p-5 rounded-xl font-medium  z-50 w-[300px]">
                <p className="font-bold text-2xl">Topics</p>
                <ul className="space-y-2">
                  <li>• Electronics</li>
                  <li>• Task Tools Components</li>
                  <li>• Rover Requirements</li>
                  <li>• Vehicle parts</li>
                  <li>• Astronomical events</li>
                  <li>• School visits</li>
                </ul>
              </div>
              <div className="bg-black border-white border-2 p-4 flex justify-evenly text-white rounded-xl">
                <a
                  href="https://www.tiktok.com/@apolo27rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faTiktok} size="xl" />
                </a>
                <a
                  href="https://www.instagram.com/apolo27_rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
                <a
                  href="https://www.facebook.com/Apolo27.rd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </a>
                <a
                  href="https://x.com/apolo27_rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faXTwitter} size="xl" />
                </a>
                <a
                  href="https://www.youtube.com/@apolo2730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faYoutube} size="xl" />
                </a>
              </div>
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
    </>
  );
}
