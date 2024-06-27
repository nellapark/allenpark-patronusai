"use client";

import React, {useState} from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import '../styles/calculator.css';

export default function Calculator() {
  const [tab, setTab] = useState(0);
  const [contractSize, setContractSize] = useState(5000);
  const [numberOfContracts, setNumberOfContracts] = useState(1);
  const [showChurnTooltip, setShowChurnTooltip] = useState(false);
  const [showDamageTooltip, setShowDamageTooltip] = useState(false);
  const models = ["Llama 2 7B", "GPT-4", "Mistral Large","Falcon 40B"];
  const modelMistakeRates = [0.48, 0.286, 0.124, 0.6196];
  const mistakeDamageProbability = .09;
  const numberOfContractsOptions = [1, 10, 25, 50, 100];

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
              <Menu
                as="div"
                className="relative inline-block text-left w-1/5"
                >
                <MenuButton className="flex w-full h-full justify-center items-center gap-4">
                  {numberOfContracts}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {
                      numberOfContractsOptions.map((option, index) => (
                        <MenuItem key={index}>
                          <div className="px-4 py-2 text-left text-sm hover:bg-gray-100 cursor-pointer" onClick={() => setNumberOfContracts(option)}>
                            {option}
                          </div>
                        </MenuItem>
                      ))
                    }
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="calculator-calculation-row">
            <div className="calculator-empty-operator-container">
              <div className="calculator-empty-operator" />
            </div>
            <div className="calculator-entire-row">
              <div>{parseFloat((modelMistakeRates[tab] * 100).toFixed(2))}%</div>
              <div>{models[tab]} Mistake %</div>
            </div>
          </div>
          <div className="calculator-calculation-row">
            <div className="calculator-operator-container">x</div>
            <div className="calculator-entire-row">
              <div>{numberOfContracts.toLocaleString()}</div>
              <div># of Contracts</div>
            </div>
          </div>
          <div className="calculator-divider"/>
          <div className="calculator-calculation-row">
            <div className="calculator-operator-container">=</div>
            <div className="calculator-entire-row">
              <div>${Math.round(contractSize * modelMistakeRates[tab] * numberOfContracts).toLocaleString()}</div>
              <div className="relative cursor-pointer" onClick={handleChurnTooltipClick}>
                <u>Customer Churn EV</u>
                {showChurnTooltip && (
                  <div className="calculator-tooltip transform z-10">
                    In very high stakes industries (i.e. legal, medical, etc.), it only takes 1 critical mistake for customers to churn.
                    The expected value of churn is based on the number of contracts and the model's mistake rate which would normalize over large numbers.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="calculator-calculation-row">
            <div className="calculator-operator-container">+</div>
          </div>
          <div className="calculator-calculation-row">
            <div className="calculator-empty-operator-container">
              <div className="calculator-empty-operator" />
            </div>
            <div className="calculator-entire-row">
              <div>{parseFloat((modelMistakeRates[tab] * 100).toFixed(2))}%</div>
              <div>{models[tab]} Mistake %</div>
            </div>
          </div>
          <div className="calculator-calculation-row">
            <div className="calculator-empty-operator-container">
              <div className="calculator-empty-operator" />
            </div>
            <div className="calculator-entire-row">
              <div>{mistakeDamageProbability * 100}%</div>
              <div>Probability of Severe Mistake <u><a href="https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00615/118716/Hallucinations-in-Large-Multilingual-Translation" target="_blank" rel="noopener noreferrer">(paper)</a></u></div>
            </div>
          </div>
          <div className="calculator-calculation-row">
            <div className="calculator-operator-container">x</div>
            <div className="calculator-entire-row">
              <div>${contractSize.toLocaleString()}</div>
              <div>Approx. Cost of Mistake (1 contract)</div>
            </div>
          </div>
          <div className="calculator-divider"/>
          <div className="calculator-calculation-row">
            <div className="calculator-operator-container">=</div>
            <div className="calculator-entire-row">
              <div>${Math.round(modelMistakeRates[tab] * mistakeDamageProbability * contractSize).toLocaleString()}</div>
              <div className="relative cursor-pointer" onClick={handleDamageTooltipClick}>
                <u>Damage Control EV</u>
                {showDamageTooltip && (
                  <div className="calculator-tooltip transform">
                    LLM mistakes can incur costs such as fines or infrastructure repairing costs.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-2 gap-2">
          <h1>Potential {models[tab]} Mistake Costs for {numberOfContracts} contract{numberOfContracts > 1 ? "s" : ""}</h1>
          <div className="text-5xl font-bold">${(Math.round(contractSize * modelMistakeRates[tab] * numberOfContracts) + Math.round(modelMistakeRates[tab] * mistakeDamageProbability * contractSize)).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};