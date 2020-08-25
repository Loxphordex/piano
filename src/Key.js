import React from 'react'

export default function Key({
  index,
  stroke
}) {
  console.log(index)
  return (
    <div
      key={index}
      className={`key key-${stroke}`}>
      
    </div>
  )
}