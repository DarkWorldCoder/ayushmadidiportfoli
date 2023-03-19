import React from 'react'
import "./Hero.scss"
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='hero_container container'>
        <h1>Hello, I'm</h1>
        <h1>Aayushma Rajkarnikar</h1>
        <p>A UI/UX Designer, I take complex problems and simplify</p>
        <p> them delivering valuable products</p>

        <div className='line_container'>
            <div className='vr_line'></div>
            <h3>Find My Works</h3>
            <div className='vr_line'></div>
        </div>
    </div>
  )
}

export default Hero