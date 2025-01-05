import PreLoader from '@/components/pre-loader'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen h-screen bg-neutral-950 grid place-items-center'><PreLoader/>
    Fancy preloader
    </div>
  )
}
