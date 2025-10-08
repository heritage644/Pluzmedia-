'use client'
import Link from "next/link"
import Footer from "../../../../components/footer/footer"
import Lap from "../../../../components/header/array_for_nav"
import { useParams, useSearchParams } from "next/navigation"
export default function DashBoard(){
    const params = useParams()
    const searchParams = useSearchParams()
    const user= params.dynamicboard
    const study = searchParams.get("study")
    const Username = searchParams.get("Username")
    return(
        <>
       <main className="overflow-hidden text-black h-full ">
        <header className="bg-black h-30 flex items-center  pl-10 sticky  top-0 shadow-sm shadow-black ">
        <Lap/>
         <div >
            <h1 className="lg:text-[20px] xl:text-[20px] hidden sm:flex text-white font-bold">
                Welcome  <strong className="text-red-300"> {" "} {user} </strong>
              
            </h1>
           

        </div>
       </header>
       <section className="text-black bg-white flex items-center flex-col h-screen w-full items-center mt-10 ">
        <h1 className="text-[35px] sm:text-[55px] text-center">Allow <strong className="text-red-300">pluz</strong> make your marketing simpler for you today</h1>

     <div className="flex  flex-col gap-5  xl:mt-20  items-center  sm:flex-row">
       <div className="bg-white border hover:bg-zinc-200  hover:text-black h-50 w-70 sm:w-80 flex items-center flex-col rounded-lg pt-3 font-bold text-[25px] space-y-3 pl-2">
       <h1> Run Multi Ads</h1>
      <div className="text-[14px] sm:text-[16px]">
        <ul className="list-disc  "> 
            <li >Run ads across mulitple platforms</li>
            <li >Follow up with engaging Thumbnails</li>
            <li>Monitor analytics</li>
        </ul>
      </div>
       <div>
            <Link href="/" className="text-[20px] text-red-400 ">See Pricing</Link>
        </div>
       </div>
       <div className="bg-white border hover:bg-zinc-200  hover:text-black h-50 sm:w-80 w-70  flex items-center flex-col rounded-lg pt-3 font-bold text-[25px] space-y-3">
         <h1 className="text-black text-center">
            Social media visibility
         </h1>
          <div className="text-[14px] sm:text-[16px]">
        <ul className="list-disc">
            <li>Run ads across mulitple platforms</li>
            <li>Create engaging Texts-templates</li>
            <li>Monitor analytics</li>
        </ul>
        
       </div>
        <div className="">
            <Link href="/" className="text-[20px] text-red-400 ">See Pricing</Link>
        </div>
      </div>

      </div>
     

       </section>
     
<div className="bg-white sticky mb-0 bg-green-300 border-t border-gray-300">
     <Footer/>
</div>
       </main>
        
        </>
    )
}