import Header from "./components/Header/Header";
import Starfield from "./components/Starfield/index";
import Chatbot from "./components/Chatbot/index";
import Footer from "./components/Footer/Footer";
import "./global.css";
export const metadata = {
  title: "Apolo 27",
  description:
    "Primer equipo universitario de la Republica Dominicana en participar en la NASA Human Exploration Rover Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex flex-col min-h-screen overflow-hidden">
          <Starfield />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
