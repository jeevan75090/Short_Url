import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

function Navbar() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className={`navbar-desktop hidden lg:flex justify-between mx-20 my-8`}>
        {/* Desktop navigation links */}
        
        {/* <div className="flex items-between gap-5 text-lg"> */}
          <div className='flex items-center gap-8'>
            <h2 className="logo text-3xl font-black cursor-pointer mr-2">Shortly</h2>
            <a href="#" className="text-gray-500">Features</a>
            <a href="#" className="text-gray-500">Pricing</a>
            <a href="#" className="text-gray-500">Resources</a>
          </div>
          <div className='flex justify-center items-center gap-7'>
            <a href="#" className="text-gray-500">Login</a>
            <button className="bg-[#2ad1d2] px-3 py-1 rounded-2xl text-white hover:bg-[#9be3e2]">
              Sign Up
            </button>
          </div>
        {/* </div> */}
      </div>

      {/* Mobile Navbar */}
      <div className={`navbar-mobile lg:hidden flex justify-between items-center mx-8 my-4`}>
        <h2 className="logo text-2xl font-black cursor-pointer mr-3">Shortly</h2>
        <FiMenu onClick={toggleMobileMenu} className="cursor-pointer" />
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMobileMenuVisible && (
        <div className="navbar-mobile-menu lg:hidden">
          <div className="flex flex-col items-center py-6 gap-1  bg-[#33235c] text-white">
            {/* Mobile navigation links */}
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
            <a href="#">Login</a>
            <button className="bg-[#2ad1d2] px-3 py-1 rounded-2xl text-white hover:bg-[#9be3e2]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
