
function Header() {
    return (
      <>
        <header>
          {/* Logo Icon */}
          <a href="/" className="icon w-12 h-12 absolute left-15 top-5">
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            className="custom-logo"
          >
            <g id="SVGRepo_iconCarrier">
              <path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path>
              <path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path>
              <path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path>
            </g>
          </svg>
          </a>
  
          {/* Navigation Links */}
          <a href="#about" className="scale">About</a>
          <a href="#portfolio" className="scale">Portfolio</a>
          <a href="#contact" className="scale">Contact</a>
        </header>
      </>
    );
  }
  
  export default Header;
  