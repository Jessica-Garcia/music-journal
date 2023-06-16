import React from 'react'

export default function SmallMusicalObject() {
  return (
    <div className="flex border-2 border-solid border-blue-300">
      <div className="h-[80px] w-[120px] rounded-md border-2 border-solid border-green-400">
        Imagem
      </div>
      <div className="flex w-[90%] flex-col border-2 border-solid border-green-500">
        <h2>Título</h2>
        <span className="flex flex-row flex-wrap gap-2">
          <strong>Palavra</strong>
          <strong>Palavra</strong>
        </span>
      </div>
    </div>
  )
}
