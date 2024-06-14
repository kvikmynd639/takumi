"use client"
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Nav";
import LandingPage from "@/components/LandingPage";
import PickACar from "@/components/PickACar";
import AOS from 'aos';
import Head from "next/head";
import 'aos/dist/aos.css';
import driftImg from '../public/drifto.jpg'
import DCard from "@/components/Card";
import StageCard from "@/components/StageCard";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <>
      <div className="min-h-screen bg-cover bg-no-repeat bg-center">
        <header className="parallax">
          <div className="items-center flex justify-center min-h-screen bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
          <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white"
          data-aos="fade-down">
            No one sleep in <mark className="px-2 text-white bg-red-600 rounded dark:bg-red-500">Tokyo</mark> </h1>
          </div>
          <div className="p-10 h-full">
            <div className="flex flex-col md:flex-row justify-between gap-3" data-aos="zoom-in">
            <DCard
            name="Toyota Trueno AE86"
            img="https://m.media-amazon.com/images/I/61duTNyKEwL._AC_SL1500_.jpg"
            description="This is a sample card description."
            />
             <DCard
            name="Mitsubishi Lancer Evolution"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsysBSZxn5jytUb2kH69jHYjjijqF82b22g&s"
            description="This is a sample card description."
            />
             <DCard
            name="Mazda Rx7"
            img="https://images.thimbletoys.com/images/items/1480845b.jpg"
            description="This is a sample card description."
            />

            </div>
           
          </div>
        </header>
        
        <div 
        className="min-h-screen w-full justify-center items-center bg-sea2 bg-cover bg-no-repeat bg-fixed bg-center"
        data-aos="fade-up" data-aos-duration="2000">
           
        </div>
        
        {/*First non-img section*/}
        <div className="p-10 h-full">
           <div className="flex flex-col md:flex-row items-center">
            <div className="w-1/2">
              <img 
              src="https://images.fineartamerica.com/images/artworkimages/medium/3/akina-speed-stars-evelin-samuelsson-transparent.png"
              alt="akina"
              className="object-contain"
              />
            </div>
            <div className="w-1/2">
            <p className="text-justify font-semibold" data-aos="fade-right">Akina Speed Stars" is a fictional street racing team from the popular manga and anime series 
              "Initial D," created by Shuichi Shigeno. The series, which has gained a significant following since its debut 
              in 1995, focuses on the world of street racing in the mountainous regions of Japan.</p>

            </div>

           </div>
        </div>


        <div className="min-h-screen w-full justify-center items-center bg-cover bg-no-repeat bg-fixed bg-center bg-sea3"
         data-aos="fade-up" data-aos-duration="2000"
        >
        </div>
        <div className="p-10 h-full">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-1/2">
            <p className="text-justify font-semibold" data-aos="fade-right">The Myogi NightKids are based in Gunma Prefecture, primarily racing on the Myogi Mountain pass. They are known for their aggressive driving style and dedication to becoming the top street racing team in the region. The team is characterized by its competitive spirit and strong rivalry with other local racing teams, including the Akina Speed Stars and the Akina RedSuns.</p>
            </div>
            <div className="w-3/4 items-center justify-center">
              <img 
              src="https://m.media-amazon.com/images/I/61we3X1ZMtL.jpg"
              alt="akina"
              className="object-contain"
              />
            </div>

           </div>
        </div>

        <div className="min-h-screen w-full justify-center items-center bg-cover bg-no-repeat bg-fixed bg-right-top bg-mako"
         data-aos="fade-up" data-aos-duration="2000"
        >
        </div>

        <div className="p-10 h-full">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="w-3/4 items-center justify-center">
              <img 
              src="https://i.redd.it/1w7fzrch8o471.jpg"
              alt="akina"
              className="object-contain"
              />
            </div>
            <div className="w-1/2">
            <p className="text-justify font-semibold" data-aos="fade-right">The Akagi Red Suns is a renowned street racing team known for their expertise and dominance in mountain pass racing, based in the Gunma Prefecture, Japan. They primarily race on Mount Akagi and have earned a formidable reputation in the street racing community.</p>
            </div>
           </div>
        </div>

        <div className="min-h-screen w-full justify-center items-center bg-cover bg-no-repeat bg-fixed bg-right-top bg-keisuke"
         data-aos="fade-up" data-aos-duration="2000"
        >
        </div>

        <div className="p-10 h-full">
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-1/2">
            <p className="text-justify font-semibold" data-aos="fade-right">Project D is an elite street racing team formed by Ryousuke Takahashi in the "Initial D" series. The team's primary objective is to dominate the street racing scene by challenging and defeating the best local racers across various regions in Japan. Project D focuses on two main aspects: downhill racing and uphill racing, each helmed by a specialized driver</p>
            </div>
            <div className="w-1/2 items-center justify-center">
              <img 
              src="https://m.media-amazon.com/images/I/31mWr4VmN8L._AC_.jpg"
              alt="akina"
              className="object-contain"
              />
            </div>
           </div>
        </div>
        <div className="min-h-screen w-full justify-center items-center bg-cover bg-no-repeat bg-fixed bg-center bg-projectD"
         data-aos="fade-up" data-aos-duration="2000"
        >
        </div>

        <div className="p-10 h-full bg-black">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="w-3/4 items-center justify-center">
              <img 
              src="https://i.etsystatic.com/12773638/r/il/93ff30/2217361560/il_1080xN.2217361560_gb7i.jpg"
              alt="akina"
              className="object-contain"
              />
            </div>
            <div className="w-1/2">
            <p className="text-justify font-semibold text-white" data-aos="fade-right">The Sidewinder team is a formidable street racing group introduced in the "Initial D" series, specifically during the Fifth Stage. Known for their highly skilled drivers and advanced racing techniques, the Sidewinder team quickly establishes themselves as significant rivals to Project D, the elite team led by Ryousuke Takahashi.</p>
            </div>
           </div>
        </div>
        <div className="min-h-screen bg-center bg-no-repeat bg-fixed justify-center items-center bg-cover bg-sidewinder"
        data-aos="fade-up"
        >
        </div>


        <div className="p-10 h-full">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
            <div className="w-3/4">
            <p className="text-justify font-semibold" data-aos="fade-right">Impact Blue is a notable street racing team in the "Initial D" series, known for being an all-female team and featuring some of the most skilled drivers in the Gunma Prefecture. The team primarily races on the Usui Pass and has garnered significant respect and recognition in the street racing community for their talent and unique presence in a predominantly male-dominated scene.</p>
            </div>
            <div className="w-1/2 items-center justify-center">
              <img 
              src="https://ih1.redbubble.net/image.297868221.5664/st,extra_large,507x507-pad,600x600,f8f8f8.webp"
              alt="akina"
              className="object-contain"
              />
            </div>
           </div>
        </div>

        <div className="min-h-screen bg-center bg-no-repeat bg-fixed justify-center items-center bg-cover bg-impactBlue"
        data-aos="fade-up"
        >
        </div>

        





        <main className="p-5">
          <section id="red-suns" className="mb-10" data-aos="fade-left">
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
              <StageCard
              name="First Stage"
              description="Takumi Fujiwara battles opponents on Mount Akina."
              img="https://i.redd.it/b2wbf9g6k6121.jpg"
              />
              <StageCard
              name="Second Stage"
              description="Takumi Fujiwara battles opponents on Mount Akina."
              img="https://m.media-amazon.com/images/M/MV5BYzlmZDQxNmEtOTQyZS00M2VlLTgyNjYtYjg4MGNkNzVkNjdhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
              />
              <StageCard
              name="Third Stage"
              description="Takumi Fujiwara battles opponents on Mount Akina."
              img="https://resizing.flixster.com/iJrNV4tvUn1TAV2PDvdDwbTUHXU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8579520_v_h9_aa.jpg"
              />
              <StageCard
              name="Fourth Stage"
              description="Takumi Fujiwara battles opponents on Mount Akina."
              img="https://shahid.mbc.net/mediaObject/2021/AMREID/aa/Thump_Clean_INITIAL_D_4TH_STAGE/original/Thump_Clean_INITIAL_D_4TH_STAGE.jpg?height=360&width=480&croppingPoint=tc&version=1&type=webp"
              />
              <StageCard
              name="Fifth Stage"
              description="Takumi Fujiwara battles opponents on Mount Akina."
              img="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt2VVem8J3gJxR0V5vRIqgt219iKc1V-y35ke4zMbW0XDZX-mVXaMyiwp5PyEzZ0w4DJoxbex5e6QQ6lnuVrQjgclDdGU4qJl5ACBfaMk8Z0zX66CdQr2Jh6KwBzKqJ3T4bTMCgjpOjvyS/s1600/Screenshot+2014-08-14+20.19.41.png"
              />
              


            </div>
          </section>
        </main>
      </div>
    </>
  )
}

  