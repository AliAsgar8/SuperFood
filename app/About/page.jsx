import Link from 'next/link'
import React from 'react'
import Navbar from "../Navbar"

export default function page() {
  return (
    <div>
    <Navbar />
      this is about page
      <Link href="/About/Card">About</Link>

    </div>
  )
}
