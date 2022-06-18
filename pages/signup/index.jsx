import Head from 'next/head';
import Link from 'next/link';
import Input from '../../ui/components/Input/input';
import Button from '../../ui/components/Button/button';
import Header from '../../ui/components/Header';

export default function SignUp() {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center">
        <Head>
          <title>Sign up</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <form
          className="
         flex 
         flex-col
         h-97
         p-10
         rounded-2xl
         shadow-2xl
         bg-white
         md:w-1/4
         sm:w-1/2
         shadow-indigo-500/20
         mt-20
         "
        >
          <span className="mb-8 text-2xl font-medium" style={{ color: '#38487e' }}>
            Sign Up
          </span>

          <div className="relative">
            <div className="flex absolute top-3 left-0 items-center pl-4 pointer-events-none z-50 text-[#5053ff]">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <Input type="text" placeholder="Full Name" name="fullname" />
          </div>

          <div className="relative">
            <div className="flex absolute top-3 left-0 items-center pl-4 pointer-events-none z-50 text-[#5053ff]">
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
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <Input type="email" placeholder="Email" name="email" />
          </div>

          <div className="relative">
            <div className="flex absolute top-3 left-0 items-center pl-4 pointer-events-none z-50 text-[#5053ff]">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <Input type="password" placeholder="Password" name="password" />
          </div>

          <div className="relative">
            <div className="flex absolute top-3 left-0 items-center pl-4 pointer-events-none z-50 text-[#5053ff]">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <Input type="password" placeholder="Confirm Password" name="password" />
          </div>

          <Button type="submit" text="SIGN UP" />

          <span className="mt-12 text-center">
            Already a member?
            <Link href="/login">
              <a className="text-indigo-600 cursor-pointer hover:text-indigo-800 ml-2 underline font-medium">
                Sign In
              </a>
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}
