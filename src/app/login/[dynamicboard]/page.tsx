'use client'
import Link from "next/link"
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
       <main>
        <header className="bg-black h-30 flex items-center  pl-10 sticky  top-0 shadow-sm shadow-black">
        <Lap/>
         <div >
            <h1 className="lg:text-[20px] xl:text-[20px]  text-white font-bold">
                Welcome <span className="text-red-300">{user}</span>
            
            </h1>
           

        </div>
       </header>
       <section className="text-blck flex items-center flex-col h-screen w-full items-center mt-10 ">
        <h1 className="text-[55px]">Allow <strong className="text-red-300">pluz</strong> make your marketing simpler for you today</h1>
     <div className="flex space-x-3 mt-10">
       <div className="bg-white border hover:bg-zinc-200  hover:text-black h-50 w-80 flex items-center flex-col rounded-lg pt-3 font-bold text-[25px] space-y-3 pl-2">
       <h1> Run Multi Ads</h1>
      <div className="text-[16px]">
        <ul className="list-disc">
            <li>Run ads across mulitple platforms</li>
            <li>Follow up with engaging Thumbnails</li>
            <li>Monitor analytics</li>
        </ul>
      </div>
       <div>
            <Link href="/" className="text-[20px] text-red-400 ">See Pricing</Link>
        </div>
       </div>
       <div className="bg-white border hover:bg-zinc-200  hover:text-black h-50 w-80 flex items-center flex-col rounded-lg pt-3 font-bold text-[25px] space-y-3">
         <h1 className="text-black text-center">
            Social media visibility
         </h1>
          <div className="text-[16px]">
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
      <div className="mt-20 bg-red-300 w-full h-70 flex items-center flex-col">
        <h1 className="text-[30px] font-bold">More about us</h1>
         <h1 className=" text-start lg:text-[20px] s pl-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              borum.
            
            </h1>
      </div>

       </section>

       </main>
        </>
    )
}