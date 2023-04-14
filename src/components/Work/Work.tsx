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
                <p>LeanQ is a software company that focuses on creating software solutions, services, and goods. Lean q is centered on offering fresh concepts and a vision for upending industries or resolving particular issues by creating a minimal viable product.</p>
                <a href='https://leanq.digital'>View Project</a> 
            </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: [0, 1],x:[-100,0]}}
        transition={{ duration: 0.5 }}
        className='work_other'>
            <img src={project_ebs} />
            <div className='work_info'>
                <h1>Shop EBS</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>ShopEbs is an e-commerce website  platform that allows businesses to sell their products or services online. It is a website that provides a digital storefront where customers can browse, select, and purchase products or services. </p>
                <a href='https://shopebs.bluemuffinstudio.com.au/'>View Project</a> 
            </div>
        </motion.div>
        <motion.div 
         whileInView={{ opacity: [0, 1],x:[100,0]}}
         transition={{ duration: 0.4 }}
        className='work_other work_reverse'>
            <img src={project_bluemuf} />
            <div className='work_info'>
                <h1>Blue Muffin Studio</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>Blue Muffin Studio is a digital agency that offers digital marketing, branding, and web development services to help businesses establish and enhance their online presence, create digital marketing strategies, and build websites and apps.</p>
                <a href='https://bluemuffinstudio.com.au/'>View Project</a> 
            </div>
        </motion.div>


        {/* work mobile app */}
        <motion.div
           whileInView={{ opacity: [0, 1],y:[-100,0]}}
           transition={{ duration: 0.4 }}
        className='mobile_container container'>
            <h1>Explore some of the mobile application <br></br>I have worked on</h1>

       <div className='mobile_app'>
        <div className='app_wrapper wrap_first'>
        <img src={granthi_app} />
         <h2>Granthi App</h2>
         <h4>Mobile Application</h4>
         <a href='https://www.behance.net/gallery/120573563/Granthi-%28Cryptocurrency-App%29'>View Project</a>
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
         <a href="https://www.behance.net/gallery/120256725/Petra-%28-VPN-App-%29">View Project</a>
         
        </div>
       </div>
        </motion.div>
    </div> 
  )
}

export default Work