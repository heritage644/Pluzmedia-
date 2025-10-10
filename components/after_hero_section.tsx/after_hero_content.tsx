'use client'
/** *
 * After Hero section
 * 
 * THis section is been rendered in the oglmotion.tsx section around line 300
 * 
 * this section contains the goals of the items thanks
*/

import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react";
export default function AfterHero(){
    useGSAP(()=>{
        const titleSplit = SplitText.create('.classes',{type: 'words'})

     const timeline  = gsap.timeline({
           ease:'bounce.inOut'
        })
        timeline
        .from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            stagger:0.03,
            duration:1,
            transformOrigin:"50% 100% ",
            rotation:-90,
            ease:'back.out(1.7)'
            
        })
        .from('.classes',{
             opacity:0,
            yPercent:50,
            stagger:0.03,
            blur:10,
            duration:0.8,

            scale:0.8,
            

            
        }, "-=0.5")
    })
    
    return(
        <>
        <section className="text-white w-full relative h-fit top-50 flex justify-center items-center  bg-gradient-to-br from-red-600 to-red-900 pb-20 pt-20 flex-col items-center "id="lorem">
            <h1 className="w-80 text-center lg:text-[25px] lg:w-170 classes ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
        </section>
        </>
    )
}