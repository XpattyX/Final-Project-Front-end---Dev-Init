import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
      <div className='h-14 border-b-2 border-slate-400'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 items-center mt-4'>
            <h1 className='text-3xl font-extrabold'>NOTE</h1>
            <div className='text-end'>
              <Link href="#"
                  className='px-3.5 py-2 bg-pink-300 align-middle rounded-full border-2 border-slate-400 hover:bg-pink-200'>
              P</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar