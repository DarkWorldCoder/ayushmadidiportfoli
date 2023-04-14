import React from 'react'
import "./Footer.scss"
import facebook from "../../assets/facebook.svg"
import insta from "../../assets/insta.svg"
import behance from "../../assets/behance.svg"
import dribble from "../../assets/dribble.svg"
import {motion} from "framer-motion"
type Props = {}

const Footer = (props: Props) => {

  const mailTo = ()=>{
    window.location.href = "mailto:inbox4aayushma@gmail.com";
  }

  const pushToLink = (url:string)=>{
    window.open(url,"_blank");
  }
  return (
    <div className='footer_wrapper container'>
    <div className='footer '>
      
      <motion.div
         whileInView={{ opacity: [0, 1],x:[-200,0]}}
         transition={{ duration: 0.6 }}
      >
        <h1>Have Project in Mind</h1>
        <p>Let's work together</p>
      </motion.div>
      <motion.div 
      onClick={mailTo}
       whileInView={{ opacity: [0, 1],x:[100,0]}}
       transition={{ duration: 0.6 }}
      className='email'>
        Email
      </motion.div>
    </div>
    <motion.div
     whileInView={{ opacity: [0, 1],y:[-100,0]}}
     transition={{ duration: 0.6 }}
    className='socials'>
      <img src={facebook} onClick={()=>pushToLink("https://www.facebook.com/ayushma.rajkarnikar/")}/>
  
      <img
      onClick={()=>pushToLink("https://www.instagram.com/aayushmarajkarnikar__/")}
      src={insta} />
      <img src="https://img.icons8.com/ios/256/linkedin.png"
       onClick={()=>pushToLink("https://www.linkedin.com/in/aayushma-rajkarnikar-b3ab21209/")}

      />
      <img
       onClick={()=>pushToLink("https://www.behance.net/aayushmrajkarnikar")}
      src={behance} />
    </motion.div>
    </div>
  )
}

export default Footer