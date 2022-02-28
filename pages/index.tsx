import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <nav className="flex h-20 w-full items-center justify-between bg-gray-800 px-20 text-white">
        <div className="flex items-center">
          <div className="mx-4 flex h-4 w-8 flex-col justify-between sm:hidden">
            <span className="h-[1px] w-6 bg-white"></span>
            <span className="h-[1px] w-6 bg-white"></span>
            <span className="h-[1px] w-6 bg-white"></span>
          </div>
          <span className="text-2xl font-bold uppercase">Happy Miles</span>
        </div>
        <div>
          <ul className="hidden items-center sm:flex">
            <li className="mx-4 cursor-pointer font-semibold uppercase hover:text-orange-700">
              Home
            </li>
            <li className="mx-4 cursor-pointer font-semibold uppercase hover:text-orange-700">
              About
            </li>
            <li className="mx-4 cursor-pointer font-semibold uppercase hover:text-orange-700">
              Contact Us
            </li>
          </ul>
        </div>
      </nav>
      <main className="flex min-h-[90vh] flex-col border-2 border-black sm:flex-row">
        <div className="h-full min-h-[90vh] basis-1/2 border-2 border-red-600 p-20">
          <span className="text-green-700 sm:text-red-700">Hello</span>
        </div>
        <div className="h-full min-h-[90vh] basis-1/2 border-2 border-green-600"></div>
      </main>
    </div>
  )
}

export default Home
