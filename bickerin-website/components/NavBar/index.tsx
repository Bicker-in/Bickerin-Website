import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';

interface NavItemType {
  name: string;
  link: string;
}
const navItems: Array<NavItemType> = [
  {name: "Blog", link: "/blog"}
]


const NavBarItem: FunctionComponent<NavItemType> = ({name, link}) => (
  <h3 className="navbar-item-text small-button">
    <Link href={link}>
      {name}
    </Link>
  </h3>
);

const NavBar: FunctionComponent = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerValue = (): string => {
    const isHamburgerActive = 'is-active';
    return hamburgerOpen ? isHamburgerActive : '';
  };

  const navBarValue = (): string => {
    const isNavBarFullHeight = 'max-h-11';
    return hamburgerOpen ? isNavBarFullHeight : 'max-h-0';
  }

  return (
    <div className="flex bg-matte-black p-3 flex-col w-full">
      <header className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-4">
          <div className="bg-green-600 w-12 h-12 sm:w-13 sm:h-13">
            {/* <Image src="/bickerin_logo.svg" alt="BickerinLogo" height="1000" width="200" /> */}
          </div>
          <h1 className="title-text font-light">Bicker<b>!n</b> </h1>
        </div>
        <nav>
          <div className="hidden lg:block">
            {navItems.map(({name, link}) => (
              <NavBarItem
                key={name}
                name={name}
                link={link}
              />
            ))}
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
              <span className="hamburger-inner" />
            </span>
          </button>
        </nav>
      </header>
      <nav className={`lg:hidden flex flex-col items-center overflow-hidden transition-max-height ${navBarValue()}`}>
        {navItems.map(({name, link}) => (
          <div key={name} className="flex">
            <NavBarItem
              name={name}
              link={link}
            />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;