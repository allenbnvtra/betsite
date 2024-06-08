import LoginForm from '@/components/ui/Login/LoginForm';
import Image from 'next/image';
import React from 'react';

const Login = () => {
  return (
    <div className="h-full">
      <header>
        <div className="mt-10 flex items-center justify-center md:mt-0 md:justify-start">
          <Image src="/images/king.png" height={60} width={60} alt="" />
          <h1 className="text-2xl font-extrabold italic text-[#fccf00]">
            Minibets Agent
          </h1>
        </div>
      </header>

      <div className="mt-24 items-center justify-between px-2 sm:mt-[5rem] md:flex xl:px-24">
        <div className="hidden text-white md:block">
          <h1 className="text-4xl font-medium">Welcome to Minibets</h1>
          <p className="text-md mt-1">
            The trusted and #1 online casino platform in the Philippines.
          </p>
        </div>

        <div className="justify-center sm:flex">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
