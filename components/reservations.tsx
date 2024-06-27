"use client";

import React, { useState } from 'react';
import '../styles/reservations.css';

export default function Reservations() {
  const [firstQuestionSelected, setFirstQuestionSelected] = useState(false);
  const [secondQuestionSelected, setSecondQuestionSelected] = useState(false);
  const [thirdQuestionSelected, setThirdQuestionSelected] = useState(false);
  const [fourthQuestionSelected, setFourthQuestionSelected] = useState(false);
  const [fifthQuestionSelected, setFifthQuestionSelected] = useState(false);
  const [sixthQuestionSelected, setSixthQuestionSelected] = useState(false);
  
  return (
    <div className="flex flex-col w-full gap-2 text-white font-extralight">
      <div>
        <div className="reservation" style={firstQuestionSelected ? {backgroundColor: 'var(--solid-colors--darkpurple)', borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {}} onClick={() => setFirstQuestionSelected(!firstQuestionSelected)}>
          <h1>You lack years of experience in the industry.</h1>
          <div className="reservation-icon-container" style={firstQuestionSelected ? {transform: 'rotate(45deg)'} : {}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " preserveAspectRatio="none"><rect width="15" height="2" transform="matrix(0.000136303 1 -1 0.000137483 13.0011 4.50195)" fill="white"></rect><rect width="15" height="2" transform="matrix(-1 0.000137694 0.000136092 1 19.502 11.001)" fill="white"></rect>
            </svg>
          </div>
        </div>
        <div className="reservation-explanation" style={firstQuestionSelected ? {display: 'block'} : {display: 'none'}}>
          True. While I am coming right out of college, I do have experience developing software in a production environment and managing entire features.
          Also building many applications and communicating with different teams have been valuable in my previous professional experiences.
          Still I'm always trying to learn and improve by pushing myself outside the comfort zone (i.e. reading about coding best practices and practicing code smells refactoring).
          Similar to a startup, I move fast and iterate on my mistakes, allowing me to learn and adapt rather quickly which is what I will bring to Patronus AI.
        </div>
      </div>
      <div>
        <div className="reservation" style={secondQuestionSelected ? {backgroundColor: 'var(--solid-colors--darkpurple)', borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {}} onClick={() => setSecondQuestionSelected(!secondQuestionSelected)}>
          <h1>You have no big tech internships. Are you truly a top engineer?</h1>
          <div className="reservation-icon-container" style={secondQuestionSelected ? {transform: 'rotate(45deg)'} : {}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " preserveAspectRatio="none"><rect width="15" height="2" transform="matrix(0.000136303 1 -1 0.000137483 13.0011 4.50195)" fill="white"></rect><rect width="15" height="2" transform="matrix(-1 0.000137694 0.000136092 1 19.502 11.001)" fill="white"></rect>
            </svg>
          </div>
        </div>
        <div className="reservation-explanation" style={secondQuestionSelected ? {display: 'block'} : {display: 'none'}}>
          That's a valid question, but no big tech was actually an intentional decision. After talking with upperclassmen and alumni my sophomore year
          I decided that while big tech is very appealing (i.e. fun internships, high salary, prestige), it didn't completely align with my future ambitions.
          I wanted to build or contribute to something that has direct tangible impact which meant finding opportunities that optimize
          1. working with the best people and 2. learning every business skill (engineering, product, design, marketing, etc.).
          While big tech touts having the best talent, I saw so many talented engineers and operators I could learn from everywhere. So I pursued
          learning opportunities that aligned with my ambitions, interning at an incubator and pursuing startup ideas with my Amazon and Asana experienced friends. 
        </div>
      </div>
      <div>
        <div className="reservation" style={thirdQuestionSelected ? {backgroundColor: 'var(--solid-colors--darkpurple)', borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {}} onClick={() => setThirdQuestionSelected(!thirdQuestionSelected)}>
          <h1>It's costly to train an engineer who takes a while to understand the tech stack, codebase, and tools before contributing only to be a poor fit in the end.</h1>
          <div className="reservation-icon-container" style={thirdQuestionSelected ? {transform: 'rotate(45deg)'} : {}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " preserveAspectRatio="none"><rect width="15" height="2" transform="matrix(0.000136303 1 -1 0.000137483 13.0011 4.50195)" fill="white"></rect><rect width="15" height="2" transform="matrix(-1 0.000137694 0.000136092 1 19.502 11.001)" fill="white"></rect>
            </svg>
          </div>
        </div>
        <div className="reservation-explanation" style={thirdQuestionSelected ? {display: 'block'} : {display: 'none'}}>
          At the previous startup, I was thrown into their codebase and tools. It took 2 days to get up to speed and I began shipping code days later.
          While this is partly from the codebase being in its early stages, it's also a byproduct of building 14 applications all in React,
          10 of which were fullstack with either a Python or Javascript/Typescript backend that had been thoroughly tested with Postman.
          Up until this year, all my applications were deployed to AWS through Cloudfront using an S3 bucket and Elastic Beanstalk for backend APIs with VPC security groups.
          So given Patronus AI's stack and tools (React, NodeJS, Django, PostgreSQL, AWS, and Postman), it won't take long for me to get acquainted and shipping code.
          Also, while I strive to be independent and autonomous, I remain teachable. I always think about problems through first principles and only resort to others for help after exhaustively thinking through solutions.
        </div>
      </div>
      <div>
        <div className="reservation" style={fifthQuestionSelected ? {backgroundColor: 'var(--solid-colors--darkpurple)', borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {}} onClick={() => setFifthQuestionSelected(!fifthQuestionSelected)}>
          <h1>Is Patronus a backup option? Why us?</h1>
          <div className="reservation-icon-container" style={fifthQuestionSelected ? {transform: 'rotate(45deg)'} : {}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " preserveAspectRatio="none"><rect width="15" height="2" transform="matrix(0.000136303 1 -1 0.000137483 13.0011 4.50195)" fill="white"></rect><rect width="15" height="2" transform="matrix(-1 0.000137694 0.000136092 1 19.502 11.001)" fill="white"></rect>
            </svg>
          </div>
        </div>
        <div className="reservation-explanation" style={fifthQuestionSelected ? {display: 'block'} : {display: 'none'}}>
          I've thoroughly considered various opportunities and Patronus AI is #1.
          Why? Because you are taking the right approach to this problem (research first) and
          tackling a very difficult yet pressing problem.
          After deciding with a close friend not to continue our startup idea through YC this past April,
          I spent the following weeks getting ready to graduate and researching high potential industries.
          The Cambrian explosion of generative AI startups across every vertical was too significant to ignore and
          I believe the most successful startups will be the ones "selling pickaxes during a gold rush".
          I began filtering for series A startup opportunities, turning down pre-seed and Series B opportunities, since it strikes the perfect balance
          of validation and individual impact opportunities when I serendipitously discovered Patronus AI, temporarily halting my search.
        </div>
      </div>
      <div>
        <div className="reservation" style={fourthQuestionSelected ? {backgroundColor: 'var(--solid-colors--darkpurple)', borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {}} onClick={() => setFourthQuestionSelected(!fourthQuestionSelected)}>
          <h1>How can we know you will be in for the long haul when things get difficult?</h1>
          <div className="reservation-icon-container" style={fourthQuestionSelected ? {transform: 'rotate(45deg)'} : {}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " preserveAspectRatio="none"><rect width="15" height="2" transform="matrix(0.000136303 1 -1 0.000137483 13.0011 4.50195)" fill="white"></rect><rect width="15" height="2" transform="matrix(-1 0.000137694 0.000136092 1 19.502 11.001)" fill="white"></rect>
            </svg>
          </div>
        </div>
        <div className="reservation-explanation" style={fourthQuestionSelected ? {display: 'block'} : {display: 'none'}}>
          Every aspiring founder wants to build or be a part of the next rocket ship startup like Stripe, Ramp, or Rippling.
          I truly believe Patronus has potential to be one and don't doubt the journey will get tough.
          However, the journey being difficult isn't a bug but rather an exhilarating feature.
          There is immense satisfaction and fulfillment in working on hard problems with uncapped upside.
        </div>
      </div>
      <div>
        <div className="reservation" style={sixthQuestionSelected ? {backgroundColor: 'var(--solid-colors--darkpurple)', borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {}} onClick={() => setSixthQuestionSelected(!sixthQuestionSelected)}>
          <h1>How do we even know you'd fit in?</h1>
          <div className="reservation-icon-container" style={sixthQuestionSelected ? {transform: 'rotate(45deg)'} : {}}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " preserveAspectRatio="none"><rect width="15" height="2" transform="matrix(0.000136303 1 -1 0.000137483 13.0011 4.50195)" fill="white"></rect><rect width="15" height="2" transform="matrix(-1 0.000137694 0.000136092 1 19.502 11.001)" fill="white"></rect>
            </svg>
          </div>
        </div>
        <div className="reservation-explanation" style={sixthQuestionSelected ? {display: 'block'} : {display: 'none'}}>
        You can't know for certain but if you still are conflicted, I can start off as a contract, work trial, or intern.
        This would minimize your downside or risk while maximizing your upside.
        </div>
      </div>
    </div>
  );
}