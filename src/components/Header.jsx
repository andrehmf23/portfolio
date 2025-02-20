function Header() {
    return (
      <>
        <div className="w-full fixed top-0 left-0 flex justify-center items-center bg-gray-950 p-4 h-25 gap-20">
          {/* Logo Icon */}
          <a href="/" className="icon w-12 h-12 absolute left-15 top-5">
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="fill-[#26C6DA] hover:fill-white hover:scale-125 transition-all duration-1000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path>
              <path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path>
              <path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path>
            </g>
          </svg>
          </a>
  
          {/* Navigation Links */}
          <a
            href="#about"
            className="text-cyan-400 font-bold hover:text-white duration-1000 transform hover:scale-110"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-cyan-400 font-bold hover:text-white duration-1000 transform hover:scale-110"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-cyan-400 font-bold hover:text-white duration-1000 transform hover:scale-110"
          >
            Contact
          </a>
        </div>
      </>
    );
  }
  
  export default Header;
  