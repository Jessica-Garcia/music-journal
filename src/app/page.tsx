'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Images {
  url: string
}
interface PlaylistProps {
  id: string
  name: string
  images: Images[]
  href: string
  tracks: {
    href: string
    total: number
  }
}

export default function Home() {
  const [playlists, setPlaylists] = useState<PlaylistProps[]>([])

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin')
    },
  })

  async function handleSignOutSpotify() {
    await signOut({ callbackUrl: '/signin' })
  }

  console.log(session)
  useEffect(() => {
    async function f() {
      if (session) {
        const response = await fetch(
          'https://api.spotify.com/v1/me/playlists',
          {
            headers: {
              Authorization: `Bearer ${session.data?.accessToken}`,
            },
          },
        )
        const data = await response.json()
        setPlaylists(data.items)
      }
    }
    f()
  }, [session])
  return (
    <div className=" mx-auto my-0 flex max-w-6xl flex-col gap-7 bg-gray-900">
      <h1 className="bg-white">Logged In</h1>
      <button className="font-title" onClick={handleSignOutSpotify}>
        Sair
      </button>

      <Image
        src={session.data?.user?.image || ''}
        width={100}
        height={100}
        alt="Picture of the user"
        className="h-12 w-12 rounded-full"
        priority
      />

      <div>
        {playlists &&
          playlists.map((playlist) => {
            return (
              <div key={playlist.id}>
                <div>{playlist.name}</div>
                <Image
                  src={playlist?.images[0]?.url}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
