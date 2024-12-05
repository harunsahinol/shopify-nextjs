import React from 'react'

const Navbar = async() => {
  const menu = await getMenu("Next.js-Frontend-Menu")
  return (
    <nav>Navbar</nav>
  )
}

export default Navbar