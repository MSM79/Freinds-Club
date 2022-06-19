import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button/button';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-[#5053ff]">
                Freinds Club
              </a>
            </Link>

            <button
              className="text-dark cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/login">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700">
                    <Button text="Sign in" width="100px" />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/signup">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700">
                    <button
                      type="button"
                      className="
                      bg-white
                      hover:text-slate-900
                      py-3 
                      rounded-lg 
                      cursor-pointer 
                      duration-200 
                      text-slate-500 
                      font-bold 
                      text-sm
                      w-24
                      "
                    >
                      Sign Up
                    </button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
