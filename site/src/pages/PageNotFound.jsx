import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <>
    <h1>404 PAGE NOT FOUND</h1>
    <Link to="/" className='btn btn-info'>Anasayfaya Gitmek İçin Tıklayın</Link>
    </>
  )
}