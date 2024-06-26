import GlassmorphicNav from "../components/glassmorphicnav";
import WaveAnimation from "../components/waveanimation";
import Marquee from "../components/marquee";
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
    </main>
  );
}
