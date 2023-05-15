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
        <p>An UI/UX Designer, I am passionate about creating digital experiences that are both visually appealing and user-friendly. With a strong background in designing for various industries, I am experienced in conducting user research and usability testing to ensure that my designs meet user needs and preferences. My design philosophy is centered around the user experience, and I am committed to creating designs that are accessible, inclusive, and meet the needs of diverse audiences.</p>

        <div className='line_container'>
            <div className='vr_line'></div>
            <h3>Find My Works</h3>
            <div className='vr_line'></div>
        </div>
    </div>
  )
}

export default Hero