import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
      <h1>Oops!</h1>
      <p>404 - PAGE NOT FOUND</p>
      <Link to='/'>
        <button className='not-found-btn'>GO TO HOMEPAGE</button>
      </Link>
    </div>
  )
}

export default NotFound
