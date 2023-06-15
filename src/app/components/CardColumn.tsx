import React from 'react'
import SmallMusicalObject from './SmallMusicalObject'

export default function CardColumn() {
  return (
    <div className="flex flex-col border-2 border-solid border-red-400">
      <SmallMusicalObject />
      <SmallMusicalObject />
      <SmallMusicalObject />
      <SmallMusicalObject />
    </div>
  )
}
