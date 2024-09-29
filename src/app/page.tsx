"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex'
const Home = () => {
  const router = useRouter();

  const navigate = (name: string) => {
    router.push(name);
  };

  return (
    <div>
      <nav>
        <ul>

          <h1>
            This is Home page
          </h1>
          <li>
            <Link href="/about">

              Go to About Page

            </Link>
          </li>
          <br></br>

          <li>
            <Link href="/navbar">

              Go to Navbar Page

            </Link>
          </li>
          <br></br>

          <li>
            <Link href="/contact">

              Go to contact Page

            </Link>
          </li>
          <br></br>


          <li>
            <Link href="/footer">

              Go to footer Page

            </Link>
          </li>
          <br></br>
        </ul>

      </nav>

      <button onClick={() => navigate('/about')} style={{ padding: '10px 20px', fontSize: '16px' }}>

        Go to About page (using useRouter)

      </button>

      <br></br><br></br>

      <button onClick={() => navigate('/navbar')} style={{ padding: '10px 20px', fontSize: '16px' }}>

        Go to Navbar page (using useRouter)

      </button>

      <br></br><br></br>

      <button onClick={() => navigate('/footer')} style={{ padding: '10px 20px', fontSize: '16px' }}>

        Go to Footer page (using useRouter)

      </button>

      <br></br><br></br>

      <button onClick={() => navigate('/contact')} style={{ padding: '10px 20px', fontSize: '16px' }}>

        Go to Contact page (using useRouter)

      </button>

    </div >










  )
}

export default Home