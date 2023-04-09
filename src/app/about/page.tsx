/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NavBar from '../component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>


      {/* Head Start*/}


      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>

      {/* Head End*/}

      <NavBar />


      <br />

      <div className="flex flex-wrap justify-between">
        <div className="">
          <img src="/1.jpg" className='w-11/12 h-96' alt="" />
        </div>
        <br />
        <div className="">
          <h1 className='text-2xl'>
            It was popularised in the 1960s with the <br />  release of Letraset sheets <br /> containing Lorem Ipsum passages, <br /> and more recently with desktop publishing software <br /> like Aldus PageMaker including versions of Lorem Ipsum. <br />
          </h1>
        </div>
      </div>
      <br /><br />
      <div className="flex flex-wrap justify-between">
        <div className="">
          <h1 className='text-2xl'>
            It was popularised in the 1960s with the <br />  release of Letraset sheets <br /> containing Lorem Ipsum passages, <br /> and more recently with desktop publishing software <br /> like Aldus PageMaker including versions of Lorem Ipsum. <br />
          </h1>
        </div>
        <br />
        <div className="">
          <img src="/1.jpg" className='w-11/12 h-96' alt="" />
        </div>
      </div>
    </>
  )
}
