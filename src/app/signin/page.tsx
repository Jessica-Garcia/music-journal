'use client'
import { Music } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  async function handleConnectSpotify() {
    await signIn('spotify', { callbackUrl: '/' })
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 p-4 pt-6">
        <div className="">
          <h1 className="absolute right-1/2 top-[5%] flex w-full -translate-y-[5%] translate-x-1/2 justify-center  font-alt text-xl uppercase tracking-widest text-green-500">
            Diário de Músicas
          </h1>
        </div>
        <h1 className="border-red text-md absolute right-1/2 top-[20%] w-4/5 -translate-y-[20%] translate-x-1/2 text-center text-gray-100 drop-shadow-lg">
          Construa o seu diário com gêneros, músicas e artistas favoritos!
        </h1>
        <div className="absolute right-1/2 top-1/2 mb-8 mt-6 flex h-60 w-60 -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center rounded-full border-2 border-solid border-green-500 bg-gray-700 p-5">
          <div className="flex h-4/5 w-4/5 flex-col items-center justify-between">
            {/* <div className="absolute right-1/2 top-1/2 h-[288px] w-[400px] -translate-y-1/4 translate-x-1/2 rounded-full bg-gray-800 blur-full" /> */}

            <h1 className="flex w-full justify-center text-lg font-bold text-green-500 drop-shadow-lg">
              Aperte o Play
            </h1>
            <div className="flex w-full items-center justify-between">
              <strong>
                <Music className=" text-green-500 drop-shadow-lg" />
              </strong>
              <span className="h-14 w-14 rounded-full border-2 border-solid border-green-500 bg-gray-900"></span>
              <strong>
                <Music className=" text-green-500 drop-shadow-lg" />
              </strong>
            </div>
            <button
              className="text-md relative w-20 cursor-pointer rounded-3xl border-2 border-solid border-green-500 bg-transparent p-1 font-title font-extrabold text-green-500 drop-shadow-lg transition-colors hover:bg-green-500 hover:text-white"
              onClick={handleConnectSpotify}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
