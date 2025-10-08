'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Signup (){
    const router = useRouter()
    function clicker(e:any){
        e.preventDefault()
        const newUser = 'BigHeritage'
       router.push(`/login/${newUser}`)
    }

    
    return (
        <>
              <section>
            <div className="bg-white flex flex-col items-center text-black justify-center h-screen overflow-y-hidden">
                 <div className="absolute " >
                    <h1 className="text-black text-[300px] relative ">
                        PLUZ MEDIA
                    </h1>

                </div>
               <div className="z-100 w-full items-center flex justify-center backdrop-blur-xl inset-0  h-full ">
                 
                <form action="" className="flex bg-red-300 flex-col items-center  xl:px-50 sm:px-20 w-fit px-20 h-130 pt-20 gap-10 ">
                  <div className="flex flex-col">
                      <label htmlFor="" className="text-[20px]">Username</label>
                    <input type="text" className="bg-white focus:outline-none rounded-full"  />
                  </div>

                   <div className="flex flex-col">
                      <label htmlFor=""  className="text-[20px]">Password</label>
                    <input type="password" className="bg-white focus:outline-none rounded-full" />

                   </div>
                    <div className="w-full items-center flex flex-col justify-center space-y-2">
                    <button className="bg-white p-2 rounded-xl px-4" onClick={clicker}> 
                        Login
                    </button>
                <div className="">
                    <h1>
                        Not a User? <Link href="/login" className="font-bold">Register here</Link>
                    </h1>
                </div>
                   </div>
                  
                </form>
               </div>
                
            </div>
        


        </section>
        </>
    )
}