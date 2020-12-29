import React from 'react'
import AudioContextSetup from './AudioContextSetup'
import TestP5 from './testp5'
import './p5.css'

function App() {
  return (
    <div className='Piano'>
      <AudioContextSetup />
      <TestP5 />
    </div>
  );
}

export default App
