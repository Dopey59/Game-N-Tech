import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import BgContact from '../assets/images/backgrounds/bg-2.jpg';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4yhoibk', 'template_wz8lzvh', form.current, {
        publicKey: 'urNiZ08f4yXl5PT44',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <section>
      {/* Image en fond d'écran */}
      <div 
      className="absolute inset-0 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${BgContact})` }}
      ></div>
      
      {/* Contenu superposé */}
      <div class="relative h-screen p-2 mx-auto lg:px-8 sm:flex sm:justify-center sm:flex-col gap-6 sm:items-center ">
        <div class="sm:block hidden bg-white p-2 rounded-md shadow-md z-20">
          <a href="/">
            <div class="flex items-center gap-2 ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAeFJREFUWEfd10FygjAUANAfcG/ddUY7pQfR4kkqJ6k9ie1JivYgstCZ7hy6BlJCCRMggSRfGKdsHCX5vOTD/0jgxg5yYx74fyD//uKlE7JjO+0mNAi/ZxFm11E7xDDZxDlWAAqRk2ZrDMoa1MJwFRJlBZLtTOEh4BWfCJQxSJomkgWQQJS5zicWZQRSYcLTLGQbU5xHorRBfRh+C2FRWiBdzDVQvSBTDBbVCbLFYFBKEBZji5KCroWxQbVAsgrsQLbmj7Ztn9JtMzWQqh0cTtMWfPnwsyGUPubYfVWHFhc/Ja7n0jRihbLZ01aLmNYWJKnotQut5vGxqrTCTBHEuzsB4gtDthSoL/6Wfw+b3b8FKtvM4Tx94rGMQc/zeEcJbHRSx1Bfp7s1H2sMKlP2UgbY8kDiDkmDdug65hbxnST7EFOrfOzFC9eCKtIqNVGIxHSoYopzzUGL+DUPUO1eT+q2+WLeZCmTPSh/bzCKo2s1+bleFKHwvj9PAzH8IDskrFaJkmHYvEFB5QVaKBVmFFAT1YUZDcRROcZr3jPN23PwlOkUx9FualPMqCnTxeFSZlKRdUV8XKOC61bq3uJn6hDG1yq4FogNKjo7gC97JRkC09k6EBdETe39G4SKbjH55kC/16azNJTUF2sAAAAASUVORK5CYII="/>
              <p class="font-bold ">Retour</p>
            </div>
          </a>
        </div>
        
        <div class="mx-auto max-w-2xl text-center ">
          <div className='flex flex-col gap-3 '>
            <h2 class="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Contactez-nous !</h2>
            <div className=' '>
              <p class="mt-2 text-lg leading-8 text-blue-900">Une question ? Un doute ? Notre équipe est là pour répondre à tout vos besoins,
                dans un délais de 24h à 48h !
              </p>
            </div>
          </div>
        </div>
        
        {/* Formulaire */}
        <form ref={form} onSubmit={sendEmail} action="https://fabform.io/f/xxxxx" method="post" class="mx-auto relative mx-auto mt-6 max-w-xl bg-white p-6 rounded-md shadow-md z-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="flex items-center justify-center block sm:hidden">
              <a href="/">
                <div class="flex items-center gap-2">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUNJREFUSEu1lEFygzAMRWXInmbXmWRBL5KSmzQnKTlJcpPS9CBhQWayy7BvUDHBHmMsLE+Dl7b1nyR/WcDMS8ysD2xA9npL7wtxkAnFv7grrsuSkxwLoMQFiKwTRSije7PlQLyAgTjCI2sBKRcyCbDFT5fkTe41cfTFhZAAl7jqeQjECZgSD4WMABzxEMgAECLOhWiAbcVTlXgdNoAsorPLwlrkfVUfUMCHClKAbH3LGoy6AWudc+zPc9umm3WNKhYBi5/qZfsI6RcF2Kzqc2dJ10IopXXlkReg4tVFVYEZ6GLY9+zWjvrsAHy2wjnx7+St4N6sIBjQB48gAuH4fUl2VOVq31uBIaAhtvi/KzAhrXhqZv60Cog30Nv22wW36HmAKd/7KMZckBXoyaWGi4DI6Y0B90W1LMwr7P/Glzx1PjvgD2I1DyiZdXN3AAAAAElFTkSuQmCC"/>
                  <p>Retour</p>
                </div>
              </a>
            </div>
           
            {/* Champs du formulaire */}
            <div>
              <label for="first-name"  class="block text-sm font-semibold leading-6 text-gray-900">Nom</label>
              <div class="mt-2.5">
                <input required type="text" name="from_lastname" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <label required for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Prénom</label>
              <div class="mt-2.5">
                <input type="text" name="from_firstname" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Nom de l'Entreprise</label>
              <div class="mt-2.5">
                <input type="text" name="user_company" id="company"  placeholder="Facultatif" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label required for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input type="email" name="user_email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea placeholder='Vos articles sont vraiment chouettes !' required name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Envoyer</button>
          </div>
        </form>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ContactUs;