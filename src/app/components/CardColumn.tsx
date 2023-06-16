import React from 'react'

interface CardColumnProps {
  children: React.ReactNode
}

export default function CardColumn({ children }: CardColumnProps) {
  return (
    <div className="flex w-full max-w-[19rem] flex-col border-2 border-solid border-red-400">
      {children}
    </div>
  )
}
