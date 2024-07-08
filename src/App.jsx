import Explore from "./components/Explore"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import WorkFlow from "./components/WorkFlow"


function App() {

  return (
   <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <Explore/>
        <WorkFlow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
    </div>
   </>
  )
}

export default App
