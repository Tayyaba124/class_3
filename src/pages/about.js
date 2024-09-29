import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div>
        
      <h1> Welcome to About page</h1>
      <nav>
        <ul>

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
          <li>
            <Link href="/navbar">
              <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                Go to Navbar Page
              </button>
            </Link>
          </li>



        </ul>


      </nav>


    </div>
  )
}

export default About