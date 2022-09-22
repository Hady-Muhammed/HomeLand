import React from 'react'

const Footer = () => {
    let curretYear = new Date();
  return (
    <footer className='bg-black p-10 text-center text-white mt-10'>
        Copyright @ {curretYear.getFullYear()}. All rights reserved
    </footer>
  )
}

export default Footer