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

  console.log(session.data)

  return (
    <div className="flex w-1/3 gap-4">
      {isSignedIn ? (
        <>
          <button
            className="w-1/2 bg-purple-500"
            onClick={handleSignOutSpotify}
          >
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
        <button className="w-1/2 bg-purple-500" onClick={handleConnectSpotify}>
          Login
        </button>
      )}
    </div>
  )
}
