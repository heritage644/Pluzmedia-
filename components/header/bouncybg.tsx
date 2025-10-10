import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
export default function Bouncy (){
    const tl = gsap.timeline()
    useGSAP(()=>{
         tl.fromTo('.redbox',{
            y:-100,
            yoyo:true,
           opacity:1,
            duration:2,
            rotation:90,
           
            
        },{
              
            y:132,
            yoyo:true,
           opacity:1,
            duration:2,
            ease:'expo.in',
             
        
        }),
      
        tl.to(".redbox",{
            x:157,
            rotate:360,
            duration:3,
            ease:'back.inOut',
           

        })
          tl.to(".redbox",{
            x:159,
            rotation:10,
            duration:3,
            ease:'bounce.inOut',
           

        })

         
     
    })
    return(
        <>
        <section>
            <div className="bg-red-300 redbox left-46 top-2 lg:top-0 w-10 h-10 xl:left-203  lg:w-15 lg:h-15 z-200 text-white absolute "><Image
            src="/camera.png"
            alt="camera.logo"
            width={140}
            height={140}
            /> </div>
        </section>
        </>
    )


}