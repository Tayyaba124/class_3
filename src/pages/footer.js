import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <h1> Welcome to Footer page</h1>
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
                        <Link href="/about">
                            <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                                Go to About Page
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

export default Footer