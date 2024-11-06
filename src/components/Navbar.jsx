import React from 'react'

const Navbar = () => {
  return (
    <div>
        <p>React class</p>
        <div className="flex gap-3">
            <p>Home</p>
            <p>Products</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar