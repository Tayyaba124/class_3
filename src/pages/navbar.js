import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>

      <h1> Welcome to Navbar page</h1>
      <nav>
        <ul>

          <li>
            <Link href="/about">
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                Go to About Page
              </button>
            </Link>
          </li>
          <br></br>

          <li>
            <Link href="/contact">
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                Go to contact Page
              </button>
            </Link>
          </li>
          <br></br>


          <li>
            <Link href="/footer">
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                Go to footer Page
              </button>
            </Link>
          </li>
          <br></br>



        </ul>


      </nav>




    </div>
  )
}

export default Navbar