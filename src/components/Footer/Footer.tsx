import React from 'react'
import "./Footer.scss"
import facebook from "../../assets/facebook.svg"
import insta from "../../assets/insta.svg"
import behance from "../../assets/behance.svg"
import dribble from "../../assets/dribble.svg"
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer_wrapper container'>
    <div className='footer '>
      
      <div>
        <h1>Have Project in Mind</h1>
        <p>Let's work together</p>
      </div>
      <div className='email'>
        Email
      </div>
    </div>
    <div className='socials'>
      <img src={facebook} />
      <img src={insta} />
      <img src={dribble} />
      <img src={behance} />
    </div>
    </div>
  )
}

export default Footer