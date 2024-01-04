'use client';
/* eslint-disable no-nested-ternary */
import React from 'react';
import '../../styles/globals.css';

export default function socialPage() {
  const [profile, setProfile] = React.useState('rablon');

  return (
    <React.Fragment>
      <html>
        <head>
          <title>About | PrismBot</title>
          <meta name="description" content="" />
        </head>
      </html>
      <main className="w-full flex flex-col mt-12 mb-12 justify-center items-center">
          <h1 style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 32,
            marginTop: 32,
          }}>Who are we?</h1>
          <p style={{
            textAlign: 'center',
            fontWeight: 'normal',
            fontSize: 18,
            marginTop: 32,
            maxWidth: 600,
          }}>Prism is an amazing music bot project that was created with the aim of offering users an unprecedented music experience. With the ability to play music from YouTube and SoundCloud, Prism becomes an indispensable tool for those who want to listen to the music they love without having to switch between different platforms.</p>
          <p style={{
            textAlign: 'center',
            fontWeight: 'normal',
            fontSize: 18,
            marginTop: 32,
            maxWidth: 600,
          }}>With a user-friendly and intuitive interface, Prism is easy to use and offers a wide range of features such as custom playlists, advanced song search and playback controls. Additionally, the bot is capable of executing a variety of commands to customize the music experience, including the ability to skip tracks, rewind tracks, and even search for song lyrics.</p>
          <p style={{
            textAlign: 'center',
            fontWeight: 'normal',
            fontSize: 18,
            marginTop: 32,
            maxWidth: 600,
            marginBottom: 20
          }}>In short, Prism is a revolutionary project that offers an incredibly easy and fun way to listen to music on popular platforms like YouTube and SoundCloud. If you're a music lover looking for a seamless music experience, Prism is definitely an ideal choice.</p>
      </main>
    </React.Fragment>
  );
}
