import React from 'react'
import work_main from "../../assets/project_leanq.png"
import project_ebs from "../../assets/project_ebs.png"
import project_bluemuf from "../../assets/project_bluemuf.png"
import granthi_app from "../../assets/granthi_app.svg"
import mobile_app from "../../assets/116.png"
import petra_app from "../../assets/petra.svg"
import "./Work.scss"
import {motion} from "framer-motion"
const Work = () => {
  return (
    <div className='work_container container'>
        <motion.div
         whileInView={{ opacity: [0, 1],y:[-100,0]}}
         transition={{ duration: 0.4}}
        className='work_main'>
            <img src={work_main} />
            <div className='work_info'>
                <h1>Lean Q Digitals</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>A startup ccompany  that provides software solutions and services</p>
                <a href='https://leanq.digital'>View Project</a> 
            </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: [0, 1],x:[-200,0]}}
        transition={{ duration: 0.6 }}
        className='work_other'>
            <img src={project_ebs} />
            <div className='work_info'>
                <h1>Shop EBS</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>ShopEbs is one of ecommerce website that let user buy Home appliances </p>
                <a href='https://shopebs.bluemuffinstudio.com.au/'>View Project</a> 
            </div>
        </motion.div>
        <motion.div 
         whileInView={{ opacity: [0, 1],x:[200,0]}}
         transition={{ duration: 0.6 }}
        className='work_other work_reverse'>
            <img src={project_bluemuf} />
            <div className='work_info'>
                <h1>Blue Muffin Studio</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>Bluemuffin studio is one of the digital agency that help you promote your business</p>
                <a href='https://bluemuffinstudio.com.au/'>View Project</a> 
            </div>
        </motion.div>


        {/* work mobile app */}
        <motion.div
           whileInView={{ opacity: [0, 1],y:[-100,0]}}
           transition={{ duration: 0.6 }}
        className='mobile_container container'>
            <h1>Mobile App I have worked on</h1>

       <div className='mobile_app'>
        <div className='app_wrapper wrap_first'>
        <img src={granthi_app} />
         <h2>Granthi App</h2>
         <h4>Mobile Application</h4>
         <a href='https://play.google.com/store/apps/details?id=com.codecrewz.granthi'>View Project</a>
        </div>
        <div className='app_wrapper wrap_second'>
        <img src={mobile_app} />
         <h2>1166 App</h2>
         <h4>Mobile Application</h4>
         <a href="https://1166.leanq.com.np/">View Project</a>
         
        </div>
        <div className='app_wrapper'>
        <img src={petra_app} />
         <h2>Petra App</h2>
         <h4>Mobile Application</h4>
         <a href="https://petravpn.codecrewz.com/">View Project</a>
         
        </div>
       </div>
        </motion.div>
    </div> 
  )
}

export default Work