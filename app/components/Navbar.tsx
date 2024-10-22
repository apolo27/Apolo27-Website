import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-8 align-center flex items-center p-7 max-md justify-between">
      <img src="/gray-logo.png" alt="" className="object-cover h-20 w-20" />

      <ul className="">
        <Link className=" text-black p-4  hover:cursor-pointer" href="/">
          Home
        </Link>

        <Link
          className=" text-black p-4 hover:cursor-pointer"
          href="/stem-with-us"
        >
          Stem With Us
        </Link>

        <Link className=" text-black p-4  hover:cursor-pointer" href="/games">
          Games
        </Link>
        <Link
          className=" text-black p-4  hover:cursor-pointer"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className=" text-black p-4  hover:cursor-pointer"
          href="/sponsors"
        >
          Sponsors
        </Link>
      </ul>
    </nav>
  );
}
