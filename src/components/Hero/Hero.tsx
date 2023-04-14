import React from 'react'
import "./Hero.scss"
import {motion} from "framer-motion"
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='hero_container container'>
        <motion.h1
          whileInView={{ opacity: [0, 1],y:[-100,0]}}
          transition={{ duration: 0.4}}
        >Hello, I'm</motion.h1>
        <motion.h1
         whileInView={{ opacity: [0, 1],y:[100,0]}}
         transition={{ duration: 0.4}}
        >Aayushma Rajkarnikar</motion.h1>
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