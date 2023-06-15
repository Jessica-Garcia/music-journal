import React from 'react'

export default function LargeMusicalObject() {
  return (
    <div className="flex w-full max-w-[19rem] flex-col border-4 border-solid border-green-500">
      <div className="h-[200px] w-[100%] border-2 border-solid border-green-50 object-cover">
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
