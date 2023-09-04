import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <Head>
      <title>
        Next.js tut
      </title>
    </Head>
      <nav>
        <ul>
        <li>
          <Link href="/">
            <a >Home</a>
          </Link>
          </li>
          <li>
          <Link href="/contact">
            <a >Contact</a>
          </Link>
          </li>
          <li>
          <Link href="/about">
            <a >About</a>
          </Link>
          </li>
          <li>
          <Link href="/service">
            <a >Service</a>
          </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
