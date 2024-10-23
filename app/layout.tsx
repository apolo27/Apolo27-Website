import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './global.css';
import { Chatbot } from './components/Chatbot';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Apolo 27',
  description:
    'Primer equipo universitario de la Republica Dominicana en participar en la NASA Human Exploration Rover Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-14 bg-gradient-to-r from-sky-500 to-indigo-500`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
