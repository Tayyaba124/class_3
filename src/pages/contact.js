import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Contact = () => {
    return (
        <div>
            <h1> Welcome to contact page</h1>
            <nav>
                <ul>

                    <li>
                        <Link href="/footer">
                            <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                                Go to footer Page
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
                    <br></br>


                </ul>


            </nav>

        </div>


    )
}


export default Contact