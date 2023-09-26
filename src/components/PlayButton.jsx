import React, {useContext,  useState } from 'react'
import './playbutton.css'
import ThemeContext from '../context/ThemeContext'
const PlayButton = ({ message, children, onClick, onPlay, onPause }) => {
  // let playing = false  // don't use this approach; 
  const theme=useContext(ThemeContext)
  const [playing, setPlaying]=useState(false)
  const handleClick = (e) => {
    console.log(e)
    e.stopPropagation()
    // e.preventDefault()
    
    if (playing) onPause()
    else onPlay();

    // playing =! playing
    setPlaying(!playing)
  }
  return (
    <>

      <button className={theme} onClick={handleClick}>{children} : {playing ? '▶️' : ' ⏸️' }</button>

    </>
  )
}

export default PlayButton;