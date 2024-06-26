import GlassmorphicNav from "../components/glassmorphicnav";
import WaveAnimation from "../components/waveanimation";
import Marquee from "../components/marquee";
import Card from "../components/card";
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
        <div className="z-10 w-5/6 flex flex-col items-center gap-16 py-24">
          <h1 className="text-header">About Me</h1>
          <div className="flex justify-between w-full">
            <Card cardNumber={0} />
            <Card cardNumber={1} />
            <Card cardNumber={2} />
          </div>
        </div>
      </div>
    </main>
  );
}
