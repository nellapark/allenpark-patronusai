"use client";

import React, {useRef, useEffect} from 'react';
import '../styles/glassmorphicnav.css';

interface sectionRefs {
  heroRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  perfectFitRef: React.RefObject<HTMLDivElement>;
  whyPatronusRef: React.RefObject<HTMLDivElement>;
  reservationsRef: React.RefObject<HTMLDivElement>;
  ctaRef: React.RefObject<HTMLDivElement>;
  isLoading: boolean
}

export default function GlassmorphicNav({heroRef, aboutRef, perfectFitRef, whyPatronusRef, reservationsRef, ctaRef, isLoading}: sectionRefs) {
  const logosRef = useRef<HTMLUListElement>(null);

  const scrollToDiv = (divRef: React.RefObject<HTMLDivElement>) => {
    if (divRef.current) {
      divRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextElementSibling?.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className={`navbar-container ${isLoading ? "hidden" : "flex"}`}>
      <ul className="navbar">
        <li className="navbar-element" onClick={() => scrollToDiv(heroRef)}>
          <span>Home</span>
        </li>
        <li className="navbar-element" onClick={() => scrollToDiv(aboutRef)}>
          <span>About Me</span>
        </li>
        <li className="navbar-element" onClick={() => scrollToDiv(perfectFitRef)}>
          <span>Perfect Fit</span>
        </li>
        <li className="navbar-element" onClick={() => scrollToDiv(whyPatronusRef)}>
          <span>Why Patronus</span>
        </li>
        <li className="navbar-element" onClick={() => scrollToDiv(reservationsRef)}>
          <span>Reservations</span>
        </li>
        <div
          className="overflow-hidden rounded-[20px] opacity-100 w-auto cursor-pointer"
          onClick={() => scrollToDiv(ctaRef)}
        >
          <a className="navbar-element-cta">
            The Ask
          </a>
        </div>
      </ul>
    </div>
  );
};