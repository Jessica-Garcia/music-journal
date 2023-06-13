'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from './components/Header'

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
    <>
      {session.status === 'loading' ? (
        <div className=" mx-auto my-0 flex w-11/12 flex-col gap-7 bg-gray-900">
          <h1>Carregando...</h1>
        </div>
      ) : (
        <>
          <Header session={session.data} />
          <main className=" mx-auto my-0 flex w-11/12 flex-col gap-7 bg-gray-900">
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
          </main>
        </>
      )}
    </>
  )
}
