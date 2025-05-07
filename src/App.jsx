import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import NavBar from './NavBar'
import './App.css'
import Photos from './Photos'
import Contact from './Contact'
import AirBnB from './AirBnB'
import Commercial from './Commercial'
import Residential from './Residential'
import Moving from './Moving'
import PostConstruct from './PostConstruct'



function App() {

return (
  <>
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/photos" element={<Photos />} />
    <Route path="/commercial" element={<Commercial />} />
    <Route path="/residential" element={<Residential/>} />
    <Route path="/airbnb" element={<AirBnB />} />
    <Route path="/moving" element={<Moving />} />
    <Route path="/postconstruct" element={<PostConstruct />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
    
  </>
);

}

export default App;