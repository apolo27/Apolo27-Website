import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { Chatbot } from "./components/Chatbot";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Apolo 27",
  description:
    "Primer equipo universitario de la Republica Dominicana en participar en la NASA Human Exploration Rover Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Chatbot isSidebarOpen={false} />

        <Footer />
      </body>
    </html>
  );
}
