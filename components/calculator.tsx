"use client";

import React, {useState} from 'react';
import '../styles/calculator.css';

export default function Calculator() {
  const [tab, setTab] = useState(0);
  const [contractSize, setContractSize] = useState(5000);
  const [numberOfContracts, setNumberOfContracts] = useState(1);
  const [showChurnTooltip, setShowChurnTooltip] = useState(false);
  const [showDamageTooltip, setShowDamageTooltip] = useState(false);

  const handleChurnTooltipClick = () => {
    setShowChurnTooltip(!showChurnTooltip);
  };
  const handleDamageTooltipClick = () => {
    setShowDamageTooltip(!showDamageTooltip);
  };

  return (
    <div className="w-1/2 min-w-[525px] max-w-[575px] text-[var(--solid-colors--black)] p-10 bg-white rounded-[2rem] flex flex-col gap-6">
      <div className="flex justify-between">
        models
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          Contract size & # of contracts
        </div>
        <div className="flex flex-col">
          Calculations
        </div>
        <div className="flex flex-col">
          Total
        </div>
      </div>
    </div>
  );
};