"use client";

import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import Link from "next/link";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <section className="sticky left-0 top-0 !h-screen w-[18rem] bg-slate-50">
      <nav className="flex h-full flex-col items-center justify-between border px-2 py-5 shadow-lg">
        <div className="w-full">
          <Link
            href="/dashboard"
            className="flex cursor-pointer items-center overflow-hidden pb-6"
          >
            <Image src="/images/king.png" alt="" height={60} width={60} />
            <h1 className="text-xl font-bold italic text-slate-800">
              Minibets PH
            </h1>
          </Link>

          {/* Navigation Items */}
          <NavItems />
        </div>

        {/* Profile or user bar */}
        <Profile />
      </nav>
    </section>
  );
};

export default Sidebar;
