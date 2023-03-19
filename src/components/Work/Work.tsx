import React from 'react'
import work_main from "../../assets/project_leanq.svg"
import project_ebs from "../../assets/project_ebs.svg"
import project_bluemuf from "../../assets/project_bluemuf.svg"
import granthi_app from "../../assets/granthi_app.svg"
import mobile_app from "../../assets/116.svg"
import petra_app from "../../assets/petra.svg"
import "./Work.scss"
const Work = () => {
  return (
    <div className='work_container container'>
        <div className='work_main'>
            <img src={work_main} />
            <div className='work_info'>
                <h1>Lean Q Digitals</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore cumque quasi voluptates corporis nemo! Repellendus autem et veritatis quod quis.</p>
                <a href='https://leanq.digital'>View Project</a> 
            </div>
        </div>
        <div className='work_other'>
            <img src={project_ebs} />
            <div className='work_info'>
                <h1>Shop EBS</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore cumque quasi voluptates corporis nemo! Repellendus autem et veritatis quod quis.</p>
                <a href='https://leanq.digital'>View Project</a> 
            </div>
        </div>
        <div className='work_other work_reverse'>
            <img src={project_bluemuf} />
            <div className='work_info'>
                <h1>Blue Muffin Studio</h1>
                <h3>Logo, Branding, Design System, Website</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore cumque quasi voluptates corporis nemo! Repellendus autem et veritatis quod quis.</p>
                <a href='https://leanq.digital'>View Project</a> 
            </div>
        </div>


        {/* work mobile app */}
        <div className='mobile_container container'>
            <h1>Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. Lorem Ipsum has been the industry's</h1>

       <div className='mobile_app'>
        <div className='app_wrapper wrap_first'>
        <img src={granthi_app} />
         <h2>Granthi App</h2>
         <h4>Mobile Application</h4>
         <a>View Project</a>
        </div>
        <div className='app_wrapper wrap_second'>
        <img src={mobile_app} />
         <h2>116 App</h2>
         <h4>Mobile Application</h4>
         <a>View Project</a>
         
        </div>
        <div className='app_wrapper'>
        <img src={petra_app} />
         <h2>Petra App</h2>
         <h4>Mobile Application</h4>
         <a>View Project</a>
         
        </div>
       </div>
        </div>
    </div> 
  )
}

export default Work