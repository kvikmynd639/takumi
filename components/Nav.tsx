// components/Navbar.tsx

import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-b from-slate-950 via-slate-800 to-slate-700 w-full top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center py-5">
          <div className="w-36 h-14">
            <img src="https://media.vgm.io/products/61/1316/1316-1593936067.png" className="h-auto w-30 sm:w-64" />
          </div>
        </div>

        {/* hr-ish */}
        <hr className="border-t border-gray-300 border-opacity-20" />
        {/* quasi-nav-links */}
        <div className="flex justify-center pt-5">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <p className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Akina 
              </p>
            </Link>
            <Link href="/about">
              <p className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                AE86
              </p>
            </Link>
            <Link href="/about">
              <p className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Garage
              </p>
            </Link>
      
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
