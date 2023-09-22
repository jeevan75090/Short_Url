import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
// import ShortenForm from "./components/ShortenForm"

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
