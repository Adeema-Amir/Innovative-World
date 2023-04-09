/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from 'next/font/google'
import Card from './component/Card'
import NavBar from './component/Navbar'
import Footer from './component/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      {/* Head Start*/}

      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>

      {/* Head End*/}

      {/* NavBar Start*/}


      <NavBar />

      {/* NavBar End*/}

     {/* Main Image start */}

     <div className="m-10">
       <section className="bg-center bg-no-repeat bg-[url('https://sites.google.com/site/museum12a12/_/rsrc/1453891377333/evolution-of-human/future-world/des5.jpg')] bg-gray-700">
         <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
           <h1 className="mb-4 text-8xl font-extrabold tracking-tight leading-none text-blue-600 md:text-5xl lg:text-6xl">Innovative World</h1>
           <p className="mb-8 text-lg font-normal text-red-500 lg:text-xl sm:px-16 lg:px-48"><b>Innovative World Is A New World</b></p>
           <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
             <a href="/docs" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Get started
               <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
             </a>
             <a href="/info" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
               Learn more
             </a>
            </div>
         </div>
        </section>

      </div>


      {/* Main Image end */}
      <br />
      {/* card start */}

      <Card />

      {/* card end */}

      {/*  */}
      <Footer />
    </>
  )
}
