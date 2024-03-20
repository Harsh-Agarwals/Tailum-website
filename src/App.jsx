import { useState } from 'react'
import './App.css'
import Navbar from './Sections/Navbar'
import About from './Sections/About'
import Details from './Sections/Details'
import Products from './Sections/Products'
import Footer from './Sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main bg-orange-100">
        <div className="about">
          <About />
        </div>
        <div className="details">
          <Details />
        </div>
        <div className="products">
          <Products />
        </div>
        <div className="contact">
          
        </div>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  )
}

export default App
