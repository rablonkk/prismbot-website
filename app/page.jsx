'use client';
import React from 'react';

import '../styles/globals.css';

export default function homePage() {
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
          <p className="text-center text-xl max-md:text-sm w-2/3">Prism is an amazing music bot project that was created with the aim of offering users an unprecedented music experience. With the ability to play music from YouTube and SoundCloud, Prism becomes an indispensable tool for those who want to listen to the music they love without having to switch between different platforms.</p>

          <button className="mt-10 pt-2 pb-2 pr-10 pl-10 bg-[#FB029E] rounded-3xl text-white font-semibold" style={{
            'background': '-webkit-linear-gradient(100deg, #52293a 30%, #FB029E 100%)',
          }}>
            <a href="https://discord.com/oauth2/authorize?client_id=1010005602480689243&scope=bot%20applications.commands">Add to your server!</a>
          </button>
        </div>
      </main>
      <ul className="mt-16 mb-10 w-full flex flex-wrap items-center justify-center gap-8">
        <li className="bg-[#F9F9F9] rounded-3xl h-26 w-64 px-3 py-5 shadow-lg">
          <h1 className="font-bold text-2xl mb-2">👤 Users</h1>
          <p className="text-2xl pl-5">+200,000</p>
        </li>
        <li className="bg-[#F9F9F9] rounded-3xl h-26 w-64 px-3 py-5 shadow-lg">
          <h1 className="font-bold text-2xl mb-2">🤖 Interactions</h1>
          <p className="text-2xl pl-5">+600,000</p>
        </li>
        <li className="bg-[#F9F9F9] rounded-3xl h-26 w-64 px-3 py-5 shadow-lg">
          <h1 className="font-bold text-2xl mb-2">👥 Guilds</h1>
          <p className="text-2xl pl-5">+2,000</p>
        </li>
      </ul>
    </>
  );
}
