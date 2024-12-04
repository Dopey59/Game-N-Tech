import React, { useRef } from 'react';
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";

// useGSAP(() => {
//     const container = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#text-section", // L'ID de la section à surveiller
//         start: "top center", // Commence lorsque le haut de la section atteint le centre de la fenêtre
//         end: "bottom top", // L'animation finit lorsque le bas de la section quitte le haut de la fenêtre
//         scrub: 1, // Permet un effet de défilement fluide
//         toggleActions: "play pause resume reverse", // Contrôle les actions
//     }
//     });
// })

export default function Badges(){
    const container = useRef();
    useGSAP(() => {
    const container = gsap.timeline({
        scrollTrigger: {
            scale: 0,
            duration: 1,
            repeat: -1,
            ease: "power2.inOut",
            yoyo: true,
            stagger:{
                each: 0.2
            },
            trigger: "#badgesContainer", // L'ID de la section à surveiller
        }
        });
    })
    return(
    <>
    <section className="sm:mt-24 mt-10 h-auto ">
        <div ref={container} id='badgesContainer' className=" grid sm:grid-cols-4 grid-cols-1 gap-6 p-12">
            <div className="circle flex flex-col gap-3 text-white bg-[#ff847c] rounded-xl w-auto p-2 items-center justify-center">
                <img src="data:image/png;base64,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"/>
                <h1 className="text-white font-light">Livraison rapide</h1>
            </div>
            <div className="circle flex flex-col gap-3 text-white bg-[#ff847c] rounded-xl w-auto p-2 items-center justify-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAA+JJREFUeF7tnEFu1UAMhm3BLZCAHoI1dM8O9tADwBXaXgEOQNnDrnvKmkNQKnELkHmWJlUSQewZJ7hv3h+p6iLxePJ/Y0/exBkmHKkKcKp3OCcASB4EAAAAyQoku0cEAECyAsnuEQEAkKxAsntEAAAkK5DsHhEAAMkKJLtHBABAsgLJ7hEB+wZARB4T0Ssielb+km8h3f31TocrItL/H5lZ/7uPqggQkdNdy2fu1g/vQhX/gpnPvbfuBiAiXzDivbLSFTMfe652ARCR10T0wdMgrrlV4MwTCSaAkvO/Q9hqBTQdnTCzzg//PDwAkPertfdHgQeAph5NQTjqFTDnAg8ATT/66ImjXoFrZj6KpiBZbIDZhFjf7/2x2D2ah/QxxYs62B8p23oa1QcA2nS/tQKAoIBRcwCIKhi0B4CggFFzAIgqGLQHgKCAUXMAiCoYtAeAoIBRcwCIKhi0B4CggFFzAIgqGLQHgKCAUXMAiCoYtAeAoIBRcwCIKhi0B4CggFFzAIgqGLQHgKCAUfODAVCKw56W6jwtEtC6m6Eu86tVf1PsnxPREyJ6UIT/SUTfiOiSmS9aYHQPQES0CFhLY6zKDC2A0kKoSXFsEV5rNR8aAt8Q0WktiK4BNBQDT8oBReQdEb2pHNnvmfmt16ZbAEniD7q7IXQJoKQdrcb2HpMKtJWKiTWdmfNCrwBqq/GOxrlfRH44cr4F94aZH1kXdQegIfVMyv9WGv2D7mYUAADRfOL9REQvrJHrPP+ZmV8uXdsjgNr0czz+DbBS+hk0N9NQjwAWi13no3H3FcqkvFJEfhHRPecIty77zcz3EQHLMs0nYACwhpUxompT0BZPQAedgmq/yJk8qYgIJuFgBNR+kbnFj7DDfQzVOxeRu5CGzCeg0tf+vpBp+DG2RRSYP8K6BVBurPbz2DVWQrEYN54/GiJhDQjuldCuI2AAUdZ2NBo8L2TO52/G8EIm8kg0si1L1GMQCmRYLtZtYha3BMAryZVA3LVmulsLumsCW/0BAEuhjc8DwMYCW80DgKXQxucBYGOBreYBwFJo4/MAsLHAVvP/A0DtyqTV54M6P39lOr95z3Y12K6yfcjoHqInS+YeALWrku3d7c/S3LrSA0DXXLBtZdvgmJTM/K0JE0BZcq19TdjW3b6sXC90XAAKhNqX5X3JWXc35naVQ3NuAAUC5gMbhJn3x01UASgQdE7Qr1bGnwvZ3er3ivGnUttuX9+vhnl3Vh0BeV3t0zMAJHMFAABIViDZPSIAAJIVSHaPCACAZAWS3SMCACBZgWT3iAAASFYg2T0iAACSFUh2jwhIBvAHL0qqf0Yq8ckAAAAASUVORK5CYII="/>
                <h1 className="text-white font-light">Paiements sécurisé</h1>
            </div>
            <div className="circle flex flex-col gap-3 text-white bg-[#ff847c] rounded-xl w-auto p-2 items-center justify-center">
                <img src="data:image/png;base64,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"/>
                <h1 className="text-white font-light">Designs unique</h1>
            </div>
            <div className="circle flex flex-col gap-3 text-white bg-[#ff847c] rounded-xl w-auto p-2 items-center justify-center">
                <img src="data:image/png;base64,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"/>
                <h1 className="text-white font-light">S.A.V exceptionnel</h1>
            </div>
        </div>
    </section>   
    </>
)}