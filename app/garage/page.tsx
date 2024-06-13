"use client"
import { useEffect } from "react";
import Head from "next/head"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Garage() {
    useEffect(()=> {
        AOS.init({
            duration:1200,
        })
    },[])
    return(
      <div className="min-h-screen bg-cover bg-no-repeat bg-center bg-slate-800">
      <Head>
        <title>Takumi Fujiwara Tribute</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className="content container mx-auto px-4 py-24 flex flex-col items-center justify-center">
        <img
          src="https://yt3.googleusercontent.com/wsHyzTadTE-l1LWnvPFmr_4m1B10fDmy2ri41wc3alq2cdwxPhlZ2RVbOdLPyr_RnPVLnxLC=s900-c-k-c0x00ffffff-no-rj"
          alt="Takumi Fujiwara"
          className="rounded-full w-40 h-40 mb-8 shadow-lg shadow-gray-700 aos-init aos-animate fade-up"
          data-aos="fade-up"
        />
        <h1 className="text-4xl font-bold text-white mb-4 aos-init aos-animate zoom-in" data-aos="zoom-in">
          Takumi Fujiwara
        </h1>
        <p className="text-xl text-white text-center aos-init aos-animate zoom-in" data-aos="zoom-in">
          The Drift King of Akina
        </p>
      </div>
        </div>
    )
}