import React, { useState } from 'react'
import Keyboard from './Keyboard'

export default function AudioContextSetup() {
  const AudioContext = window.AudioContext || window.webkitAudioContext || null
  const [ctx] = useState(new AudioContext())
  return (
    <div className='audio-context-container'>
      <Keyboard ctx={ctx} />
    </div>
  )
}