"use client"
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Nav";
import LandingPage from "@/components/LandingPage";
import PickACar from "@/components/PickACar";
import AOS from 'aos';
import Head from "next/head";
import 'aos/dist/aos.css';




export default function Home() {
  useEffect(() => {
    AOS.init({
      duration:1200,
    })
  },[])
  return (
    <>
      <div className="min-h-screen bg-cover bg-no-repeat bg-center">
      
    </div>
     

    </>
  );
}
