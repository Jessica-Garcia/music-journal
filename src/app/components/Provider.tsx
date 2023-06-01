'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface ProvProps {
  children: React.ReactNode
}

export const Provider = ({ children }: ProvProps) => {
  return <SessionProvider>{children}</SessionProvider>
}
