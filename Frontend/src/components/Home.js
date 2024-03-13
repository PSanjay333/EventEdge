import React from 'react'
import Head from './Head'
// import CarouselImg from './CarouselImg'
import Jumbotron from './Jumbotron'
import Team from './Team'
import Footers from './Footers'
import Hero from './Hero'
import Contact from './Contact'


const Home = (props) => {
  return (
    <div>
      <Head/>
      <Hero/>
      {/* <CarouselImg/> */}
      {/* <Features/> */}
      <Jumbotron/>
      <Team/>
      <Contact/>
      <Footers/>
    </div>
  )
}

export default Home