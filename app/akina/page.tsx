"use client"
import Character from "@/components/Character";
import AOS from "aos";
import {useEffect} from "react";
import CarScene from '@/components/CarScene';
import NissanS13Scene from '@/components/NissanS13Scene'


export default function Akina() {
    useEffect(()=> {
        AOS.init({duration:1400})
    },[])

    return (
        <div className="w-full h-full relative flex flex-col p-4 bg-[#7E2553]">
            <div className="w-full h-screen flex flex-col mx-auto">
                <div className="mx-auto my-auto items-center justify-center text-center" data-aos="zoom-in-down">
                    {/*<h1 className="text-8xl text-center font-semibold text-slate-100 items-center justify-center">Initial Ds</h1>*/}
                    <img
                    src="https://preview.redd.it/x7wxbh6kao471.png?width=640&crop=smart&auto=webp&s=6931b99d82e0374b7283d4c2a1dbf855cdaac3c1"

                    />
                </div>

            </div>
            <Character name="Takumi Fujiwara" img="https://yt3.googleusercontent.com/wsHyzTadTE-l1LWnvPFmr_4m1B10fDmy2ri41wc3alq2cdwxPhlZ2RVbOdLPyr_RnPVLnxLC=s900-c-k-c0x00ffffff-no-rj"
            title="The best driver of Akina"/>

            <Character name="Bunta Fujiwara" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvA7kYwB-ynKSeSkV45JHZqBfp7shFt9zjA&s"
            title="Takumi's dad and former best driver"/>

            <Character name="Koichiro Iketani" 
            img="https://www.hlj.com/productimages/aos/aos05964_4.jpg"
            title="Confused one"/>

            <Character name="Keisuke Takahashi" 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuqgg7Sx957t_3MA4REpUiOiyhjfnDXiDAw&s"
            title="The best driver of Akina"/>
            
            
        </div>
    );
}