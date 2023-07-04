'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import headset from '../../../public/fone-verde.png'

export default function SignInPage() {
  async function handleConnectSpotify() {
    await signIn('spotify', { callbackUrl: '/' })
  }

  return (
    <>
      <div className="mx-auto flex min-h-screen flex-col items-center gap-6 bg-gray-900 bg-cover p-4 pt-6">
        <div className="">
          <h1 className="absolute right-1/2 top-[5%] z-40 flex w-full -translate-y-[5%] translate-x-1/2 justify-center text-center font-alt text-[1.45rem] uppercase tracking-widest text-green-200 brightness-200 contrast-150 sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl">
            Diário de Músicas
          </h1>
        </div>
        <h1 className="border-red text-md absolute right-1/2 top-[20%] z-30 w-4/5 max-w-[18rem] -translate-y-[20%] translate-x-1/2 text-center text-gray-100 brightness-125 drop-shadow-lg md:max-w-[22rem] md:text-lg xl:max-w-[100%] xl:text-xl 2xl:text-3xl tall:top-[26%]">
          Construa o seu diário com gêneros, músicas e artistas favoritos!
        </h1>
        <div className="absolute right-1/2 top-1/2 z-10 mt-2 flex w-[80%] -translate-y-1/2 translate-x-1/2 flex-col items-center justify-center overflow-hidden lg:w-[100%]">
          <Image
            src={headset}
            width={400}
            height={400}
            alt=""
            className="w-[100%] max-w-[13.5rem] brightness-125 sm:max-w-[17rem] xl:max-w-[18rem] 2xl:max-w-[25rem] tall:max-w-[28rem] tall:opacity-20"
          />
        </div>
        <button
          className="absolute bottom-[20%] right-1/2 z-50 w-32 translate-x-1/2 cursor-pointer rounded-3xl border-2 border-solid border-green-200 bg-transparent p-1 font-title text-lg font-bold tracking-widest text-green-200 brightness-200 drop-shadow-lg transition-colors hover:bg-green-200 hover:text-white xl:bottom-[15%] xl:h-12 xl:w-36 2xl:bottom-[13%] 2xl:h-14 2xl:w-[12rem] 2xl:text-2xl tall:bottom-[22%]"
          onClick={handleConnectSpotify}
        >
          Login
        </button>
        <small className="absolute bottom-[5%] right-1/2 z-20 w-[70%] max-w-[18rem] translate-x-1/2 text-center md:max-w-[20rem] md:text-base xl:max-w-[100%] 2xl:bottom-[4%] 2xl:text-xl">
          Para fazer login é necessário ter uma conta no Spotify
        </small>
      </div>
    </>
  )
}
