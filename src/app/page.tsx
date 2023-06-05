'use client'
import { useSession } from 'next-auth/react'
import LoginPage from './components/LoginPage'
import LoggedInPage from './components/LoggedInPage'

export default function Home() {
  const session = useSession()
  const isSignedIn = session.status === 'authenticated'

  return (
    <>
      {isSignedIn ? (
        <>
          <LoggedInPage />
        </>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </>
  )
}
