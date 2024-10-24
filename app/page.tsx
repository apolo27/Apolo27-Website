import Link from 'next/link';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Background />
      <Footer />
    </div>
  );
}
