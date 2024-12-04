import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";

import { SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, TextPlugin, SlowMo);

import HomePage from './pages/HomePage';
import ContactUs from './pages/Contact';
import AllProducts from './components/ProductList';
import ProductDetails from './pages/ProductDetails';





function App() {
  return (
    <>
       <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="formulaire_de_contact" element={<ContactUs />} />
            <Route path="tous_nos_produits" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router> 
    </>
  )
}

export default App
