import React from 'react'
import logo from "../../assets/logo.svg"
import "./Navbar.scss"
import msgIcon from "../../assets/msg.svg"
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav
    className='navbar container'
    >
        <div className='navbar_left'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='navbar_right'>
          <h3>Contact</h3>
          <img src={msgIcon} />
        </div>

    </nav>
  )
}

export default Navbar