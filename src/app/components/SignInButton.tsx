'use client'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

export const SignInButton = () => {
  const session = useSession()
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectSpotify() {
    await signIn('spotify', { callbackUrl: '/' })
  }

  async function handleSignOutSpotify() {
    await signOut()
  }

  return (
    <div className="flex gap-4">
      {isSignedIn ? (
        <>
          <button className="font-title" onClick={handleSignOutSpotify}>
            Sair
          </button>
          <Image
            src={session.data.user?.image!}
            width={100}
            height={100}
            alt="Picture of the author"
            className="h-12 w-12 rounded-full"
            priority
          />
        </>
      ) : (
        <button
          className="h-12 w-44 rounded-3xl bg-yellow-400 p-2 font-title text-lg font-extrabold text-gray-700"
          onClick={handleConnectSpotify}
        >
          Fazer Login
        </button>
      )}
    </div>
  )
}
