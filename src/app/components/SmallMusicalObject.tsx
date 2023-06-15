import React from 'react'

export default function SmallMusicalObject() {
  return (
    <div className="flex border-2 border-solid border-green-300">
      <div className="h-[80px] w-[80px] border-2 border-solid border-green-400">
        Imagem
      </div>
      <div className="flex flex-col border-2 border-solid border-green-500">
        <h2>Título</h2>
        <span className="flex flex-row gap-4">
          <strong>Palavra</strong>
          <strong>Palavra</strong>
        </span>
      </div>
    </div>
  )
}
