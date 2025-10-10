'use client'
import Bouncy from "../../components/header/bouncybg";
import RippleGrid from "../../components/oglmotion";
import SplitTexts from "../../components/herosection/herotext";
import Footer from "../../components/footer/footer";
import Lap from "../../components/header/array_for_nav";
import AfterHero from "../../components/after_hero_section.tsx/after_hero_content";
import PropsRotateText from "../../components/herosection/props_rotating_text";
export default function Home() {


  return (
    <>
   <section className="bg-black min-h-screen">
    <Bouncy/>
  <section className='z-30 w'>
        <div className='flrx flex-col items-center'>
            <Lap/>
            <div className=' flex relative top-40 items-center justify-center '>
                <SplitTexts/>
            </div>
            <div className='items-center relative top-40  flex justify-center'>
               
                 <h1 className='text-white pr-2 text-[20px] md:text-[40px] font-bold'>Lets help you </h1> 
                  {" "} <PropsRotateText/>
              </div>
        </div>
        </section>
  
     <AfterHero/>
    
    <Footer/>
   </section>
    
    </>
  );
}
