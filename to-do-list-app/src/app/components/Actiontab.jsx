import React from 'react'
import Link from 'next/link'

function Actiontab() {
  return (
    <>
      <div className='bg-white h-full'>
        <div>
          <ul className='text-end mt-4 grid grid-cols-1 gap-4'>
              <Link href="/"><li className='w-28 p-1.5 rounded-xl bg-pink-200 hover:bg-pink-100'>Calendar</li></Link>
              <Link href="/todolist"><li className='w-28 p-1.5 rounded-xl bg-yellow-200 hover:bg-yellow-100'>To-do</li></Link>
              <Link href="/note"><li className='w-28 p-1.5 rounded-xl bg-sky-200 hover:bg-sky-100'>Note</li></Link>
          </ul>
        </div>
        
      </div>
    </>
  )
}

export default Actiontab