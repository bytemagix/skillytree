import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Register from '../components/Home/Register/Register'
import Landing from '../components/Home/Landing/Landing'
import Landing2 from '../components/Home/Landing/Landing2'
import Landing3 from '../components/Home/Landing/Landing3'
import Steps from '../components/Home/Steps/Steps'
import Affiliation from '../components/Home/Affiliation/Affiliation'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Landing />
      <Landing2 />
      <Landing3 />
      <Steps />
      <Affiliation />
    </div>
  )
}

export default Home
