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
          <a href="../../assets/AayushmaResume.pdf" download>Download CV</a>
        </div>

    </nav>
  )
}

export default Navbar