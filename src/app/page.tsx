import { Music } from 'lucide-react'
import { Provider } from './components/Provider'
import { SignInButton } from './components/SignInButton'

export default function Home() {
  return (
    <Provider>
      <div className="mx-auto my-0 flex h-screen max-w-6xl flex-col items-center justify-center gap-7 bg-gray-900">
        <div className="h-35 flex w-full items-center justify-center">
          <h1 className="mt-6 flex h-4/5 w-full items-center justify-center font-alt text-7xl uppercase tracking-widest text-yellow-400">
            Diário de Músicas
          </h1>
        </div>
        <div className="mt-8 flex h-[500px] w-[500px] flex-col rounded-full bg-gray-700 p-5">
          <div className="flex h-4/5 flex-col items-center justify-between">
            <div className="absolute right-1/2 top-1/2 h-[288px] w-[400px] -translate-y-1/4 translate-x-1/2 rounded-full bg-gray-700 blur-full" />
            <h1 className="mt-16 flex w-4/5 items-center justify-center text-center font-text text-2xl text-gray-50">
              Construa o seu diário com gêneros, músicas e artistas favoritos!
            </h1>
            <div className="flex w-1/2 items-center justify-between">
              <strong>
                <Music size={40} color="#eaeaea" />
              </strong>
              <span className="h-16 w-16 rounded-full bg-gray-900"></span>
              <strong>
                <Music size={40} color="#eaeaea" />
              </strong>
            </div>
            <SignInButton />
          </div>
        </div>
      </div>
    </Provider>
  )
}
