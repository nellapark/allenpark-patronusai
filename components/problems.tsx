"use client";

import React, { useState } from 'react';
import '../styles/problems.css';
import Correlation from '../assets/correlations.png';
import TweetGrid from '../components/tweetgrid';
import ContaminationVisual from '../components/contaminationvisual';
import BarGraphs from '../components/bargraphs';

interface Tweet {
  img: string;
  name: string;
  username: string;
  text: string;
  likes: number;
  date: string;
  url: string;
}

export default function Problems() {
  const [hoveredProblem, setHoveredProblem] = useState<number>(-1);

  const tweets: Tweet[] = [
    {
      img: "https://pbs.twimg.com/profile_images/1283923539092017155/6W_yw9ta_400x400.jpg",
      name: "Srijan Kumar",
      username: "@srijankedia",
      text: "🤮 Using an LLM to evaluate another LLM sucks! LLMs hallucinate and make mistakes, so why would the judge LLM not do the same?\n\nBlindly trusting the eval LLM is worse than not doing evals at all, as it gives a false sense of trust.\n\nEven if the judge LLM is \"more powerful\" than the one being judged.\n\nFor trustworthy evaluations, you need:\n👉 Meta-evaluations of the judge LLM to know how accurate they are and when they make mistakes\n👉 Human supervision and control\n👉 LLMs specialized to do evaluations, rather than just prompting them.\n\n😎 Be smart. Do your due diligence of the evaluation system you are using. Otherwise you are falling victim to the same problem that you are trying to solve.",
      likes: 41,
      date: "Apr 18, 2024",
      url: "https://twitter.com/srijankedia/status/1780980226865942749"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1676934464159756291/1lM4joGC_400x400.jpg",
      name: "Yi Tay",
      username: "@YiTayML",
      text: "Community: Eval for LLMs are broken! Academic benchmarks are not representative of real world performance! 🙅‍♂️. We need better evals!\n\nAlso the same community: Lets make definitive rankings & leaderboards based on just four zero-shot \"LM harness\" tasks!🤷‍♂️🤷‍♂️\n\nNot wanting to single out any effort 😂, but also human eval on some arbitrary prompt distribution is also problematic for many reasons.\n\nAttempting to make sense of the LLM madness is a a good thing but at this point its best to just not blindly trust any eval.\n\nIt might be also interesting to check, from maybe a social science POV, of how many of these evals have a strange COI situation going on. Even if there's no bias towards any model, there is also a strange bias to \"hype grab\" by positioning oneself as the game master which has also many weird problems.\n\nThere is just no good way right now.",
      likes: 373,
      date: "May 20, 2023",
      url: "https://twitter.com/YiTayML/status/1659789514150387713"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1780395771625611264/QwLuxdRG_400x400.jpg",
      name: "Raj Dabre",
      username: "@prajdabre1",
      text: "Remember when I was bitching about how LLM based evaluation is sus? Well, you should read this paper to know exactly how sus it is. \n@sumanthd17 and @SafiKhan2k did a fantastic job of putting together these findings.",
      likes: 49,
      date: "Jun 21, 2024",
      url: "https://twitter.com/prajdabre1/status/1804024858960912741"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1707483618774556672/fjaZGawl_400x400.jpg",
      name: "Tessa",
      username: "@tessybarton",
      text: "LLM evals are a mess! They are noisy, inconsistent, and contradictory. Scaling laws on the other hand have consistently held up to increasing scrutiny. Can we use the reliability of scaling laws to predict the quality of our eval benchmarks?",
      likes: 236,
      date: "May 1, 2024",
      url: "https://twitter.com/tessybarton/status/1785776448126767524"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1677558976270180352/lJZNQUf8_400x400.jpg",
      name: "Sumanth",
      username: "@sumanthd17",
      text: "💔🗡️ Unreliable Evaluators.\n\nOur study reveals a stark reality: all prominent Evaluator LLMs demonstrate significant weaknesses. This unreliability spans across different evaluation strategies, raising concerns about their dependability!\n\n[5/N]",
      likes: 73,
      date: "Jun 21, 2024",
      url: "https://twitter.com/sumanthd17/status/1804021056321327573"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1677873294/image_400x400.jpg",
      name: "Nat Friedman",
      username: "@natfriedman",
      text: "We're gonna need some new benchmarks, fellas",
      likes: 1300,
      date: "Jun 20, 2024",
      url: "https://x.com/natfriedman/status/1803811362654630011"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1487154997691174912/jGs_Fl8u_400x400.jpg",
      name: "ServiceNow Research",
      username: "@ServiceNowRSRCH",
      text: "🔍 Current evaluation benchmarks for LLMs may be compromised due to potential data leakage into training or due to them covering well documented facts. Evaluation may be confounded by knowledge from pre-training, posing challenges in assessing performance. #RepLiQA #DataIntegrity",
      likes: 30,
      date: "Jun 18, 2024",
      url: "https://twitter.com/ServiceNowRSRCH/status/1803178740962451880"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1602686497433559043/PZ_ux0zV_400x400.jpg",
      name: "Grace Isford",
      username: "@graceisford",
      text: "4/ EVALUATION IS AN UNSOLVED PROBLEM\n-Difficult to evaluate whether or not an LLM responded accurately to prompt/answered question\n-Evaluation today has been qualitative/hand-wavy\n-Need a more quantitative, data-driven solution to evaluate LLMs",
      likes: 234,
      date: "Apr 11, 2023",
      url: "https://twitter.com/graceisford/status/1645817381749506048"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1572196716492750849/U6yxtgWT_400x400.jpg",
      name: "AndriyMulyar",
      username: "@andriy_mulyar",
      text: "LLM evaluations are hard.\n\nFind out how you should think about them and why you shouldn't trust leaderboards.",
      likes: 27,
      date: "Jun 26, 2023",
      url: "https://twitter.com/andriy_mulyar/status/1673187693654601728"
    },
    {
      img: "https://pbs.twimg.com/profile_images/939313677647282181/vZjFWtAn_400x400.jpg",
      name: "elvis",
      username: "@omarsar0",
      text: "In the context of LLMs, we are seeing more and more that simple average accuracy or metrics are not good enough to evaluate how good the system is on the task at hand. We have to carefully inspect the actual evaluated cases and document explanations of where the LLM improves things and where it fails. Are there general patterns and common failure cases? Judge LLM might be a great approach for this after all. LLM evaluation is a tough beast.",
      likes: 57,
      date: "Dec 18, 2023",
      url: "https://twitter.com/omarsar0/status/1736880664782291261"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1258245004444778496/T6_sLnIn_400x400.jpg",
      name: "Jason Phang",
      username: "@zhansheng",
      text: "LLM evaluations are a hot mess (as usual), but it's worth remembering that base-pretrained and chat-tuned/finetuned LLMs should be evaluated very differently. Keep in mind when reading eval numbers",
      likes: 22,
      date: "Mar 17, 2024",
      url: "https://twitter.com/zhansheng/status/1769469630861734115"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1715212547215802368/tqxfSqh3_400x400.jpg",
      name: "Cameron R. Wolfe, Ph.D.",
      username: "@cwolferesearch",
      text: "Due to massive improvements in LLM quality over the last few years, evaluating these models reliably and accurately is difficult. One of the most popular evaluation strategies is LLM-as-a-judge, which uses GPT-4 to evaluate model quality...\n\nAutomatic metrics: Previously, generative text models were most commonly evaluated using automatic metrics like ROUGE and BLEU, which simply compare how well a model's output matches a human-written target resopnse. In particular, BLEU score was commonly used to evaluatate machine translation models, while ROUGE was most often used for evaluating summarization models.\n\nSerious limitations: With modern LLMs, researchers began to notice that automatic metrics did a poor job of comprehensively capturing the quality of an LLM's generations. Oftentimes, ROUGE scores were poorly correlated with human preferences—higher scores don't seem to indicate a better generation/summary [1]. This problem is largely due to the open-ended nature of most tasks solved with LLMs. In many cases, there are a nearly infinite number of good responses to a prompt, so evaluating based on n-gram similarity to a target does not truly capture the quality of a response.\n\nLLM-as-a-judge [2] leverages a powerful LLM (e.g., GPT-4) to evaluate the quality of an LLM's output. To evaluate an LLM with another LLM, there are three basic structures or strategies that we can employ:",
      likes: 127,
      date: "Apr 22, 2024",
      url: "https://twitter.com/cwolferesearch/status/1782453549223321660"
    },
    {
      img: "https://pbs.twimg.com/profile_images/1749894223543832576/pPPu4jBC_400x400.jpg",
      name: "Noah Ziems",
      username: "@NoahZiems",
      text: "Don't Make Your LLM an Evaluation Benchmark Cheater\n\n* Benchmark leakage is increasingly becoming a problem for LLM eval.\n\nabs: https://arxiv.org/abs/2311.01964",
      likes: 8,
      date: "Nov 7, 2023",
      url: "https://twitter.com/NoahZiems/status/1721926789868474786"
    }
  ];
  

  return (
    <div>
      <div className="flex w-full h-[600px]">
        <div className="w-2/5">
          <div className="problem-section border-b border-[#1f1f1f] border-opacity-20 hover:border-opacity-100 duration-300 ease-in-out" style={hoveredProblem === 0 || hoveredProblem === -1 ? {opacity: 1} : {opacity: 0.3}} onMouseEnter={() => setHoveredProblem(0)} onMouseLeave={() => setHoveredProblem(-1)}>
            <h1 className="problem-header">Open Source Will Fail</h1>
            <div className="problem-description">
              GPT-4 achieved a <span className="font-extrabold">57%</span> exact match rate of the MMLU benchmark, predicting missing options <a href="https://arxiv.org/abs/2311.09783" target="_blank"><u>(paper)</u></a>. Open source evaluation benchmarks are quite dangerous
              for high risk use cases as they provide a false positive for LLM performance and reliability. Oddly enough, Patronus is one of few evaluation solutions that are closed source.
            </div>
          </div>
          <div className="problem-section border-b border-[#1f1f1f] border-opacity-20 hover:border-opacity-100 duration-300 ease-in-out" style={hoveredProblem === 1 || hoveredProblem === -1 ? {opacity: 1} : {opacity: 0.3}} onMouseEnter={() => setHoveredProblem(1)} onMouseLeave={() => setHoveredProblem(-1)}>
            <h1 className="problem-header">Research Focus &gt; Business Focus</h1>
            <div className="problem-description">
              This is first a research problem not a business problem. While other companies focus first on optimizing the business,
              sometimes in suspicious ways <a href="https://www.nytimes.com/2023/08/07/technology/ai-start-ups-competition.html" target="_blank"><u>(Arize AI snoops on Arthur AI)</u></a>, Patronus takes a research first approach setting it up for success.
            </div>
          </div>
          <div className="problem-section border-b border-[#1f1f1f] border-opacity-20 hover:border-opacity-100 duration-300 ease-in-out" style={hoveredProblem === 2 || hoveredProblem === -1 ? {opacity: 1} : {opacity: 0.3}} onMouseEnter={() => setHoveredProblem(2)} onMouseLeave={() => setHoveredProblem(-1)}>
            <h1 className="problem-header">Poor Public Benchmarks</h1>
            <div className="problem-description">
              Academic benchmarks aren't suited for every specific problem and use case.
              Top academic benchmarks like BLEU/ROUGE & F1 also have been shown to inaccurate when indexed against human evaluation <a href="https://arxiv.org/abs/2108.06130" target="_blank"><u>(paper)</u></a>. Patronus addresses real world use case problems (i.e. copyright & legal)
            </div>
          </div>
        </div>
        <div className="w-3/5 flex items-center justify-center h-full pl-12">
          {
            hoveredProblem === -1 ? (
              <div className="h-full">
                <TweetGrid tweets={tweets} />
              </div>
            ) : hoveredProblem === 0 ? (
              <ContaminationVisual />
            ) : hoveredProblem === 1 ? (
              <BarGraphs />
            ) : hoveredProblem === 2 ? (
              <img src={Correlation.src} alt="correlation" />
            ) : null
          }
        </div>
      </div>
    </div>
  );
}

