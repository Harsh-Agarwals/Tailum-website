import Navbar from './Sections/Navbar'
import About from './Sections/About'
import Details from './Sections/Details'
import Products from './Sections/Products'
import Footer from './Sections/Footer'
import Contact from './Sections/Contact'

function App() {
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
            <Contact />
          </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App
