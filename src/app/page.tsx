import RippleGrid from "../../components/oglmotion";
import Footer from "../../components/footer/footer";
import AfterHero from "../../components/after_hero_section.tsx/after_hero_content";
export default function Home() {
  return (
    <>
   <section className="bg-black ">
    <RippleGrid/>
    <div className="h-100">
     <AfterHero/>
    </div>
    <Footer/>
   </section>
    
    </>
  );
}
