import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import StoreBanner from "./Components/HomeBanners/StoreBanner";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact"
import Cart from "./Components/Cart/Cart";
import Shop from "./Components/Shop/Shop";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About"
import HomePage from "./Components/HomeBanners/HomePage";
function App() {
  const [cartQuantity, setCartQuantity] = useState(0)
  return (
    <div className="App">
      <Navbar cartQuantity={cartQuantity} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
