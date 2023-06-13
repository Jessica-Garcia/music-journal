'use client'
import { Music } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  async function handleConnectSpotify() {
    await signIn('spotify', { callbackUrl: '/' })
  }

  return (
    <>
      <div className=" mx-auto my-0 flex h-screen max-w-6xl flex-col items-center justify-center gap-7 bg-gray-900 ">
        <div className="h-35 flex w-full items-center justify-center">
          <h1 className="mt-5 flex h-4/5 w-full items-center justify-center font-alt text-6xl uppercase tracking-widest text-green-500">
            Diário de Músicas
          </h1>
        </div>
        <div className="mt-8 flex h-[500px] w-[500px] flex-col rounded-full border-2 border-solid border-green-500 bg-gray-700 p-5">
          <div className="flex h-4/5 flex-col items-center justify-between">
            <div className="absolute right-1/2 top-1/2 h-[288px] w-[400px] -translate-y-1/4 translate-x-1/2 rounded-full bg-gray-800 blur-full" />
            <h1 className="mt-16 flex w-4/5 items-center justify-center text-center font-text text-2xl font-bold text-green-500 drop-shadow-lg">
              Construa o seu diário com gêneros, músicas e artistas favoritos!
            </h1>
            <div className="flex w-1/2 items-center justify-between">
              <strong>
                <Music size={40} className="text-green-500 drop-shadow-lg" />
              </strong>
              <span className="h-16 w-16 rounded-full border-2 border-solid border-green-500 bg-gray-900"></span>
              <strong>
                <Music size={40} className="text-green-500 drop-shadow-lg" />
              </strong>
            </div>
            <button
              className="relative z-50 h-12 w-44 cursor-pointer rounded-3xl border-2 border-solid border-green-500 bg-transparent p-2 font-title text-lg font-extrabold text-green-500 drop-shadow-lg transition-colors hover:bg-green-500 hover:text-white"
              onClick={handleConnectSpotify}
            >
              Fazer Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
