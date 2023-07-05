import { LogOut, SearchIcon } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import headset from '../../../public/fone-verde.png'
interface headerProps {
  session: Session
}

export default function Header({ session }: headerProps) {
  async function handleSignOutSpotify() {
    await signOut({ callbackUrl: '/signin' })
  }
  return (
    <header className="fixed left-1/2 top-0 z-50 flex h-[15vh] w-[100%] max-w-7xl -translate-x-1/2 items-center justify-between bg-gray-900 p-4">
      <div className="flex items-center gap-2">
        <Image
          src={headset}
          width={100}
          height={100}
          alt=""
          className="w-[1.5rem] brightness-200 contrast-125"
        />

        <Link
          href="/"
          className=" font-alt text-[0.7rem] uppercase tracking-[0.15em] text-green-200 brightness-200 contrast-125"
        >
          Diário de <span className="block">Músicas</span>
        </Link>
      </div>
      <nav className="hidden p-4 tracking-[0.15em] sm:flex sm:items-center sm:justify-end sm:gap-8">
        <Link
          href="/"
          className="font-text font-bold text-gray-50 transition-all hover:cursor-pointer hover:text-[22px] hover:text-green-600"
        >
          Início
        </Link>
        <Link
          href="#"
          className="font-text font-bold text-gray-50 transition-all hover:cursor-pointer hover:text-[22px] hover:text-green-600"
        >
          Biblioteca
        </Link>
        <span className="flex items-center gap-4 rounded-3xl border-[1px] border-solid border-green-500 font-text text-xl font-bold hover:cursor-default">
          <SearchIcon className="ml-2 inline text-gray-50" size={20} />
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-transparent placeholder-gray-100 outline-0 placeholder:font-text placeholder:tracking-[0.15em] hover:cursor-default hover:border-gray-50 hover:text-[22px] hover:placeholder:text-green-500 focus:outline-none"
          />
        </span>
      </nav>
      <div className="flex items-center gap-5">
        <SearchIcon className="w-5" />
        <div className="h-8 w-8 overflow-hidden rounded-full border-[1px] border-solid border-green-500">
          <Image
            src={session.user?.image || ''}
            priority
            width={43}
            height={43}
            alt="Picture of the user"
            className="object-cover"
          />
        </div>
        <button
          className="hidden cursor-pointer items-center justify-center gap-1 font-text text-sm font-bold tracking-[0.15em] text-gray-50 transition hover:border-green-700 hover:bg-green-500 hover:text-[17px] hover:text-white"
          onClick={handleSignOutSpotify}
        >
          <LogOut className="w-4" />
          <span className="hidden">Sair</span>
        </button>
      </div>
    </header>
  )
}
