import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-10 py-4 border-b border-gray-300'>
      <div className="logo font-heading text-primary font-semibold">
        <h1 className='text-2xl'>Fitness Hub</h1>
      </div>

      <div className='leftsection-container font-body text-sm'>

        <div className="links flex space-x-7 ">
          <Link href="/" className='hover:text-primary transition ease-in'>Home</Link>
          <Link href="/classes" className='hover:text-primary transition ease-in'>Classes</Link>
          <Link href="/trainers" className='hover:text-primary transition ease-in'>Trainers</Link>
          <Link href="/feedback" className='hover:text-primary transition ease-in'>Feedback</Link>
          {/* <button>primary
            <Link href="/login">Login</Link>
          </button> */}
        </div>

      </div>

    </header>
  )
}

export default Header