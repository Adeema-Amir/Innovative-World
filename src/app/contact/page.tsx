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


  </>
  )
}
