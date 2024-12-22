import Link from 'next/link'
import React from 'react'

const ProfileLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex'>
        <div className='h-[65.9vh] bg-pink-100 w-[300px]'>
            <Link href={"/profile/address"}>Address</Link>
            <br />
            <Link href={"/profile/settings"}>Settings</Link>
        </div>
      {children}
    </div>
  )
}

export default ProfileLayout
