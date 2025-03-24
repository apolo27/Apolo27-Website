import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from '../../i18n/routing'

import { Chatbot } from "./components/Chatbot";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Starfield from "./components/Starfield";

export const metadata = {
  title: "Apolo 27",
  description:
    "Primer equipo universitario de la Republica Dominicana en participar en la NASA Human Exploration Rover Challenge",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex flex-col min-h-screen overflow-hidden">
            <Starfield />
            {children}
            <Chatbot isSidebarOpen={false} />
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
