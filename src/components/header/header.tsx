import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='py-[50px] bg-pink-300'>
      <div className='container'>
        <div className='flex gap-[20px]'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/users"}>Users</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
