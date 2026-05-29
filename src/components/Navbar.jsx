import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">LA CASA <span>DE PAPEL</span></div>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>El Profesor</li>
        <li>La Banda</li>
        <li>El Plan</li>
      </ul>
    </nav>
  )
}

export default Navbar