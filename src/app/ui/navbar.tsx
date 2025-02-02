"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("post")) {
    return null;
  }
  return (
    <>
      <div className=" px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl text-white cursor-pointer">Next Js</h1>
          </Link>
          <div className="flex gap-3 items-center text-white">
            <Link href="/about"> About </Link>
            <Link href="/blog"> Blog </Link>
            <Link href="/contact"> Contact </Link>
            <Link href="/post"> Post </Link>
            <Link href="/terms"> Terms </Link>
            <Link href="/privacy"> Privacy </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
