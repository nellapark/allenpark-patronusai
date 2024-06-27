"use client";

import React, {useState} from 'react';
import '../styles/calculator.css';

export default function Calculator() {
  const [tab, setTab] = useState(0);
  const [contractSize, setContractSize] = useState(5000);
  const [numberOfContracts, setNumberOfContracts] = useState(1);
  const [showChurnTooltip, setShowChurnTooltip] = useState(false);
  const [showDamageTooltip, setShowDamageTooltip] = useState(false);
  const models = ["Llama 2 7B", "GPT-4", "Mistral Large","Falcon 40B"];

  const handleChurnTooltipClick = () => {
    setShowChurnTooltip(!showChurnTooltip);
  };
  const handleDamageTooltipClick = () => {
    setShowDamageTooltip(!showDamageTooltip);
  };

  return (
    <div className="w-1/2 min-w-[525px] max-w-[575px] text-[var(--solid-colors--black)] p-10 bg-white rounded-[2rem] flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="calculator-categories" style={tab === 0 ? {backgroundColor: "#0b64fb", color: "#cee0fe", border: "1px solid #0b64fb"} : {backgroundColor: "#cee0fe", color: "#0b64fb", border: "1px solid #0b64fb"}} onClick={() => setTab(0)}>{models[0]}</div>
        <div className="calculator-categories" style={tab === 1 ? {backgroundColor: "#00A67E", color: "#ccede5", border: "1px solid #00A67E"} : {backgroundColor: "#ccede5", color: "#00A67E", border: "1px solid #00A67E"}} onClick={() => setTab(1)}>{models[1]}</div>
        <div className="calculator-categories" style={tab === 2 ? {backgroundColor: "#ee792f", color: "#FBE4D5", border: "1px solid #ee792f"} : {backgroundColor: "#FBE4D5", color: "#ee792f", border: "1px solid #ee792f"}} onClick={() => setTab(2)}>{models[2]}</div>
        <div className="calculator-categories" style={tab === 3 ? {backgroundColor: "#6400ff", color: "#e0ccff", border: "1px solid #6400ff"} : {backgroundColor: "#e0ccff", color: "#6400ff", border: "1px solid #6400ff"}} onClick={() => setTab(3)}>{models[3]}</div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-sm">Contract size & # of contracts</h1>
            <div className="calculator-input-container">
              <input
                className="w-4/5 bg-transparent outline-none p-4"
                value={contractSize || ''}
                onChange={(e) => {
                  const filteredValue = e.target.value.replace(/[^0-9]/g, '');
                  const newValue = filteredValue ? Math.max(0, parseInt(filteredValue)) : 0;
                  if (!isNaN(newValue)) {
                    setContractSize(newValue);
                  }
                }}
                type="text"
                onWheel={(e) => (e.target as HTMLInputElement).blur()}  
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">

        </div>
        <div className="flex flex-col">
          
        </div>
      </div>
    </div>
  );
};