import { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export declare module 'next-auth' {
  export interface Session {
    accessToken?: string
    user?: User
    error?: 'RefreshAccessTokenError'
  }
}

export declare module 'next-auth/jwt' {
  export interface JWT {
    accessToken?: string
    expiresAt?: number
    refreshToken?: string
    user?: User
    error?: 'RefreshAccessTokenError'
  }
}

export { JWT, Session }
