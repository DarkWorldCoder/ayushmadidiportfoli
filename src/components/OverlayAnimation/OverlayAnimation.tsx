import React, { useEffect, useRef, useState } from 'react'
import "./OverlayAnimation.scss"
type Props = {

    hideOverlay:()=>void
}

const OverlayAnimation = (props: Props) => {
  var progressValue = 0
  const progressEnd = 100
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
   
    let progress = setInterval(()=>{
         progressValue +=3
        
        if(ref.current){
            
            ref.current.style.background = `conic-gradient(white ${progressValue*3.6}deg, black 0deg)`
        }
        if(progressValue>=progressEnd){
            clearInterval(progress)
            props.hideOverlay()
            document.body.style.overflow="auto"
        }
    },200)
   
  
  })
  return (
    <div className='overlay_animation'>
        <div 
        ref={ref}
        className='overlay_content'>
           
        </div>
    </div>
  )
}

export default OverlayAnimation