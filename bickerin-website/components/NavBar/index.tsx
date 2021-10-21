import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';

const NavBar: FunctionComponent = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerValue = (): string => {
    const isHamburgerActive = 'is-active';
    return hamburgerOpen ? isHamburgerActive : '';
  };

  return (
    <header className="flex bg-matte-black p-3 flex-row items-center justify-between w-full">
      <div className="flex flex-row items-center gap-x-4">
        <div className="bg-green-600 w-12 h-12 sm:w-13 sm:h-13">
          {/* <Image src="/bickerin_logo.svg" alt="BickerinLogo" height="1000" width="200" /> */}
        </div>
        <h1 className="title-text font-light">Bicker<b>!n</b> </h1>
      </div>
      <nav>
        <div className="hidden lg:block">
          <h3 className="navbar-item-text small-button">
            <Link href="/blog">
              Blog
            </Link>
          </h3>
        </div>
        <button 
          className={`block lg:hidden hamburger hamburger--collapse ${hamburgerValue()}`}
          style={{color: 'white'}}
          type="button" 
          aria-label="Menu" 
          aria-controls="navigation" 
          aria-expanded={true}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>  
      </nav>
    </header>
  );
};

export default NavBar;