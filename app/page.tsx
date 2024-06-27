import GlassmorphicNav from "../components/glassmorphicnav";
import WaveAnimation from "../components/waveanimation";
import Marquee from "../components/marquee";
import Card from "../components/card";
import Gallery from "../components/gallery";
import Calculator from "../components/calculator";
import Problems from "../components/problems";
import Reservations from "../components/reservations";
import CTA from "../components/cta";
import "../styles/app.css";

export default function Home() {
  return (
    <main className="bg-white">
      <GlassmorphicNav />
      <div className="header-container">
        <h1 className="text-header">Allen Park &lt;&gt; Patronus AI</h1>
        <div className="text-[--solid-colors--black] font-semibold">
        Real world LLM evaluation is a hair on fire problem yet current solutions suck. <br />
        Let's shape <span className="styled-text">the landscape</span> and make the Moody's of AI.
        </div>
      </div>
      <WaveAnimation />
      <Marquee />
      <div className="flex flex-col items-center w-full py-16 relative overflow-hidden">
        <div className="background-image" />
        <div className="styled-divider"></div>
        <div className="z-10 w-5/6 flex flex-col items-center gap-16 py-24">
          <h1 className="text-header">About Me</h1>
          <div className="flex justify-between w-full">
            <Card cardNumber={0} />
            <Card cardNumber={1} />
            <Card cardNumber={2} />
          </div>
        </div>
        <div className="z-10 w-5/6 flex flex-col items-center gap-16 py-8">
          <h1 className="text-header">How I fit with Patronus</h1>
          <Gallery />
        </div>
      </div>
      <div className="flex flex-col items-center w-full py-32 gradient-background">
        <div className="flex items-center w-5/6 text-wrap justify-between">
          <div className="w-1/2 h-full pr-20 gap-4 flex flex-col break-words font-light">
            <h1 className="normal-text-header-dark">LLM Mistakes <br />are Costly</h1>
            <div className="text-[var(--solid-colors--black)] text-lg">
              Hallucinations have caused <a href="https://www.washingtonpost.com/technology/2023/11/16/chatgpt-lawyer-fired-ai/" target="_blank"><u>fines</u></a> and <a href="https://web.archive.org/web/20240610032818/https://asim.bearblog.dev/how-a-single-chatgpt-mistake-cost-us-10000/" target="_blank"><u>expensive coding mistakes</u></a>.
              The liability of LLMs has led to ~1/4 of companies <a href="https://techmonitor.ai/technology/ai-and-automation/firms-generative-ai-ban" target="_blank"><u>banning</u></a> the use of generative AI.
              <a href="https://www.deepkeep.ai/llamav2-7b-analysis" target="_blank"><u>Llama 2 7B</u></a>, <a href="https://pubmed.ncbi.nlm.nih.gov/38776130/" target="_blank"><u>GPT-4</u></a>, <a href="https://www.researchgate.net/publication/380887560_Reducing_LLM_Hallucination_Using_Knowledge_Distillation_A_Case_Study_with_Mistral_Large_and_MMLU_Benchmark" target="_blank"><u>Mistral Large</u></a>, and <a href="https://arxiv.org/html/2401.03205v1" target="_blank"><u>Falcon 40B</u></a> are all known to hallucinate.
            </div>
          </div>
          <Calculator />
        </div>
      </div>
      <div className="flex flex-col items-center w-full py-32 relative">
        <div className="hidden">Credit to Scale.com for the beautiful website and inspiration for this section!</div>
        <div className="w-5/6 flex flex-col items-center gap-12">
          <h1 className="text-header">Automated Evaluation is Broken</h1>
          <Problems />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#1b0d20] w-full pt-32 py-8">
        <div className="flex flex-col w-5/6 gap-8">
          <h1 className="normal-text-header-light">Reservations Q&A</h1>
          <Reservations />
        </div>
      </div>
      <CTA />
    </main>
  );
}
