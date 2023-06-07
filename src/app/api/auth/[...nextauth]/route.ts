import NextAuth, { Account, User } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { JWT, Session } from '../../../@types/next-auth'

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-library-read',
  'user-library-modify',
].join(',')

const params = {
  scope: scopes,
}

const LOGIN_URL =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams(params).toString()

const refreshAccessToken = async (token: any) => {
  const params = new URLSearchParams()
  params.append('grant_type', 'refresh_token')
  params.append('refresh_token', token.refreshToken)
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(
          process.env.SPOTIFY_CLIENT_ID +
            ':' +
            process.env.SPOTIFY_CLIENT_SECRET,
        ).toString('base64'),
    },
    body: params,
  })
  const data = await response.json()
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? token.refreshToken,
    accessTokenExpires: Date.now() + data.expires_in * 1000,
  }
}

export const authOption = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
      authorization: LOGIN_URL,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({
      token,
      account,
    }: {
      token: JWT
      account: Account | null
    }): Promise<JWT> {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpires = account.expires_at
        return token
      }

      if (Date.now() < token.accessTokenExpires * 1000) {
        return token
      }

      return refreshAccessToken(token)
    },

    async session({
      session,
      token,
    }: {
      session: Session
      token: JWT
      user: User
    }): Promise<Session> {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    },
  },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
