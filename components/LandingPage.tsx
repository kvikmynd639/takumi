"use client"
import Head from 'next/head';
import { useEffect, useState } from 'react';
import CarButton from './misc/CarBtn';

const gifs = [
  'https://i.pinimg.com/originals/da/3f/9e/da3f9e8270a5453f98f0830aaf6cf852.gif',
  'https://i.pinimg.com/originals/83/18/af/8318af2e30c4ae73e45ae011076ae75e.gif',
  'https://i.pinimg.com/originals/4b/e3/63/4be363fdcd308233ba22777c794a4a23.gif',
  'https://gifdb.com/images/high/initial-d-white-car-fmig87d8t1zyh7fj.gif',
  'https://gifdb.com/images/high/initial-d-anime-driving-moves-1mmonqsx3ox2nw58.gif',
  'https://media1.tenor.com/m/maJbrhT-UUUAAAAC/initial-d-fifth-stage.gif',
  'https://gifdb.com/images/high/initial-d-takumi-fujiwara-driving-fast-gip3hlahmyp0kzul.gif',
  'https://static.wikia.nocookie.net/initiald/images/1/13/Hideo_Minagawa_forfeits_from_the_battle.gif/revision/latest/scale-to-width-down/520?cb=20210801111954'
];

const LandingPage = () => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Head>
        <title>Your Landing Page Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute inset-0 z-0">
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt={`background-${index}`}
            className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
              index === currentGifIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ハチロクのドライバー</h1>
        <p className="text-lg md:text-xl">prod by Dave Rodgers</p>
        <div className="mt-8">
        <CarButton>Start Racing</CarButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
