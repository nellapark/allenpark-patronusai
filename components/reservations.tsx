"use client";

import React, { useState } from 'react';
import './reservations.css';

export default function Reservations() {
  const [firstQuestionSelected, setFirstQuestionSelected] = useState(false);
  const [secondQuestionSelected, setSecondQuestionSelected] = useState(false);
  const [thirdQuestionSelected, setThirdQuestionSelected] = useState(false);
  const [fourthQuestionSelected, setFourthQuestionSelected] = useState(false);
  const [fifthQuestionSelected, setFifthQuestionSelected] = useState(false);
  const [sixthQuestionSelected, setSixthQuestionSelected] = useState(false);
  
  return (
    <div className="flex flex-col w-full gap-2">
    </div>
  );
}