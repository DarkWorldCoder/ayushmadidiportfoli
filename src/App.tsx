
import { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import OverlayAnimation from './components/OverlayAnimation/OverlayAnimation'
import Work from './components/Work/Work'

function App() {
  
  const [showOverlay,setShowOverlay] = useState<boolean>(true)

  useEffect(()=>{
    if(showOverlay){
      document.body.style.overflow="hidden"
    }
    // setTimeout(()=>{
    //   setShowOverlay(false)
    //   document.body.style.overflow="auto"
    // },5000)
  },[])
  const hideOverlay= ()=>{
    setShowOverlay(false)
  }
  return (
   <div className='app'>
    {showOverlay &&  <OverlayAnimation
    hideOverlay={hideOverlay}
    /> }
   
    <Navbar />
    <Hero />
    <Work />
    <Footer />
   </div>
  )
}

export default App
