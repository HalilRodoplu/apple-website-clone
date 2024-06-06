import Navbar from "./components/Navbar.jsx";
import Highlights from "./components/Highlights.jsx";
import Hero from "./components/Hero.jsx";
import Model from "./components/Model.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Camera from "./components/Camera.jsx";

const App = () => {

  return (
      <main className="bg-black">
          <Navbar/>
          <Hero/>
          <Highlights/>
          <Model/>
          <Features/>
          <HowItWorks/>
          <Camera/>
          <Footer/>
      </main>
  )
}

export default App
