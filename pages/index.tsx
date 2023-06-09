import Head from 'next/head'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })


import Featured from '../components/ui/Featured'
import PoductList from "../components/ui/poductList"

export default function Home({productList}:{productList:any}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        
        {/* <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
        </p>*/}
        {/* {productList.map((product:any)=>(
          <Link key={product._id} href={`/product/${product._id}`}>
          <h1>{product.title}</h1>
          </Link>
          
        ))}  */}

      <Featured/>
      <PoductList productList={productList}/>
      </main>
    </>
  )
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList : res.data,
    }
  }
}