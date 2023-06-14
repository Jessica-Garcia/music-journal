'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'

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

  const fetchPlaylists = useCallback(async () => {
    if (session.data) {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: `Bearer ${session.data?.accessToken}`,
          },
        },
      )
      const data = await response.data
      setPlaylists(data.items)
    }
  }, [session])

  console.log(session)
  useEffect(() => {
    fetchPlaylists()
  }, [fetchPlaylists])
  return (
    <>
      {session.status === 'loading' ? (
        <div className=" mx-auto my-0 flex w-11/12 flex-col gap-7 bg-gray-900">
          <h1>Carregando...</h1>
        </div>
      ) : (
        <>
          <Header session={session.data} />
          <main className=" mx-auto mt-[15vh] flex w-11/12 flex-col items-center justify-center gap-7 bg-gray-900 p-8 pt-20">
            <h1 className="self-start p-6 pb-0 font-text text-3xl font-bold tracking-[0.12em]">
              Minhas Playlists
            </h1>
            <div className="flex flex-wrap-reverse items-center justify-center gap-8">
              {playlists &&
                playlists.map((playlist) => {
                  return (
                    <div key={playlist.id}>
                      <Image
                        src={playlist?.images[0]?.url}
                        width={200}
                        height={200}
                        alt=""
                        className="rounded-md border-[1px] border-solid border-green-500 "
                      />
                      <div className="mt-2 h-12 max-w-[200px] font-title">
                        {playlist.name ? (
                          <span>{playlist.name}</span>
                        ) : (
                          <span>No named</span>
                        )}
                      </div>
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
