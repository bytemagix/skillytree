import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main>Index Js</main>
    </div>
  )
}

export default Home
