"use client"
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


interface CharacterProps {
    name:string;
    img:string;
    title:string;
}

const Character: React.FC<CharacterProps> = ({name,img,title}) => {
    useEffect(() => {
        AOS.init({
            duration:1200,
        })
    },[])
    
    return(
        <div className="min-h-screen bg-cover bg-no-repeat bg-center">
        <Head>
          <title>{name}</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <div className="content container mx-auto px-4 py-24 flex flex-col items-center justify-center">
          <img
            src={img}
            alt={name}
            className="rounded-full w-40 h-40 mb-8 shadow-lg shadow-gray-700 aos-init aos-animate fade-up"
            data-aos="fade-up"
          />
          <h1 className="text-4xl font-bold text-white mb-4 aos-init aos-animate zoom-in" data-aos="zoom-in">
            {name}
          </h1>
          <p className="text-xl text-white text-center aos-init aos-animate zoom-in" data-aos="zoom-in">
            {title}
          </p>
        </div>
      </div>
       
    )
}

export default Character