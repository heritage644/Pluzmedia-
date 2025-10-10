import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function  SplitTexts(){
useGSAP(()=>{
    const heroSplit =new SplitText('.title',{type:'chars,words'})
    heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'))

gsap.fromTo(heroSplit.chars,{
opacity:0,
y:100,



},

{
opacity:1,
y:0,
stagger:0.05,
ease:'power3.out',
});
})
    return(
        <>
        <section className="items-center flex justify-center mt-0 ">
            <h1 className="text-white font-bold text-[50px] md:text-[70px] lg:text-[80px] title">{`PLUZ MEDIA`}</h1>
        </section>
        </>
    )
}       