"use client";

import React from 'react';
import '../styles/cta.css';

export default function CTA() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#1b0d20]">
      <div className="hidden">Credit to Scale.com for the beautiful website and inspiration for this section!</div>
      <div className="cta-header py-12">
        The future of the <br /> industry <span className="styled-text">begins with us.</span>
      </div>
      <div className="cta-button" onClick={() => {window.location.href = "mailto:parknella19@gmail.com?subject=Let's Work&body=Hey Allen,";}}>
          Let's Work
      </div>
    </div>
  );
};
