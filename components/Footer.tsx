import Image from "next/image";
import Link from "next/link";
import toyota from '/public/toyota.png';
import redSuns from '/public/redsuns.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8 px-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Image
            src={redSuns}
            alt="AE86"
            width={120}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex space-x-8 text-lg">
          <Link href="/" className="hover:text-[#f8e71c] transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#f8e71c] transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#f8e71c] transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400 text-sm">
        <p>© 2024 Initial D Fansite. All rights reserved by Red Suns.</p>
      </div>
    </footer>
  );
}
