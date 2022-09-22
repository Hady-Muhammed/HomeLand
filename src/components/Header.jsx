import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between p-5 px-10 border-b items-center'>
        <Link to='/HomeLand/'>
          <span className='font-bold text-xl'>HomeLand<span className='text-purple-800 text-4xl'>.</span></span>
        </Link>
        <div>
            <button className="mr-5">Log in</button>
            <button className="btn-primary">Sign up</button>
        </div>
    </header>
  )
}

export default Header