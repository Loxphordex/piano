import React from 'react'

export default function Key({
  index,
  stroke,
  isActive
}) {
  return (
    <div
      key={index}
      className={`key-${stroke} ${isActive()}`}>
    </div>
  )
}