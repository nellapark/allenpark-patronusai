import React from 'react';
import { StaticImageData } from 'next/image';

import PrincetonBW from '../assets/princeton-bw.png';
import FairewayHealthBW from '../assets/faireway_health-bw.png';
import YCBW from '../assets/yc-bw.webp';
import LivitBW from '../assets/livit-bw.jpg';
import SubwayBW from '../assets/subway-bw.png';

import Princeton from '../assets/princeton.png';
import FairewayHealth from '../assets/faireway_health.png';
import YC from '../assets/yc.webp';
import Livit from '../assets/livit.jpg';
import Subway from '../assets/subway.png';
import Atoboy from '../assets/atoboy.png';

import '../styles/marquee.css';

interface LogoProps {
  regularLogo: StaticImageData;
  bwLogo: StaticImageData;
}

const Marquee: React.FC = () => {
  // const logosRef = useRef<HTMLUListElement>(null);
  const logos: LogoProps[] = [
    {
      regularLogo: Princeton,
      bwLogo: PrincetonBW
    },
    {
      regularLogo: FairewayHealth,
      bwLogo: FairewayHealthBW
    },
    {
      regularLogo: YC,
      bwLogo: YCBW
    },
    {
      regularLogo: Livit,
      bwLogo: LivitBW
    },
    {
      regularLogo: Atoboy,
      bwLogo: Atoboy
    },
    {
      regularLogo: Subway,
      bwLogo: SubwayBW
    },
  ]

  return (
    <div className="flex justify-center w-full h-[20vh]">
      <div className="flex flex-col items-center justify-evenly w-5/6 h-full">
        <h1 className="text-[var(--solid-colors--black)] font-light">Approved & vetted by:</h1>
          <ul className="flex items-evenly justify-between w-full h-1/5">
            {
              logos.map((logoObj) => (
                <div className="image-container">
                  <li className="w-24 cursor-pointer">
                    <img src={logoObj.bwLogo.src} alt={logoObj.bwLogo.src} className="bw-image w-full object-cover" />
                    <img src={logoObj.regularLogo.src} alt={logoObj.regularLogo.src} className="color-image w-full object-cover" />
                  </li>
                </div>
                
              ))
            }
          </ul>                
    </div>
  </div>
  );
};

export default Marquee;
