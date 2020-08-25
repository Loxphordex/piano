import React, { useState } from 'react'
import playSound from './playSound'
import Key from './Key'
import { keyStrokes, keyCodes } from './keyCodes'
import './styles/keyboard.css'
import './styles/keyBounce.css'
import './styles/keyBasics.css'

export default function Keyboard({ctx}) {
  const [downKeys, setDownKeys] = useState(null)

  if (ctx) {
    window.addEventListener('keydown', function(e) {
      playSound(e, ctx)
    })
  }

  return (
    <div className='keyboard-container'>
      {setUpKeyboard()}
    </div>
  )

  function setUpKeyboard() {
    if (keyStrokes && keyCodes) {
      return keyStrokes.map((stroke, i) => {
        return (
          <Key 
            key={i}
            index={`${i}-${stroke}`}
            stroke={stroke} 
          />
        )
      })
    }
  }
}