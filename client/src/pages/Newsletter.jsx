import React from 'react';
import Cloud from '../assets/images/pinkCloud.png';

export default function Newsletter(){
    return(
        <>
        <section className="w-full sm:mt-24 mt-10">
            <article className="Container relative mt-10 w-full flex items-center p-10 grid md:grid-cols-2 place-items-center h-auto  ">
                <div className="textSection z-50 flex flex-col gap-6 justify-center items-center md:items-start max-w-screen-md mx-auto">
                    <h1 className="lg:text-9xl text-6xl font-bold text-black">Au bureau,</h1>
                    <h2 className="lg:text-8xl text-5xl font-bold text-black">A la maison, </h2>
                    <h3 className="lg:text-7xl text-4xl font-bold text-black">A l'extérieur..</h3>
                    <p className=" w-80 font-regular sm:w-full leading-relaxed lg:text-lg sm:text-left text-black text-center">Montrez votre originalité à travers votre pochette où que vous soyez..</p>
                    <form action="GET" className="">
                        <input type="email"
                        id="email"
                        pattern=".+@example\.com"
                        size="30"
                        required placeholder="Entrez un E-mail"
                        className="newsletter p-2 rounded-md border-2 border-black"
                        />
                    </form>
                    <p className=" w-80 font-regular sm:w-full leading-relaxed text-sm lg:text-lg md:text-left text-black text-center">Recevez 10% en vous inscrivant !</p>
                </div>
                <div className="cloudContainer absolute md:relative">
                    <div className="cloudElements absolute grid grid-cols-4">
                        <img  className="w-96 h-auto" src={Cloud} alt="image housse de protection - pc portable"/>
                        <img className=" drop-shadow-2xl  w-96 h-auto" src={Cloud} alt="image housse de protection - pc portable"/>
                        <img className=" drop-shadow-2xl  w-96 h-auto" src={Cloud} alt="image housse de protection - pc portable"/>
                        <img className=" drop-shadow-2xl  w-96 h-auto" src={Cloud} alt="image housse de protection - pc portable"/>
                    </div>
                    <div className="cloudElements grid grid-cols-2 ">
                        <img className=" drop-shadow-2xl  w-96 h-auto" src={Cloud} alt="image housse de protection - pc portable"/>
                        <img className=" drop-shadow-2xl  w-96 h-auto" src={Cloud} alt="image housse de protection - pc portable"/>
                    </div>
                </div>
            </article>
        </section>
        </>
    )
}