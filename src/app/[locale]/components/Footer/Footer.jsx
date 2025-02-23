import React from "react";
import { Link } from "../../../../i18n/routing";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer
      className="flex z-50 p-10 bg-[#0d0f18] border-t-2 border-[#b9efff9f]"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Apolo 27</h4>
            <ul className="">
              <li>
                <Link href="/#timeline">Our Timeline</Link>
              </li>
              <li>
                <Link href="human-powered-team">Human Powered Team</Link>
              </li>
              <li>
                <Link href="remote-controlled-team">
                  Remote Controlled Team
                </Link>
              </li>
              <li>
                <Link href="games">STEM Games</Link>
              </li>
              <li>
                <Link href="marketplace">Marketplace</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Data Dashboard</h4>
            <ul>
              <li>
                <Link href="">Overview</Link>
              </li>
              <li>
                <Link href="">Rover</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Stem With Us</h4>
            <ul>
              <li>
                <Link href="/stem-with-us#blogs">Blog</Link>
              </li>
              <li>
                <Link href="/stem-with-us#calendar">Events Calendar</Link>
              </li>
              <li>
                <Link href="/stem-with-us#form">Book a School Visit</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="space-y-4">
              <div className="social-links flex gap-5">
                <p
                  href={"/social-media/#hp"}
                  className="bg-gradient-to-br from-red-700 to-violet-400 text-lg font-semibold px-4 py-2 text-white rounded-full"
                >
                  HP
                </p>
                <FontAwesomeIcon
                  className="hover:cursor-pointer hover:scale-110 text-white"
                  icon={faTiktok}
                  size="2xl"
                  href="https://www.tiktok.com/@apolo27rd"
                />
                <FontAwesomeIcon
                  href="https://www.instagram.com/apolo27_rd/"
                  className="hover:cursor-pointer hover:scale-110 text-pink-500"
                  icon={faInstagram}
                  size="2xl"
                />
                <FontAwesomeIcon
                  className="hover:cursor-pointer hover:scale-110 text-blue-500"
                  icon={faFacebook}
                  size="2xl"
                  href="https://www.facebook.com/Apolo27.rd"
                />
                <FontAwesomeIcon
                  href="https://x.com/apolo27_rd"
                  className="hover:cursor-pointer hover:scale-110 text-white"
                  icon={faXTwitter}
                  size="2xl"
                />
                <FontAwesomeIcon
                  href="https://www.youtube.com/@apolo2730"
                  className="hover:cursor-pointer hover:scale-110 text-red-500"
                  icon={faYoutube}
                  size="2xl"
                />
              </div>
              <div className="social-links flex gap-5 items-center">
                <p
                  href={"/social-media/#rc"}
                  className="bg-gradient-to-br from-blue-600 to-cyan-400 text-lg font-semibold px-4 py-2 text-white rounded-full"
                >
                  RC
                </p>
                <FontAwesomeIcon
                  className="hover:cursor-pointer hover:scale-110 text-white"
                  icon={faTiktok}
                  size="2xl"
                  href="https://www.tiktok.com/@apolo27_rc"
                />
                <FontAwesomeIcon
                  href="://www.instagram.com/apolo27_rd/"
                  className="hover:cursor-pointer hover:scale-110 text-pink-500"
                  icon={faInstagram}
                  size="2xl"
                />
                <FontAwesomeIcon
                  className="hover:cursor-pointer hover:scale-110 text-blue-500"
                  icon={faFacebook}
                  size="2xl"
                  href="https://www.facebook.com/profile.php?id=61566864257448"
                />
                <FontAwesomeIcon
                  href="https://open.spotify.com/show/2bH4oR7PzY41YXcMOFCl2j?si=f8f8b7f8c9aa410b"
                  className="hover:cursor-pointer hover:scale-110 text-green-500"
                  icon={faSpotify}
                  size="2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
