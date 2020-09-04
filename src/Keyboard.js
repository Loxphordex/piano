import React, { useState, useRef } from 'react'
import playSound from './playSound'
import Key from './Key'
import { keyStrokes, keyCodes, mappedKeysAndCodes } from './keyCodes'
import './styles/keyboard.css'
import './styles/keyBounce.css'
import './styles/keyBasics.css'
import './styles/keyboardContainer.css'

export default function Keyboard({ctx}) {
  const [downKeys, setDownKeys] = useState([])
  const [areHandlersSet, setAreHandlersSet] = useState(false)
  const downKeysRef = useRef(downKeys)

  function updateDownKeys(keys) {
    downKeysRef.current = keys
    setDownKeys(keys)
  }

  if (ctx && !areHandlersSet) {
    window.addEventListener('keydown', function(e) {
      e.preventDefault()
      e.stopPropagation()
      const code = e.keyCode
      const alreadyHasCode = downKeysRef.current.find(key => key === code)
      if (!alreadyHasCode) {
        updateDownKeys([...downKeysRef.current, code])
        playSound(downKeysRef.current[downKeysRef.current.length - 1], ctx)
      }
    })

    window.addEventListener('keyup', function(e) {
      if (downKeysRef.current) {
        updateDownKeys(downKeysRef.current.filter(key => key !== e.keyCode))
      }
    })
    setAreHandlersSet(true)
  }

  return (
    <div className='keyboard-container'>
      {setUpKeyboard()}
    </div>
  )

  function setUpKeyboard() {
    if (keyStrokes && keyCodes) {
      return keyStrokes.map((stroke, i) => {
        const isActive = () => checkIfKeyIsActive(stroke)
        return (
          <Key 
            key={i}
            index={`${i}-${stroke}`}
            stroke={stroke}
            isActive={isActive}
          />
        )
      })
    }
  }

  function checkIfKeyIsActive(stroke) {
    const isDown = downKeys.find(key => key === mappedKeysAndCodes()[stroke])
    return isDown ? 'key-active' : String()
  }
}