"use client";

import React, {useRef, useEffect, useState} from 'react';
import '../styles/gallery.css';
import allenjpark from '../assets/allenjpark_icon.png';
import sogaeting from '../assets/sogaeting_icon.png';
import tomatoes from '../assets/tomatoes.png';
import apples from '../assets/apples.png';
import zucchini from '../assets/zucchini.png'
import startupdin1 from '../assets/startup-din-1.png'
import startupdin2 from '../assets/startup-din-2.png'
import ppopupdin from '../assets/ppopup-din.png'
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface PaperArticle {
  title: string;
  authors: string;
  date: string;
  url: string;
}

export default function Gallery({isMobile}: {isMobile: boolean}) {
  const [tab, setTab] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<number>(-1);
  const grabamealChart: number[] = [3, 7, 4, 1];
  const allenjparkChart: number[] = [5, 14, 0, 1];
  const intcomChart: number[] = [2, 4, 1, 1];
  const recentPaperArticles: PaperArticle[] = [
    {
      title: "Detecting hallucinations in large language models using semantic entropy",
      authors: "Kuhn, L. et al.",
      date: "19 June 2024",
      url: "https://www.nature.com/articles/s41586-024-07421-0"
    },
  {
    title: "Scoop: Forbes threatens Perplexity with legal action",
    authors: "Axios",
    date: "18 June 2024",
    url: "https://www.axios.com/2024/06/18/forbes-perplexity-ai-legal-action-copyright"
  },
  {
    title: "Sequoia Backs AI Startup That Automates Engineering Tasks",
    authors: "Bloomberg",
    date: "18 June 2024",
    url: "https://www.bloomberg.com/news/articles/2024-06-18/sequoia-backs-ai-startup-that-automates-engineering-tasks"
  },
  {
    title: "'We don't need Sora anymore': Luma's new AI video generator Dream Machine slammed with traffic after debut",
    authors: "VentureBeat",
    date: "12 June 2024",
    url: "https://venturebeat.com/ai/we-dont-need-sora-anymore-lumas-new-ai-video-generator-dream-machine-slammed-with-traffic-after-debut/"
  },
  {
    title: "A Careful Examination of Large Language Model Performance on Grade School Arithmetic",
    authors: "Zhang, Hugh, et al.",
    date: "1 May 2024",
    url: "https://arxiv.org/abs/2405.00332"
  },
  {
    title: "Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences",
    authors: "Shankar, Shreya, et al.",
    date: "18 April 2024",
    url: "https://arxiv.org/abs/2404.12272"
  }
  ]

  const getChartOptions = (projectName: string): ApexOptions => {
    return {
      colors: ["#ab77ff", "#4d2ff1", "#3e3571", "#ad45e0"],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
                formatter: function (value) {
                  return value + " days";
                }
              },
              total: {
                show: true,
                label: `${projectName}`,
                color: "var(--solid-colors--black)",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b;
                  }, 0);
                  return sum + ' days';
                },
              }
            },
            size: "80%",
          },
        },
      },
      labels: ["Design", "Frontend", "Backend", "Deploy"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    };
  };

  const openNewTab = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }

  return (
    <div className={`gallery ${isMobile ? "flex-col" : ""}`}>
       <div className={`gallery-tabs ${isMobile ? "flex-row w-full h-1/4 flex-wrap" : "flex-col w-1/4 h-full"}`}>
        <div className={`gallery-tab ${isMobile ? "tab-mobile-padding" : ""}`} style={tab === 0 ? {backgroundColor: '#F2F1EF'} : {}} onClick={() => setTab(0)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 384 512">
            <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"/> 
          </svg>
          First Hand Experience
        </div>
        <div className={`gallery-tab ${isMobile ? "tab-mobile-padding" : ""}`} style={tab === 1 ? {backgroundColor: '#F2F1EF'} : {}} onClick={() => setTab(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
          </svg>
          Jack of All Trades
        </div>
        <div className={`gallery-tab ${isMobile ? "tab-mobile-padding" : ""}`} style={tab === 2 ? {backgroundColor: '#F2F1EF'} : {}} onClick={() => setTab(2)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m2.68 7.676 6.49-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Zm5.71-2.858a.5.5 0 1 0-.708.707.5.5 0 0 0 .707-.707ZM6.974 6.939a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707M5.56 8.354a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708m2.828 2.828a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707m1.414-2.121a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414-.707a.5.5 0 1 0-.706-.708.5.5 0 0 0 .707.708Zm-4.242.707a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414-.707a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708m1.414-2.122a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707M8.646 3.354l4 4 .708-.708-4-4zm-1.292 9.292-4-4-.708.708 4 4z"/>
          </svg>
          Gumption
        </div>
        <div className={`gallery-tab ${isMobile ? "tab-mobile-padding" : ""}`} style={tab === 3 ? {backgroundColor: '#F2F1EF'} : {}} onClick={() => setTab(3)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
          </svg>
          Speed
        </div>
        <div className={`gallery-tab ${isMobile ? "tab-mobile-padding" : ""}`} style={tab === 4 ? {backgroundColor: '#F2F1EF'} : {}} onClick={() => setTab(4)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
          </svg>
          Always Curious
        </div>
        <div className={`gallery-tab ${isMobile ? "tab-mobile-padding" : ""}`} style={tab === 5 ? {backgroundColor: '#F2F1EF'} : {}} onClick={() => setTab(5)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 640 512">
            <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/>
          </svg>
          Team Player
          </div>
      </div>
      <div className={`gallery-content ${isMobile ? "w-full h-1/4 text-sm p-3" : "w-3/4 h-full p-9 text-[18px]"}`}>
        <div className="gallery-content-inner" style={tab === 0 ? {display: 'flex'} : {display: 'none'}}>
          <div>
            I saw how consequential mistakes were at the acquired healthcare startup & built an internal prompting tool that aggregated calls and streamlined manual evaluation.
            While pursuing a gen. AI startup, a frequently mentioned hair on fire problem from customer discovery interviews was evaluating LLM outputs. Experiencing this ourselves, I understand how difficult and important the problem is.<br/>
          </div>
          <div className={`flex flex-col gap-12 ${isMobile ? "hidden" : ""}`}>
            <h1 className="text-center text-2xl font-semibold">Layers of Experience</h1>
            <div className='flex w-full gap-12'>
              <div className="experience-layers">
                <button className="experience-layer layer-1" onMouseEnter={() => setHoveredLayer(0)} onMouseLeave={() => setHoveredLayer(-1)}>
                  <svg viewBox="-2 -2 760 95" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                    <path className="main" d="M146.587 0.970592C147.12 0.66232 147.725 0.5 148.34 0.5H607.656C608.271 0.5 608.876 0.662322 609.409 0.9706L752.85 83.9706C755.948 85.7631 754.676 90.5 751.097 90.5H4.89849C1.3194 90.5 0.0477215 85.7631 3.14557 83.9706L146.587 0.970592Z"></path>
                    <path className="border" d="M146.587 0.970592C147.12 0.66232 147.725 0.5 148.34 0.5H607.656C608.271 0.5 608.876 0.662322 609.409 0.9706L752.85 83.9706C755.948 85.7631 754.676 90.5 751.097 90.5H4.89849C1.3194 90.5 0.0477215 85.7631 3.14557 83.9706L146.587 0.970592Z" stroke="#5318eb" stroke-opacity="1"></path>
                    <path d="M146.338 0.537819C146.947 0.185509 147.638 0 148.341 0H607.657C608.36 0 609.051 0.185513 609.66 0.537825L753.101 83.5378C756.642 85.5864 755.188 91 751.098 91H4.89934C0.808961 91 -0.64441 85.5864 2.896 83.5378L146.338 0.537819Z"></path>
                  </svg>
                </button>
                <button className="experience-layer layer-2" onMouseEnter={() => setHoveredLayer(1)} onMouseLeave={() => setHoveredLayer(-1)}>
                  <svg viewBox="-2 -2 760 95" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                    <path className="main" d="M146.587 0.970592C147.12 0.66232 147.725 0.5 148.34 0.5H607.656C608.271 0.5 608.876 0.662322 609.409 0.9706L752.85 83.9706C755.948 85.7631 754.676 90.5 751.097 90.5H4.89849C1.3194 90.5 0.0477215 85.7631 3.14557 83.9706L146.587 0.970592Z"></path>
                    <path className="border" d="M146.587 0.970592C147.12 0.66232 147.725 0.5 148.34 0.5H607.656C608.271 0.5 608.876 0.662322 609.409 0.9706L752.85 83.9706C755.948 85.7631 754.676 90.5 751.097 90.5H4.89849C1.3194 90.5 0.0477215 85.7631 3.14557 83.9706L146.587 0.970592Z" stroke="#5318eb" stroke-opacity="1"></path>
                    <path d="M146.338 0.537819C146.947 0.185509 147.638 0 148.341 0H607.657C608.36 0 609.051 0.185513 609.66 0.537825L753.101 83.5378C756.642 85.5864 755.188 91 751.098 91H4.89934C0.808961 91 -0.64441 85.5864 2.896 83.5378L146.338 0.537819Z"></path>
                    <path d="M385 11.5L597.112 11.5C597.394 11.5 597.67 11.5794 597.909 11.729L696.839 73.729C698.115 74.5288 697.549 76.5 696.042 76.5L385 76.5C384.172 76.5 383.5 75.8284 383.5 75L383.5 13C383.5 12.1716 384.172 11.5 385 11.5Z" stroke="white" stroke-opacity="0.1"></path>
                    <path d="M366.5 11.5L157.397 11.5L53.7385 76.5L366.5 76.5L366.5 11.5Z" stroke="white" stroke-opacity="0.1"></path>
                  </svg>
                </button>
                <button className="experience-layer layer-3" onMouseEnter={() => setHoveredLayer(2)} onMouseLeave={() => setHoveredLayer(-1)}>
                  <svg viewBox="-2 -2 760 95" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                    <path className="main" d="M146.587 0.970592C147.12 0.66232 147.725 0.5 148.34 0.5H607.656C608.271 0.5 608.876 0.662322 609.409 0.9706L752.85 83.9706C755.948 85.7631 754.676 90.5 751.097 90.5H4.89849C1.3194 90.5 0.0477215 85.7631 3.14557 83.9706L146.587 0.970592Z"></path>
                    <path className="border" d="M146.587 0.970592C147.12 0.66232 147.725 0.5 148.34 0.5H607.656C608.271 0.5 608.876 0.662322 609.409 0.9706L752.85 83.9706C755.948 85.7631 754.676 90.5 751.097 90.5H4.89849C1.3194 90.5 0.0477215 85.7631 3.14557 83.9706L146.587 0.970592Z" stroke="#5318eb" stroke-opacity="1"></path>
                    <path d="M146.338 0.537819C146.947 0.185509 147.638 0 148.341 0H607.657C608.36 0 609.051 0.185513 609.66 0.537825L753.101 83.5378C756.642 85.5864 755.188 91 751.098 91H4.89934C0.808961 91 -0.64441 85.5864 2.896 83.5378L146.338 0.537819Z"></path>
                  </svg>
                </button>
              </div>
              {
                hoveredLayer === -1 ? (
                  <div className="w-2/5 h-full flex flex-col">
                    <div className="experiance-layer-label">Human Evaluation</div>
                    <div className="experiance-layer-label">Prompt Engineering & RAG</div>
                    <div className="experiance-layer-label">Embeddings & Vector DBs</div>
                  </div>
                ) :
                hoveredLayer === 0 ? (
                  <div className="w-2/5 flex flex-col gap-6">
                    <div className="font-semibold">Human Evaluation</div>
                    <div className="text-sm">
                      Reinforcement Learning from Human Feedback (RLHF)
                    </div>
                  </div>
                ) :
                hoveredLayer === 1 ? (
                  <div className="w-2/5 flex flex-col gap-6">
                    <div className="font-semibold">Prompt Engineering & RAG</div>
                    <div className="flex flex-col gap-2 text-sm">
                      <div>Task & Instruction Splitting</div>
                      <div>Example Context & Templates with Delimiters</div>
                    </div>
                  </div>
                ) :
                // hoveredLayer === 2 ? (
                  (
                    <div className="w-2/5 flex flex-col gap-6">
                    <div className="font-semibold">Embeddings & Vector DBs</div>
                    <div className="flex flex-col gap-2 text-sm">
                      <div>Create Embeddings (OpenAI)</div>
                      <div>Varying Chunking Methods</div>
                      <div>Interact with Vector DBs (FAISS & Pinecone)</div>
                    </div>
                  </div>
                )
              }
          </div>
          </div>
        </div>
        <div className="gallery-content-inner" style={tab === 1 ? {display: 'flex'} : {display: 'none'}}>
          <div>
            I&rsquo;ve taken many ideas and features from zero to production, extending beyond software engineering to designing products, interviewing customers, etc.
            As a result, I&rsquo;ve worked and communicated across every product chain: design-frontend, frontend-backend, ML-code, and code-deployment.
            My portfolio below has a more extensive list of my projects and applications.<br/>
          </div>
          <div className={`flex w-full h-full py-4 justify-between items-center ${isMobile ? "hidden" : ""}`}>
            <div className="project-card" onClick={() => openNewTab("https://allenjpark.com")}>
              <img src={allenjpark.src} alt="allenjpark" className="h-8"/>
              <div>portfolio</div>
            </div>
            <div className="project-card" onClick={() => openNewTab("https://sogaeting.vercel.app")}>
              <img src={sogaeting.src} alt="sogaeting" className="h-8"/>
              <div>sogaeting</div>
            </div>
            <div className="project-card" onClick={() => openNewTab("https://fronthouse-eosin.vercel.app")}>
              <svg height="24" viewBox="0 0 30 28" className="project-card:hover:fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.875 24.75H26.125M6.875 19.25H26.125L27.5 6.875L22 11L16.5 4.125L11 11L5.5 6.875L6.875 19.25Z" stroke="var(--solid-colors--black)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div>fronthouse</div>
            </div>
          </div>
        </div>
        <div className="gallery-content-inner" style={tab === 2 ? {display: 'flex'} : {display: 'none'}}>
          <div className="w-full">
            Startups aren&rsquo;t easy. They are extremely demoralizing. I experienced it while pursuing a marketplace idea selling leftover organic produce from local farmers markets.
            I started door to door and iterated on distribution approaches (i.e. target lower middle class neighborhoods since affluent neighborhoods are price inelastic), going from $0 MRR to ~$55 MRR in a month and ending with ~$280 MRR. 
          </div>
          <div className={`flex w-full h-full justify-between items-center ${isMobile ? "hidden" : ""}`}>
            <img src={apples.src} alt="apples" className="w-1/4 rounded-lg object-contain"/>
            <img src={tomatoes.src} alt="cherrytomato" className="w-1/4 rounded-lg object-contain"/>
            <img src={zucchini.src} alt="zucchini" className="w-1/4 rounded-lg object-contain"/>
          </div>
        </div>
        <div className="gallery-content-inner" style={tab === 3 ? {display: 'flex'} : {display: 'none'}}>
          <div>
            Speed is your biggest advantage as a startup. I&rsquo;ve taken applications and features from design to deployment in days.
            Accelerating the development cycle and getting user feedback as soon as possible is not only exhilarating but also critical for success.
          </div>
          <div className={`w-full flex flex-col gap-12 ${isMobile ? "hidden" : ""}`}>
            <h1 className="text-2xl font-semibold text-center">Project Lifecycles</h1>
            <div className="h-full w-full flex">
              <ReactApexChart options={getChartOptions("Portfolio")} series={allenjparkChart} type="donut" width="90%" className="w-1/3 flex justify-center" />
              <ReactApexChart options={getChartOptions("Grabameal")} series={grabamealChart} type="donut" width="90%" className="w-1/3 flex justify-center" />
              <ReactApexChart options={getChartOptions("Intcom")} series={intcomChart} type="donut" width="90%" className="w-1/3 flex justify-center" />
            </div>
          </div>
        </div>
        <div className="gallery-content-inner" style={tab === 4 ? {display: 'flex'} : {display: 'none'}}>
          <div>
            I&rsquo;ll always have the student mindset to be curious and constantly learn. Innovation moves really fast so it&rsquo;s crucial to keep up with the latest models and developments.
            One way I keep myself accountable is by exchanging tech news and research papers with my close friend and previous co-founder.
            Here are some of papers and articles I&rsquo;ve recently sent to my friend.
          </div>
          <div className={`flex gap-4 py-8 overflow-x-scroll w-full ${isMobile ? "hidden" : ""}`}>
            {
              recentPaperArticles.map((article, index) => {
                return (
                  <div key={index} className="paperarticle-card" onClick={() => openNewTab(article.url)}>
                    <div className="font-semibold">{article.title}</div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[#6b7280]">{article.authors}</div>
                      <div className="text-[#6b7280] font-semibold">{article.date}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="gallery-content-inner !gap-8" style={tab === 5 ? {display: 'flex'} : {display: 'none'}}>
          <div>
            My favorite experience from Princeton was fostering a strong culture with P Pop Up.
            The unbreakable bond was rooted in working extremely hard together towards a unified mission. I want to do the same at Patronus AI.
            I&rsquo;ve also been fortunate to meet such talented people (some started YC companies or joined early stage startups like Warp)
            through organizing startup dinners which demonstrated the importance of genuine curiosity and positive sum thinking.
            I&rsquo;d want to contribute beyond the products we ship and into the culture that is fostered.
          </div>
          <div className={`flex w-full h-full justify-between items-center ${isMobile ? "hidden" : ""}`}>
            <img src={ppopupdin.src} alt="ppopupdin" className="w-1/4 rounded-lg object-contain"/>
            <img src={startupdin1.src} alt="startupdin1" className="w-1/4 rounded-lg object-contain"/>
            <img src={startupdin2.src} alt="startupdin2" className="w-1/4 rounded-lg object-contain"/>
          </div>
        </div>
      </div>
    </div>
    );
  };