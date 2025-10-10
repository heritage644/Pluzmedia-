'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { FormEvent, useState } from "react"
import { getSupabaseClient } from "@/supabase-client";
import { useRouter } from "next/navigation"
export default function LoginPage(){
    const router = useRouter()
    const [emailSent, setEmailSent] = useState("")

    const [password, setPassword] = useState("Email sent")
   
    const [email, setEmail] = useState("")
    const [chechSent, setCheckSent] = useState(false)



    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
e.preventDefault()

   const supabase = getSupabaseClient();
   if(!supabase){
    console.log("supabase not available yet")
    return;
   }
    const {error, data :authData} = await supabase.auth.signUp({email, password})
    

    if (error) {
        console.log(error.message, "an error occured sigining up")
       setEmailSent("❌ wrong Credentials")
         setCheckSent(true)
          setTimeout(()=>{
   setEmailSent("")
    setCheckSent(false)
     },2000)
        return;
       
    }
     setCheckSent(true)
    setEmailSent("✅ Check your email for verification")
      setTimeout(()=>{
 setCheckSent(false)
    setEmailSent("")
     },2000)
    

     setTimeout(()=>{
 router.push("/signup")
     },2000)
return
    }
 
   

    return(
        <>
        <section className="min-h-screen bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center p-5 "> 
           {chechSent ? <div className="fixed top-20 bg-white px-6 py-4 rounded-xl shadow-2xl flex items-center justify-center
           z-50
           ">
               <div className="flex bg-white  rounded-lg relative   text-center z-100 p-5"> 
                 {emailSent}
               </div>
            </div> :null}
          
            <div className="bg-white rounded-3xl shadow-2xl max-w-md flex flex-col space-y-20 items-center pt-10 justify-start text-black ">

              <div className=" text-black flex items-center flex-col space-y-3">
                <h1 className="font-bold text-gray-800 text-[25px] lg:text-[35px]" ><strong className="text-red-400">Pluz </strong>Media</h1>
                <p className="text-center text-gray-500 w-50 lg:w-100 lg:text-[20px]">Sign Up with us today and experience premium services</p>
            </div>
             

              <div className=" w-full flex items-center flex-col justify-center">
                  <form  onSubmit={handleSubmit}  className="flex  flex-col items-center xl:px-50 sm:px-20 w-fit px-20   gap-15 ">

                  <div className="flex flex-col">
                      <label htmlFor=""className="text-[16px]">E-mail</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl  border-2 border-gray-200 text-sm focus:border-red-600 pl-2 transition-all  lg:w-70 " 
                    onChange={(e)=>{
                        setEmail( e.target.value)

                    }}
                    placeholder="your@email.com"
                    />
                  </div>
 
                   <div className="flex flex-col">
                      <label htmlFor=""  className="text-[16px]">Password</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl  border-2 border-gray-200 text-sm focus:border-red-600 pl-2 transition-all lg:w-70"
                    onChange={(e)=>{
                        setPassword(e.target.value)

                    }}
                    />

                   </div>
                    <div className="w-full items-center flex flex-col justify-center space-y-4 pb-3">
                    <motion.button 
                      whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
                    className="bg-white border-1 border-black  p-2 rounded-xl hover:bg-red-600 hover:text-white " type="submit"> 
                        Sign up
                    </motion.button>
                <div className="text-black ">
                    <h1>
                        Already a User? {" "} <Link href="/signup" className="font-bold text-red-600">Log in</Link>

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