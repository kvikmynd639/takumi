import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-b from-black via-gray-900 to-gray-800  border-none w-full top-0 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center py-5">
          <div className="w-36 h-14">
            <img 
              src="https://media.vgm.io/products/61/1316/1316-1593936067.png" 
              className="h-auto w-30 sm:w-64" 
              alt="Initial D Logo"
            />
          </div>
        </div>

        {/* hr-ish */}
        <hr className="border-t border-gray-800 border-opacity-30" />

        {/* quasi-nav-links */}
        <div className="flex justify-center pt-5 pb-3">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium tracking-widest">
             
                Home
            </Link>
            <Link href="/akina" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium tracking-widest">
             
                Akina 
            </Link>
            <Link href="/ae86" className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium tracking-widest">
                AE86
        
            </Link>
            <Link href="/garage"  className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium tracking-widest">
           
                Garage
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
