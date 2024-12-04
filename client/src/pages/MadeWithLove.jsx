import React from 'react';
import Pov1 from '../assets/maquettes/pov1.png';


export default function MadeWithLove(){
    return(
    <>
    <section className="w-full sm:mt-24 mt-10">
        <article className="grid md:grid-cols-2">

            <div className="">
                <img className=" drop-shadow-2xl w-fit" src={Pov1} alt="image housse de protection - pc portable"/>
            </div>
            <div className="p-3 flex flex-col lg:gap-16 gap-10 justify-center items-center ">
                <div className="flex w-fit items-center justify-center">
                    <div className="flex items-center gap-4">
                        <h1 className="lg:text-7xl text-6xl font-bold uppercase">Conçues avec <sppan class="text-[#ff847c]">amour</sppan></h1>
                    </div>
                </div>
                <div className="flex flex-col rounded-xl shadow-lg bg-opacity-80 backdrop-filter p-6 gap-5 max-w-screen-md mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold">Des pochettes remplis d'humour et d'originalité !</h2>
                    <p className=" w-fit font-regular sm:w-full leading-relaxed lg:text-lg">Parce qu’un ordinateur heureux est un ordinateur bien protégé ! Grâce à sa double fourrure intérieure, notre housse est là pour absorber
                        les chocs et les éraflures. Plus besoin de stresser pour les petits accidents – votre ordinateur vit sa meilleure vie,
                        bien au chaud et au sec. Un essentiel de protection ? Oui ! Mais aussi un accessoire stylé qui vous accompagne
                        partout avec classNamee.</p>
                    <div>
                        <button className="bg-[#ff847c] rounded p-2 text-white">En savoir plus</button>
                    </div>
                </div>
            
            </div>
        </article>
    </section>
    </>
    )
}