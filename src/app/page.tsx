import { Provider } from './components/Provider'
import { SignInButton } from './components/SignInButton'

export default function Home() {
  return (
    <Provider>
      <div className="mt-5 flex justify-end gap-8 border-8 border-solid border-white">
        <h1 className="font-alt">Hello</h1>
        <h2 className="font-title">Hello World</h2>
        <p className="font-text">Hello</p>
        <SignInButton />
      </div>
    </Provider>
  )
}
