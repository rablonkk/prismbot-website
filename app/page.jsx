'use client';
import React from 'react';

import { fetchClientData } from '../lib/fetch-client-data';
import '../styles/globals.css';

export default function homePage() {
  const [data, setData] = React.useState({});
  (async() => setData(await fetchClientData()))();

  return (
    <>
      <html>
        <head>
          <meta name="description" content="If you are a music lover looking for a seamless music experience, Prism is definitely an ideal choice." />
        </head>
      </html>
      <main className="flex flex-col justify-center items-center mt-44">
        <div className="flex justify-center flex-col items-center">
          <span className="font-black text-7xl max-md:text-4xl text-center">
              The Best Music Bot Is
            <h1 style={{
              'background': '-webkit-linear-gradient(120deg, #24292F 20%, #FB029E 80%)',
              'WebkitBackgroundClip': 'text',
              'WebkitTextFillColor': 'transparent',
            }} className="font-black text-9xl max-md:text-6xl">PrismBot</h1>
          </span>
          <p className="text-center text-xl max-md:text-sm">If you are a music lover looking for a seamless music experience, Prism is definitely an ideal choice. </p>

          <button className="mt-10 pt-2 pb-2 pr-10 pl-10 bg-[#FB029E] rounded-3xl text-white font-semibold" style={{
            'background': '-webkit-linear-gradient(100deg, #52293a 30%, #FB029E 100%)',
          }}>
            <a href="https://discord.com/oauth2/authorize?client_id=1010005602480689243&scope=bot%20applications.commands">Add to your server!</a>
          </button>
        </div>
      </main>

      {data.topTracks && data.users && data.guilds && <ul className="mt-14 mb-10 w-full flex flex-wrap items-center justify-center gap-8">
        <li className="bg-[#F9F9F9] rounded-3xl h-26 w-72 px-3 py-5 shadow-lg">
          <h1 className="font-bold text-2xl mb-2">👤 Users</h1>
          <p className="text-1xl pl-5">+{(data.users).toLocaleString()}</p>
        </li>

        <li className="bg-[#F9F9F9] rounded-3xl h-42 w-72 px-3 py-5 shadow-lg">
          <h1 className="font-bold text-2xl mb-2">🔥 Trending songs</h1>
          {data.topTracks.map((el, i) => <p className="text-1xl pl-5" key={i}>{i + 1}. {el}</p>)}
        </li>

        <li className="bg-[#F9F9F9] rounded-3xl h-26 w-72 px-3 py-5 shadow-lg">
          <h1 className="font-bold text-2xl mb-2">👥 Guilds</h1>
          <p className="text-1xl pl-5">+{(data.guilds).toLocaleString()}</p>
        </li>
      </ul>
      }
    </>
  );
}
