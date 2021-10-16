import React, { FunctionComponent } from 'react';
import textContent from '../../website-text-content.json';

const currentYear = (new Date(Date.now())).getFullYear()

const Footer: FunctionComponent = () => (
  <footer className="bg-matte-black h-full">
    <div className="p-4 lg:p-6 h-full flex flex-col gap-3">
      <div className="flex flex-row gap-4 items-center">
        <div className="bg-green-600 w-12 h-12 sm:w-13 sm:h-13 md:h-14 md:w-14">
          {/* <Image src="/bickerin_logo.svg" alt="BickerinLogo" height="1000" width="200" /> */}
        </div>
        <h1 className="title-text lg:text-2xl font-light">Bicker<b>!n</b></h1>
      </div>
      <p className="article-title font-light text-base lg:text-lg lg:max-w-3xl">
        {textContent.footerDesc}
      </p>
      <div className="flex h-10">
        <button className="small-button">
          <p className="text-white font-primary-font text-xs md:text-lg font-light">
            Sign Up For Beta
          </p>
        </button>
      </div>
    </div>
    <div className="border-gray-400 border-t-2 flex flex-row h-10 px-2 items-center">
      <h6 className="text-sm md:text-base font-primary-font font-light text-white">
        <b>&#169;</b> Bicker!n - {currentYear}
      </h6>
    </div>
  </footer>
);

export default Footer;