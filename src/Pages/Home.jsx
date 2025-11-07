import React from 'react'
import Hero from "./../Components/Home/Hero1"
import About from "./../Components/Home/About"
import Mission from "./../Components/Home/Mission"
import WhyChoose from "./../Components/Home/Whychoose"
import Feature from "./../Components/Home/Appfeature"
import Refferal from "./../Components/Home/Refferal"
import Play from "./../Components/Home/Playtab"
import ShopEarn from "./../Components/Home/Shop&Earn"
import Brand from "./../Components/Home/Brands"
import Post from "./../Components/Home/Posttab"
import Gold from "./../Components/Home/Goldtab"
import Profile from "./../Components/Home/Profiletab"
import Secured from "./../Components/Home/Securedby"
import FAQ from "./../Components/Home/FAQ"
import Review from "./../Components/Home/Review"
import Blank from "./../Components/Home/Blank"

const Home = () => {
  return (
    <div>
     <Hero/>
      <About/>
      <Mission/>
      <WhyChoose/>
      <Feature/>
      <Refferal/>
      <Play/>
      <ShopEarn/>
      <Brand/>
      <Post/>
      <Gold/>
      <Profile/>
      <Secured/>
      <FAQ/>
      <Review/>
      {/* <Blank/>  */}
    </div>
  )
}

export default Home
