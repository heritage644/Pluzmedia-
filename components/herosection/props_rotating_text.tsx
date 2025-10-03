import RotatingText from "./rotating_hero_text"
  
export default function PropsRotateText(){

    return(
        <>
        <RotatingText
  texts={['Market', 'Publish', 'Control', 'Establish' ,'Grow', 'Magnify']}
  mainClassName="px-2 sm:px-2 md:px-3 font-bold bg-white text-[20px] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
        </>
    )
}