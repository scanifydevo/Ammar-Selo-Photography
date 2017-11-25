import React from 'react'
import Logo  from './Logo'
import {NavLink} from 'react-router-dom'

function Navigation () {

  return (
    <div>
      <div className="nav-container">
        <NavLink
          className='nav-link'
          activeClassName='active'
          to='/about'>About
        </NavLink>

        <NavLink
          className='nav-link logo-container'
          activeClassName='active'
          to='/'>
          <Logo height={150} />
        </NavLink>

        <NavLink
          className='nav-link'
          activeClassName='active'
          to='/contact'>Contact
        </NavLink>
      </div>
      <style jsx>{`
        .nav-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: black;
          justify-content: space-around;
	        height: 100px;
	        box-shadow: 0 8px 6px -6px black;
          z-index: 100;
        }

        .nav-link {
          margin: auto;
          flex-grow: 1;
          text-decoration: none;
          text-transform: uppercase;
          text-transform: uppercase;
          text-decoration: none;
          z-index: 100;
        }
      `}</style>
    </div>
  )
}

export default Navigation;
