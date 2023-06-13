/* import { SessionContextValue } from 'next-auth/react'

interface DashboardProps {
  session: SessionContextValue
}

export default function Dashboard({session, onSignOut}: DashboardProps) {

    return(
<div className=" mx-auto my-0 flex max-w-6xl flex-col gap-7 bg-gray-900">
      <h1 className="bg-white">Logged In</h1>
      <button className="font-title" onClick={() => onSignOut}>
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
 */
