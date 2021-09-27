import React from "react";
import Home from './components/screens/Home';
import Spotlight from './components/screens/Spotlight';
import Breakfast from "./components/screens/Breakfast";
import About from './components/screens/About';
import Testimonial from './components/screens/Testimonial';
import Contact from './components/screens/Contact';
import Footer from  './components/screens/Footer';

function App() {
  return <>
    <Home />
    <Spotlight/>
    <Breakfast/>
    <About/>
    <Testimonial/>
    <Contact/>
    <Footer/>
  </>;
}

export default App;
