"use client"
import { useEffect } from "react"
import CarScene from "@/components/CarScene"
import NissanS13Scene from "@/components/NissanS13Scene"
import AOS from 'aos'
import MazdaScene from '@/components/MazdaScene'
import SileightyScene from '@/components/SileightyScene'

export default function CarModels() {
    useEffect(()=> {
        AOS.init({duration:1400})
    },[])

    return(
        <div className="w-full h-full flex flex-col">
           <div className="w-full h-screen py-6 flex flex-col md:flex-row px-4">
                <div className="w-full flex items-center justify-center"> {/* Adjusted classes here */}
                        <CarScene/>
                </div>
            <div className="w-full md:w-1/2 flex items-center justify-center text-justify font-bold"
            data-aos="fade-right"
            > {/* Adjusted classes here */}
               <p>The Toyota Trueno AE86, especially in its iconic Panda color scheme, holds a legendary 
                status among automotive enthusiasts worldwide. Produced in the mid-1980s, the AE86, part of Toyota's Corolla Levin lineup, gained fame primarily due to its exceptional handling characteristics 
                and lightweight design, making it a favorite in motorsports and popular culture alike..</p>
    </div>
</div>

        <div className="w-full h-screen py-6 flex flex-col md:flex-row px-4">
            <div className="w-full md:w-1/2 flex items-center justify-center text-justify font-bold"
            data-aos="fade-right"
            > {/* Adjusted classes here */}
               <p>The Toyota Trueno AE86, especially in its iconic Panda color scheme, holds a legendary 
                status among automotive enthusiasts worldwide. Produced in the mid-1980s, the AE86, part of Toyota's Corolla Levin lineup, gained fame primarily due to its exceptional handling characteristics 
                and lightweight design, making it a favorite in motorsports and popular culture alike..</p>
                    </div>


                <div className="w-3/4 flex items-center justify-center">
                <NissanS13Scene/>
                </div>
                
            </div>
            <div className="w-full h-screen py-6 flex flex-col md:flex-row px-4">
                <div className="w-full flex items-center justify-center"> {/* Adjusted classes here */}
                        <MazdaScene/>
                </div>
            <div className="w-full md:w-1/2 flex items-center justify-center text-justify font-bold"
            data-aos="fade-right"
            > {/* Adjusted classes here */}
               <p>The Toyota Trueno AE86, especially in its iconic Panda color scheme, holds a legendary 
                status among automotive enthusiasts worldwide. Produced in the mid-1980s, the AE86, part of Toyota's Corolla Levin lineup, gained fame primarily due to its exceptional handling characteristics 
                and lightweight design, making it a favorite in motorsports and popular culture alike..</p>
    </div>
</div>

<div className="w-full h-screen py-6 flex flex-col md:flex-row px-4">
            <div className="w-full md:w-1/2 flex items-center justify-center text-justify font-bold"
            data-aos="fade-right"
            > 
               <p>The Toyota Trueno AE86, especially in its iconic Panda color scheme, holds a legendary 
                status among automotive enthusiasts worldwide. Produced in the mid-1980s, the AE86, part of Toyota's Corolla Levin lineup, gained fame primarily due to its exceptional handling characteristics 
                and lightweight design, making it a favorite in motorsports and popular culture alike..</p>
                    </div>


                <div className="w-3/4 flex items-center justify-center">
                <SileightyScene/>
                </div>
                
            </div>


        </div>
    )
}