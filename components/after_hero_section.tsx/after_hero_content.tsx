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
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

export default function AfterHero(){

    useGSAP(()=>{
        const titleSplit = SplitText.create('.classes',{type: 'words'})

     const timeline  = gsap.timeline({
        scrollTrigger:{
            trigger:'#lorem',
            start:'top center'

        },
           ease:'power1.inOut'
        })
        timeline
        .from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            stagger:0.05,
            
        })
        .from('.classes',{
             opacity:0,
            yPercent:100,
            stagger:0.05,
            
        })
    })
    
    return(
        <>
        <section className="text-white w-full flex justify-center items-center "id="lorem">
            <h1 className="w-100 text-center lg:text-[25px] lg:w-170 classes ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum."
            </h1>
        </section>
        </>
    )
}