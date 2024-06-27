import React from 'react';
import '../styles/tweetgrid.css';

interface Tweet {
  img: string;
  name: string;
  username: string;
  text: string;
  likes: number;
  date: string;
  url: string;
}

interface TweetGridProps {
  tweets: Tweet[];
}

export default function TweetGrid({ tweets }: TweetGridProps) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  const openTweet = (url: string) => {
    window.open(url, '_blank');
  };

  const renderTweets = (startIndex: number, endIndex: number) => {
    return (
      tweets.slice(startIndex, endIndex).map((tweet) => (
        <div className="tweet-container">
          <div className="tweet" onClick={() => openTweet(tweet.url)}>
            <svg className="w-[18px] h-[18px] absolute right-3 top-3" xmlns="http://www.w3.org/2000/svg" fill="#1DA1F2" viewBox="0 0 24 24" stroke="none">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <div className="flex items-center gap-2 w-full">
              <img src={tweet.img} alt="profile" className="w-[42px] h-[42px] rounded-full" />
              <div className="flex flex-col w-full">
                <p className="font-bold leading-none max-w-[85%]">{tweet.name}</p>
                <p className="text-sm font-semibold text-[#6b7280] max-w-[85%] text-ellipsis overflow-hidden whitespace-nowrap">{tweet.username}</p>
              </div>
            </div>
            <p className="text-sm">{truncateText(tweet.text, 120)}</p>
            <div className="flex gap-4 text-sm text-[#6b7280] font-semibold items-center">
              <div className="flex items-center gap-1">
                <svg viewBox="0 0 24 20" aria-hidden="true" className="w-[16px] h-[16px]" fill="#6b7280">
                  <g>
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </g>
                </svg>
                <p>{tweet.likes}</p>
              </div>
              <p>{tweet.date}</p>
            </div>
          </div>
        </div>
      ))
    );
  };

  return (
    <div className="tweets-container">
      <div className="column [mask-image:_linear-gradient(transparent,_black_64px,_black_calc(100%-64px),transparent)]">
        <div className="column-inner column-odd">
          {renderTweets(0, 4)}
        </div>
        <div className="column-inner column-odd">
          {renderTweets(0, 4)}
        </div>
      </div>
      <div className="column [mask-image:_linear-gradient(transparent,_black_64px,_black_calc(100%-64px),transparent)]">
        <div className="column-inner column-even">
          {renderTweets(4, 8)}
        </div>
        <div className="column-inner column-even">
          {renderTweets(4, 8)}
        </div>
      </div>
      <div className="column [mask-image:_linear-gradient(transparent,_black_64px,_black_calc(100%-64px),transparent)]">
        <div className="column-inner column-odd">
          {renderTweets(8, 13)}
        </div>
        <div className="column-inner column-odd">
          {renderTweets(8, 13)}
        </div>
      </div>
    </div>
  );
};