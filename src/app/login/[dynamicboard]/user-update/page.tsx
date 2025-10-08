'use client'
import { MdPerson } from "react-icons/md"
import { useParams } from "next/navigation"
import Lap from "../../../../../components/header/array_for_nav"
export default function UserUpdate(){
    const params = useParams()
  const newUser= params.dynamicboard
    return(
        <>
       
        <section className=" h-screen  ">
             <Lap/>
           <section className="flex  flex-col items-center justify-center mt-25 space-y-10 ">

             <button className="border p-10 rounded-full hover:bg-zinc-300 border-red-200 ">
                <MdPerson size={100} className=" "/>
             </button>
             <div>
                <div>
                    <h1 className="font-bold text-[25px]">Modify your data </h1>
                </div>
             </div>
             <div>
                
               
                        <form action=""className="">
                            <li className="list-none " >
                                
                                <input type="text" placeholder={`${newUser}`} className="focus:outline-none font-bold"/>
                            </li>
                        </form>
               
             </div>

           </section>

        </section>
        </>
    )
}