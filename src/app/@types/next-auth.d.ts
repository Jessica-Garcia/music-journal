import { Account, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export declare module 'next-auth' {
  export interface Session {
    accessToken?: Account.accessToken
  }
}

export declare module 'next-auth/jwt' {
  export interface JWT {
    accessToken?: Account.accessToken
    accessTokenExpires?: Account.expires_at
  }
}

export { JWT, Session }
