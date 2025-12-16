"use client"
import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";



const Login = () => {
  const router = useRouter();
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const clearInputs = ()=> {
    setUserName(""),
    setPassword(""),
    setError("")
  }

  const handleUserNameChange = e => setUserName(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleSubmit = async(e)=> {
    e.preventDefault()
    signIn("credentials", {
      username,
      password,
      redirect: false
    }).then(res=> {
      if(res.error) {
        setError(res.error)
      }
      else {
        clearInputs()
        router.push('/dashboard')
      }
    })
    .catch(e => console.log(e))
  }


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-[#182237] flex flex-col gap-4 w-[25%] h-[60%] p-8 pt-10 rounded-xl">
        
      <div>
          <h1 className="text-center">This is a sample dashboard project.</h1>
          <h1 className="text-center">Please use following credentials to login</h1>
          <p className="text-center font-bold pt-4">Username: user</p>
          <p className="text-center font-bold">Password: password</p>
        </div>

        <div>
          <h1 className="text-center text-2xl font-semibold">Login</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="username">UserName</label>
            <input onChange={handleUserNameChange} className='w-[full] outline-none p-2 border rounded-xl border-[#2e374a]' value={username} type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input onChange={handlePasswordChange} className='w-[full] outline-none p-2 border rounded-xl border-[#2e374a]' value={password} type="password" name="password" />

            <button className='bg-[#2e374a] px-4 py-2 rounded-xl cursor-pointer'>Login</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
