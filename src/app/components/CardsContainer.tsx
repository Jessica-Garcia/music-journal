import React from 'react'

interface CardsContainerProps {
  children: React.ReactNode
}

export default function CardsContainer({ children }: CardsContainerProps) {
  return (
    <div className="flex gap-[30px] border-2 border-solid border-red-500 pr-[30px]">
      {children}
    </div>
  )
}
