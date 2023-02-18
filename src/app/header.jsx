import React from 'react'
import Link from "next/link"
import InputSch from './inputSch'

const header = () => {
  return (
    <>
      <nav>
      <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/product/:id"}>Product</Link>
        <Link href={"/contact"}>Contact</Link>
        <InputSch />
      </nav>

    </>
  )
}

export default header