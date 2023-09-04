import React from 'react'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

const errorPage = () => {
    const router = useRouter();
    // console.log("Its working");
    
    // setTimeout(() => {
    //     router.push('/')
    //     console.log("Its working");
    // }, 5000);

    // useEffect(() => {
    //     router.push('/')
    // }, [])
    
  return (
    <>
        <h1>
            there is by default error page if u type unkown query in url. but incase u want to create custom 404 page. Just name the 404.js and it will work.

        </h1>

                {/* Both will works the same way  */}
               <button> <Link href="/"> GO Back</Link></button>
               <a onClick={()=> router.push('/') }>GO TO HOMEPAGE </a>
               {/* one more you can also only name of the function like 'handleClik' and define it above befor return  */}
               {/* <a onClick={handleClik }>GO TO HOMEPAGE </a> */}
               
        
    </>
  )
}

export default errorPage             