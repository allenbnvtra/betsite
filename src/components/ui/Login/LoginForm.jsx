"use client";

import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ImSpinner3 } from "react-icons/im";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="relative rounded-lg bg-white px-4 py-12 sm:w-[28rem] sm:px-[4rem]">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white bg-opacity-75">
          <ImSpinner3 className="animate-spin text-3xl text-blue-800" />
        </div>
      )}
      <p className="mb-5 flex items-center justify-center text-xl font-medium text-slate-700">
        Sign In to your account
      </p>
      <form action="">
        <div className="mb-5 flex flex-col">
          <label className="pb-1 text-xs text-slate-800" htmlFor="username">
            Username
          </label>
          <div className="relative w-full">
            <input
              className="w-full rounded-md border border-slate-400 px-9 py-2 text-sm text-slate-800 focus:outline-none"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              disabled={isLoading}
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
              <FaRegUser className="text-lg text-slate-700" />
            </div>
          </div>
        </div>

        <div className="mb-2 flex flex-col">
          <label className="pb-1 text-xs text-slate-800" htmlFor="password">
            Password
          </label>
          <div className="relative w-full">
            <input
              className="w-full rounded-md border border-slate-400 px-10 py-2 text-sm text-slate-800 focus:outline-none"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              disabled={isLoading}
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
              <RiLockPasswordLine className="text-xl text-slate-700" />
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              {showPassword ? (
                <FaRegEye
                  className="cursor-pointer text-lg text-slate-700"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaRegEyeSlash
                  className="cursor-pointer text-lg text-slate-700"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          className="mt-6 w-full rounded-md bg-indigo-800 py-3 font-semibold text-white"
          onClick={() => setIsLoading(true)}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
