
import './App.css'
import {Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Navbar from './Navbar';
import Resume from './Resume';
import Partbackground from './Partbackground';
import Contact from './Contact';
import Footer from './Footer';
function App() {
   return(
    <>
   <div className='sjsj'>
   <Partbackground />
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route  exact path='/resume' element={<Resume />} />
      <Route   exact path='/about' element={<About />} />
      <Route   exact path='/projects' element={<Projects />} />
      <Route   exact path='/contact' element={<Contact />} />
    </Routes>
    <Footer></Footer>
    </div>
    </>
   ) 
}

export default App;
