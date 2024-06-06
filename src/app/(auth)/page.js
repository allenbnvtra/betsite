import LoginForm from "@/components/ui/Login/LoginForm";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="h-full">
      <header>
        <div className="flex items-center justify-center md:justify-start">
          <Image src="/images/king.png" height={60} width={60} alt="" />
          <h1 className="italic text-2xl font-extrabold text-[#fccf00]">
            Minibets Agent
          </h1>
        </div>
      </header>

      <div className="xl:px-24 md:flex items-center justify-between mt-24 px-2 sm:mt-[5rem]">
        <div className="hidden md:block text-white">
          <h1 className="text-4xl font-medium">Welcome to Minibets</h1>
          <p className="text-md mt-1">
            The trusted and #1 online casino platform in the Philippines.
          </p>
        </div>

        <div className="sm:flex justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
