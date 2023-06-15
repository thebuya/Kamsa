import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About </Link>
        <Link href={"/about/founder"}>Founder </Link>
        <Link href={"/blog"}>Blog </Link>
    </div>
  )
}

export default Footer