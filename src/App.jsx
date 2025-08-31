import Navbar from './components/Navbar';
import Slideshow from './components/SlidShow';
import MenuCardCollection from './components/MenuCoffeeCards';
import MenuContent from './components/MenuContent';
import DetailRestro from './components/DetailRestro';
import CafeReviews from './components/Reviews';
import Footer from './components/FooterContent';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Slideshow />
      <MenuCardCollection />
      <MenuContent />
      <DetailRestro />
      <CafeReviews />
      <Footer />
    </>
  )
}

export default App
