import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./OverlayAnimation.scss"
type Props = {

    hideOverlay:()=>void
}

const OverlayAnimation = (props: Props) => {
  var progressValue = 0
  const progressEnd = 100
  const ref = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
let progress = setInterval(()=>{
         progressValue +=10
        
        if(ref.current){
            
            ref.current.style.background = `conic-gradient(white ${progressValue*3.6}deg, black 0deg)`
        }
        if(progressValue>=progressEnd){
          if(ref.current && mainRef.current){
            mainRef.current.classList.add("transition")
            ref.current.style.display ="none"

          }
            props.hideOverlay()
            document.body.style.overflow="auto"
            clearInterval(progress)
        }
    },200)
   
  
 
  return (
    <div 
    ref={mainRef}
    className='main_wrap'>

   
    <div 
    className='overlay_animation'>
        <div 
        ref={ref}
        className='overlay_content'>
           
        </div>
    </div>
    </div>
  )
}

export default OverlayAnimation