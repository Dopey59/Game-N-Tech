import React from 'react';
import Money from '../assets/maquettes/noel13.png';
import Tiger from '../assets/maquettes/buttertiger.png';
import Butterfly from '../assets/maquettes/butterfly.png';


export default function ProductCarousel(){
    return(
        <>
        <section className="grid place-items-center sm:mt-24 mt-10">
            <div className=' flex w-full items-center justify-center flex-col'>
                <div className="flex sm:p-12 p-3 mt-6 sm:mt-0">
                    <h1 className="lg:text-7xl sm:text-5xl uppercase text-4xl font-black">Modèles <sppan class="text-[#ff847c]"> en vogue</sppan></h1>
                </div>
                <div className="w-full flex flex-col md:justify-center items-center ">
                    <div className="carousel-product grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:m-9 m-auto">
                        <div className="price flex flex-col items-center w-auto">
                            <img className=" drop-shadow-2xl w-fit  h-auto" src={Money} alt="image housse de protection - pc portable"/>
                            <p className="text-xl"><span className="font-bold text-2xl">MONEY WINTER</span> - 29.99€ <span className="line-through text-base text-gray-500">34.99€</span></p>
                        </div>
                        <div className="price flex flex-col items-center">
                            <img className=" drop-shadow-2xl  w-fit h-auto" src={Tiger} alt="image housse de protection - pc portable"/>
                            <p className="text-xl"><span className="font-bold text-2xl">EYES OF TIGER</span> - 29.99€ <span className="line-through text-base text-gray-500">34.99€</span></p>
                        </div>
                        <div className="price flex flex-col items-center">
                            <img className=" drop-shadow-2xl w-fit h-auto" src={Butterfly} alt="image housse de protection - pc portable"/>
                            <p className="text-xl"><span className="font-bold text-2xl">BUTT ERFLY</span> - 29.99€ <span className="line-through text-base text-gray-500">34.99€</span></p>
                        </div>
                        <div className="flex items-center  justify-center p-6">
                            <p className="hidden min-[768px]:block text-center min-[1024px]:hidden text-left text-2xl w-fit font-light sm:w-full">Disponibles en 13" et 15" uniquement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}