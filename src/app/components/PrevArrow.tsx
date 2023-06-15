import { ChevronLeft } from 'lucide-react'
import React from 'react'

export default function PrevArrow({ onClick }: any) {
  return (
    <div className="absolute -top-[45px] right-[70px]" onClick={onClick}>
      <div className="grid h-[35px] w-[35px] cursor-pointer place-items-center rounded-full border-[1px] border-solid border-green-500">
        <ChevronLeft color="#bebebf" />
      </div>
    </div>
  )
}
