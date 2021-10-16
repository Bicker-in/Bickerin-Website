import React, { FunctionComponent } from 'react';
import Image from 'next/image';

// 119 233 124
const NavBar: FunctionComponent = () => (
  <header className="flex bg-matte-black p-3 flex-row items-center gap-x-4">
    <div className="bg-green-600 w-12 h-12 sm:w-13 sm:h-13">
      {/* <Image src="/bickerin_logo.svg" alt="BickerinLogo" height="1000" width="200" /> */}
    </div>
    <h1 className="title-text">Bicker<b>!n</b> </h1>
    <nav>
    </nav>
  </header>
);

export default NavBar;