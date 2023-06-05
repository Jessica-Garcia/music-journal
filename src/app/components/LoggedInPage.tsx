import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function LoggedInPage() {
  const session = useSession()

  async function handleSignOutSpotify() {
    await signOut()
  }
  console.log(session.data)
  return (
    <div className=" mx-auto my-0 flex h-screen max-w-6xl flex-col items-center justify-center gap-7 bg-gray-900">
      <h1>Logged in page</h1>
      <button className="font-title" onClick={handleSignOutSpotify}>
        Sair
      </button>
      <Image
        src={session.data?.user?.image!}
        width={100}
        height={100}
        alt="Picture of the author"
        className="h-12 w-12 rounded-full"
        priority
      />
    </div>
  )
}
