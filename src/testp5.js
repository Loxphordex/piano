import React from 'react'
import Sketch from 'react-p5'

export default function TestP5(props) {
  let w = window.innerWidth
  let h = window.innerHeight

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(w, h).parent(canvasParentRef)
    p5.frameRate(10)
  }

  const draw = (p5) => {
    let randX = Math.random() * (w / 4)
    let randY = Math.random() * (h / 4)
    if (p5.keyIsPressed) {
      p5.ellipse(randX, randY, 80, 80)
    }
  }

  return <Sketch setup={setup} draw={draw} />
}