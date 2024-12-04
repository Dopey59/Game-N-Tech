import React from 'react';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import Header from '../pages/Header'
import Carousel from '../pages/ProductsCarousel'
import Made from '../pages/MadeWithLove'
import NewsLetter from '../pages/Newsletter'
import Badges from '../pages/Badges'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import ProductList from '../components/ProductList';

export default function HomePage(){

    // const ele1 = useRef(); 

    useGSAP(() => {
        gsap.from(".ele1", 
            { opacity: 0,
              x: 300,
              duration: 1,
              yoyo : true,
              ease: "power1.inOut",
            });
        
        gsap.from(".grp2", {
          opacity: 1, // Opacité correcte entre 0 et 1
          y: 20,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
        
        const tl = gsap.timeline({
          scrollTrigger: {
              scrub: 1,
              pin: true,
              trigger: "#pin-windmill",
              start: "50% 50%",
              endTrigger: "#pin-windmill-wrap",
              end: "bottom -100%",
          },
        });
      
        tl.to("#pin-windmill", {
            rotateZ: 900,
        });
    }, []); // L'animation se déclenche après le rendu initial

    return(
    <>
    <section id="smooth-wrapper">
      <div id="smooth-content">
          <Navbar/>
          <Header/>
          <Carousel/>
          <Made/>
          <NewsLetter/>
          <Badges/>
          <Footer/>
      </div>
    </section>
    </>
    )
}