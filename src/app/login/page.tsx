'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function LoginPage(){
    const router = useRouter()

 const newUser = "John"
    const study = "Web Development"
    const Username = "bigHeritage"
function clicker(e:any){
    e.preventDefault()
    router.push(`/login/${newUser}`)
}

    return(
        <>
        <section>
             
            <div className="bg-white flex flex-col items-center justify-center h-screen text-black ">
               <div className="absolute " >
                    <h1 className="text-black text-[300px] relative ">
                        PLUZ MEDIA
                    </h1>

                </div>

              <div className="backdrop-blur-xl bg-transparent h-screen w-full flex items-center justify-center">
                  <form action="" className="flex z-100 rounded-lg bg-red-300 flex-col items-center xl:px-50 sm:px-20 w-fit px-20 h-130 pt-20 gap-10 ">
                  <div className="flex flex-col">
                      <label htmlFor="" className="text-[20px]">E-mail</label>
                    <input type="email" className="bg-white focus:outline-none pl-2 rounded-full"  />
                  </div>
 
                    <div className="flex flex-col">
                         <label htmlFor=""  className="text-[20px]">Username</label>
                    <input type="text" className="bg-white focus:outline-none pl-2 rounded-full"  />
                    </div>

                   <div className="flex flex-col">
                      <label htmlFor=""  className="text-[20px]">Password</label>
                    <input type="password" className="bg-white focus:outline-none pl-2 rounded-full" />

                   </div>
                    <div className="w-full items-center flex flex-col justify-center space-y-2">
                    <button className="bg-white p-2 rounded-xl hover:bg-black hover:text-red-300  "onClick={clicker}> 
                        Sign up
                    </button>
                <div className="  ">
                    <h1>
                        Already a User? {" "} <Link href="/signup" className="font-bold">Log in</Link>

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