"use client"
import Image from "next/image"
import ae86Front from '/public/ae86-front.png'; // Example images
import ae86Side from '/public/ae86-side.png';
import ae86Drift from '/public/drift.jpg'
import ae86Back from '/public/ae86-back.png';
import ae86gal from '/public/ae86-back.webp'
import ae86gal2 from '/public/ae86-front.webp'
import ae86gal3 from '/public/ae86-side.webp'

import { useEffect } from "react";
import AOS from 'aos'

export default function Ae86() {
    useEffect(()=> {
        AOS.init({duration:1600})
    },[])

    return(
        <div className="bg-[#1D2B53] text-white">
        <section className="w-full h-auto" >
          {/*<h1 className="text-5xl font-bold mb-4 text-[#f8e71c]" style={{ textShadow: '0 0 10px #f8e71c' }}>
            Tribute to the AE86
          </h1>
           <p className="text-xl">Celebrating the legendary Toyota AE86 and Takumi Fujiwara's drifting skills</p>
          */}
          <img src="https://e1.pxfuel.com/desktop-wallpaper/786/757/desktop-wallpaper-night-japan-street-3840x2160-japanese-city-anime.jpg"
          className="object-cover w-full h-[25vw]"
          data-aos="fade-right"
          />
         
        </section>
  
        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
          data-aos="fade-left"
          >
            <Image src={ae86Front} alt="AE86 Front" width={500} height={300} className="rounded-lg shadow-lg" />
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">The Iconic AE86</h2>
              <p className="text-lg leading-relaxed">
                The Toyota AE86, also known as the "Hachiroku", is a lightweight and rear-wheel-drive sports car that
                became a cult icon thanks to its incredible performance and Takumi Fujiwara's drifting in the Initial D
                series. With its balanced chassis and responsive handling, the AE86 is a favorite among car enthusiasts.
              </p>
            </div>
          </div>
        </section>
  
        {/* History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center" data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4">History of the AE86</h2>
            <p className="text-lg mb-8 leading-relaxed">
              The AE86 was part of the fifth generation of the Toyota Corolla, produced between 1983 and 1987. Its
              lightweight design and rear-wheel-drive layout made it an ideal platform for racing and drifting. The car
              gained massive popularity through motorsport and the Initial D anime, where it was driven by the main
              character, Takumi Fujiwara.
            </p>
            <Image src={ae86Side} alt="AE86 Side" width={800} height={400} className="rounded-lg shadow-lg mx-auto" />
          </div>
        </section>
  
        {/* Gallery Section */}
        <section className="container mx-auto px-4 py-20" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">AE86 Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Image src={ae86gal} alt="AE86 Front" className="rounded-lg shadow-lg" />
            <Image src={ae86gal2} alt="AE86 Side" className="rounded-lg shadow-lg" />
            <Image src={ae86gal3} alt="AE86 Drift" className="rounded-lg shadow-lg" />
          </div>
        </section>
  
        {/* Drifting Section */}
        <section className="py-20" data-aos="zoom-in">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#00FFFF]" style={{ textShadow: '0 0 10px #00FFFF' }}>
              Takumi's Drifting
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Takumi Fujiwara, the main character of Initial D, showcases incredible drifting skills driving the AE86.
              From delivering tofu to racing on the mountain passes, Takumi's precision and control behind the wheel
              have made the AE86 legendary in the world of drifting.
            </p>
            <Image src={ae86Drift} alt="AE86 Drifting" width={800} height={400} className="rounded-lg shadow-lg mx-auto" />
          </div>
        </section>
  
        </div>
    )
}