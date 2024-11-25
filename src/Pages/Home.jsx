import AboutUs from "../components/aboutSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import { LogoTicker } from "../components/LogoSection"
import Navbar from "../components/Navbar"
import { Service } from "../components/ServiceSection"

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <Service/>
    <LogoTicker/>
    <Footer/>
    </>
  )
}

export default Home