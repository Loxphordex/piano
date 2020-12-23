import React from 'react'
import Sketch from 'react-p5'

export default function TestP5(props) {
  let w = window.innerWidth
  let h = window.innerHeight

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(w, h).parent(canvasParentRef)
  }

  const draw = (p5) => {
    if (p5.mouseIsPressed) {
      p5.fill(0)
    } else {
      p5.fill(255)
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80)
  }

  return <Sketch setup={setup} draw={draw} />
}