import React from 'react';
import ScrollElement from '../assets/images/element6.png';
import Cloud from '../assets/images/pinkCloud.png';

export default function Header(){
    return(
    <>
    <section className="bg-black flex justify-center h-96 w-auto m-auto">
    <div className="scrollEffect flex justify-end  absolute w-full bottom-0 ">
            <img  id="pin-windmill" className=" sm:w-32 lg:h-auto w-24 z-50" src={ScrollElement} alt="element graphique"/>
        </div>
        <article className="header justify-center items-center flex flex-col ">
            <div className="title flex justify-center items-center">
                <div className="absolute z-50">
                    <h1 className="ele1 flex items-center mt-6 md:text-9xl text-7xl header font-black drop-shadow-xl text-white">
                        <span className="ele1">C</span><span className="ele1">o</span><span className="ele1">v</span><span>e</span><span>r</span><span>l</span><span>l</span><span>y</span>
                    </h1>
                </div>
                <div className="svgCloud">
                    <img src={Cloud} alt="" className="grp2 h-auto md:h-auto w-auto" data-speed="0.8" />
                </div>
            </div>
        </article>
    </section>
    </>
    )
}