"use client";

import React, {useRef, useEffect} from 'react';
import '../styles/glassmorphicnav.css';

export default function GlassmorphicNav() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextElementSibling?.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="navbar-element">
          <span>Home</span>
        </li>
        <li className="navbar-element">
          <span>About Me</span>
        </li>
        <li className="navbar-element">
          <span>Perfect Fit</span>
        </li>
        <li className="navbar-element">
          <span>Why Patronus</span>
        </li>
        <li className="navbar-element">
          <span>Reservations</span>
        </li>
        <div
          className="overflow-hidden rounded-[20px] opacity-100 w-auto cursor-pointer"
        >
          <a className="navbar-element-cta">
            The Ask
          </a>
        </div>
      </ul>
    </div>
  );
};