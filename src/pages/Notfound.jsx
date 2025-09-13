import React from 'react'
import error from '../assets/error.png'

const Notfound = () => {
  return (
    <>
    <div className='text-center mt-10'>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src={error} alt="404 Not Found" width="500" />
    </div>
      
    </>
  )
}

export default Notfound

