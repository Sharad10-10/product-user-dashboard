import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-[#182237] flex flex-col gap-4 w-[25%] h-[45%] p-8 rounded-xl">
        <div>
          <h1 className="text-center text-2xl font-semibold">Login</h1>
        </div>

        <div>
          <form className="flex flex-col gap-4">
            <label htmlFor="username">UserName</label>
            <input className='w-[full] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input className='w-[full] outline-none p-2 border rounded-xl border-[#2e374a]' type="password" name="password" />

            <button className='bg-[#2e374a] px-4 py-2 rounded-xl cursor-pointer'>Login</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
