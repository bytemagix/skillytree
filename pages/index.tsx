import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Register from '../components/Home/Register/Register'
import Landing from '../components/Home/Landing/Landing'
import Landing2 from '../components/Home/Landing/Landing2'
import Landing3 from '../components/Home/Landing/Landing3'
import Steps from '../components/Home/Steps/Steps'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Landing />
      <Landing2 />
      <Landing3 />
      <Steps />
    </div>
  )
}

export default Home
