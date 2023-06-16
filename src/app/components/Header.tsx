import { LogOut, SearchIcon } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface headerProps {
  session: Session
}

export default function Header({ session }: headerProps) {
  async function handleSignOutSpotify() {
    await signOut({ callbackUrl: '/signin' })
  }
  return (
    <header className="fixed left-1/2 top-0 z-50 flex h-[15vh] w-11/12 max-w-7xl -translate-x-1/2 items-center justify-between gap-7 bg-gray-900 p-8">
      <Link
        href="/"
        className="max-w-[200px] p-4 font-alt text-xl uppercase tracking-[0.15em] text-green-400"
      >
        Diário de Músicas
      </Link>
      <nav className="flex w-2/3 items-center justify-end gap-8 p-4 tracking-[0.15em]">
        <Link
          href="/"
          className="font-text text-xl font-bold text-gray-50 transition-all hover:cursor-pointer hover:text-[22px] hover:text-green-600"
        >
          Início
        </Link>
        <Link
          href="#"
          className="font-text text-xl font-bold text-gray-50 transition-all hover:cursor-pointer hover:text-[22px] hover:text-green-600"
        >
          Biblioteca
        </Link>
        <span className="flex items-center gap-4 rounded-3xl border-[1px] border-solid border-green-500 font-text text-xl font-bold hover:cursor-default">
          <SearchIcon className="ml-2 inline text-gray-50" size={20} />
          <input
            type="text"
            placeholder="Pesquisar"
            className="h-[38px] w-[200px] bg-transparent placeholder-gray-100 outline-0 placeholder:font-text placeholder:tracking-[0.15em] hover:cursor-default hover:border-gray-50 hover:text-[22px] hover:placeholder:text-green-500 focus:outline-none"
          />
        </span>
      </nav>
      <div className="flex items-center gap-1 p-4">
        <button
          className="flex h-[40px] w-[90px] cursor-pointer items-center justify-center gap-1 rounded-3xl border-[1px] border-solid border-transparent bg-transparent p-2 font-text text-base font-bold tracking-[0.15em] text-gray-50 transition hover:border-green-700 hover:bg-green-500 hover:text-[17px] hover:text-white"
          onClick={handleSignOutSpotify}
        >
          <LogOut size={17} />
          Sair
        </button>
        <div className="grid h-[45px] w-[45px] place-items-center overflow-hidden rounded-full border-[1px] border-solid border-green-500">
          <Image
            src={session.user?.image || ''}
            priority
            width={43}
            height={43}
            alt="Picture of the user"
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}
