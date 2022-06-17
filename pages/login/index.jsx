import Head from 'next/head';
import Input from '../../ui/components/Input/input';
import Button from '../../ui/components/Input/button';

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Login </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <form
        className="
         flex 
         flex-col
         h-97
         p-10
         rounded-2xl
         shadow-xl
         bg-white
         md:w-1/4
         sm:w-1/2
         "
      >
        <span className="mb-8 text-2xl font-medium" style={{ color: '#38487e' }}>
          Sign In
        </span>
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Password" name="password" />

        <Button type="submit" text="SIGN IN" />
        <span className="mt-12 text-center">
          Dont have an account yet ?
          <a
            href="/signup"
            className="text-indigo-600 cursor-pointer hover:text-indigo-800 ml-2"
          >
            Sign Up
          </a>
        </span>
      </form>
    </div>
  );
}
