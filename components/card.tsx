import React from 'react';
import '../styles/card.css';

interface CardProps {
  cardNumber: number;
}

export default function Card({cardNumber}: CardProps) {
  const headers: string[] = ["Founding engineer @acquired medical LLM copilot startup", "Previous founder in gen AI space", "P Pop Up"]
  const descriptions: string[] = [
    "I built the initial product with Typescript, iterating on features based on customer feedback and handling deployments to AWS. More examples of my work: prevented LLM outputs from attributing incorrect context references to a response & handled short circuiting boolean operations on medical insurance claim criterias.",
    "Reached out to ~200 founders and user researchers, hearing pain points from 23 to then iterate on the product with 2 customers. Designed and built a Chrome extension, Slack bot, and website application with file uploading and cross-functional search, using langchain and FAISS for RAG with OpenAI's text-embedding-ada-002.",
  ]
  const rocketIcon = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="24"  viewBox="0 0 16 16">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="var(--gradient-color--purple)" />
            <stop offset="100%" stop-color="var(--gradient-color--blue)" />
          </linearGradient>
        </defs>
        <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" fill="url(#gradient)"/>
        <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925" fill="url(#gradient)"/>
      </svg>
    )
  }
  const starsIcon = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="24"  viewBox="0 0 16 16">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="var(--gradient-color--purple)" />
            <stop offset="100%" stop-color="var(--gradient-color--blue)" />
          </linearGradient>
        </defs>
        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" fill="url(#gradient)"/>
      </svg>
      
    )
  }
  const orgIcon = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="24"  viewBox="0 0 16 16">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="var(--gradient-color--purple)" />
            <stop offset="100%" stop-color="var(--gradient-color--blue)" />
          </linearGradient>
        </defs>
        <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z" fill="url(#gradient)"/>
      </svg>
      
    )
  }

  return (
    <div className="card">
      {
        cardNumber === 0 ? rocketIcon() : cardNumber === 1 ? starsIcon() : orgIcon()
      }
      <h1 className="card-header">{headers[cardNumber]}</h1>
      {
        cardNumber === 2 ?
        <div>
          Rallied up <u>5 full time students</u> for a restaurant pop up idea. 
          After powering through a cease and desist, I led the team from <u>university pop ups</u> to catering and <u>hosting services at a restaurant</u> with our <u>own menus</u>. 
          Starting with nothing, we made $9,216.44 and the team is now up to 39 with subteam heads I personally mentored.
        </div>
        :
        <div>{descriptions[cardNumber]}</div>
      }
    </div>
  );
};