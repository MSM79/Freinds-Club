import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Button from '../Button/button';
import Search from '../Search/search';
import User from '../user/user';
import classNames from 'classnames';

export default function Navbar({ fixed }) {
  const dispatch = useDispatch();
  const [users, search] = useSelector((state) => [state.user, state.search]);
  let filteredUser = [];

  if (search !== '') {
    filteredUser = users.filter((d) => d.username.includes(search));
  }

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex items-center ">
          <div className="w-full relative lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-[#5053ff]">
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
          <div className="w-full flex search">
            <Search />
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
        <div className="absolute left-[34%] top-[87px] w-[370px] h-[300px] overflow-y">
          {filteredUser.map((user) => (
            <div key={`user-${user.id}`}>
              <Link href={`/user/${encodeURIComponent(user.username)}`}>
                <a>
                  <User name={user.name} username={user.username} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
