import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import App from '../App'

const Navbar = () => {
  return (
    <>
    <button><Link to="/">App</Link></button>
    <button><Link to="cart">Cart</Link></button>
    </>
  )
}

export default Navbar