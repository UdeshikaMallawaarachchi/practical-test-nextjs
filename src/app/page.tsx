'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/auth';
import Input from './components/Input';
import Image from 'next/image';
import bgImage from '../Images/banner-image.png';
import logoImage from '../Images/LOGO.png';
import { FcGoogle } from "react-icons/fc";


export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); //add loading state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); //start loading

    setTimeout(() => {
      if (email === 'test@visionexdigital.com.au' && password === 'password123') {
        login();
        router.push('/dashboard');
      } else {
        alert('Invalid credentials');
      }
      setLoading(false); //stop loading
    }, 1000); //optional delay to simulate API
  };

  return (
    <section className="flex h-screen items-center justify-center bg-black">
      {/* <div className="flex w-full rounded-2xl overflow-hidden"> */}
        {/* Left: Form */}
        <div className="flex flex-col justify-center w-1/2 bg-black text-white px-10">
          <div className="mb-6 px-10">
            <Image
              src={logoImage}
              alt="Room.me Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center px-10 py-12 space-y-4"
          >
            <h2 className="text-3xl font-bold mb-2">Welcome back to Room.me!</h2>
            <p className="text-sm text-gray-300 mb-6">
              Room.me is an innovative video conference product that revolutionizes virtual meetings.
            </p>


            <Input label="Email address" type="email" value={email} placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
            >
              {loading ? 'Signin in...' : 'Sign In'}
            </button>

            <button className="bg-white text-black w-full py-2 rounded hover:bg-gray-200 font-medium flex items-center justify-center gap-2">
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>


            <div className="flex flex-col items-center justify-center space-y-3 text-sm text-white mt-4">
              <div className="flex justify-between w-full max-w-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500" />
                  <span>Remember for 30 days</span>
                </label>
                <a href="#" className="text-blue-400 hover:underline">
                  Forgot password
                </a>
              </div>
              <div className="text-xs text-gray-400 mt-4 text-center">
                Doesn’t have an account?{' '}
                <a href="#" className="underline text-white font-semibold">
                  Sign up
                </a>
              </div>
            </div>

          </form>
        </div>

        {/* Right: Image */}
        <div className="relative w-1/2 h-screen hidden md:block rounded-xl">
          <Image
            src={bgImage}
            alt="Team"
            className="w-full h-screen object-cover p-6"
            fill
            priority
          />

          <div className="absolute left-8 right-8 bottom-16 bg-white/20 backdrop-blur-md text-white p-4 rounded-xl">
            <p className="text-sm md:text-base">
              “We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!”
            </p>
            <p className="mt-2 font-semibold">Sarah Markivoc - Project Manager</p>
          </div>
        </div>

      {/* </div> */}
    </section>
  );
}
