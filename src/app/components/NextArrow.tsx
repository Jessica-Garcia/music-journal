import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function NextArrow({ onClick }: any) {
  return (
    <div className="absolute -top-[45px] right-[28px]" onClick={onClick}>
      <div className="grid h-[35px] w-[35px] cursor-pointer place-items-center rounded-full border-[1px] border-solid border-green-500">
        <ChevronRight color="#bebebf" />
      </div>
    </div>
  )
}
