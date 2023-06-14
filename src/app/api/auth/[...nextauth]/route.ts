import NextAuth, { Account, Session, TokenSet, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import SpotifyProvider from 'next-auth/providers/spotify'

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
const queryParamString = new URLSearchParams(params).toString()

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`

const refreshAccessToken = async (token: JWT) => {
  try {
    const params = new URLSearchParams()
    params.append('grant_type', 'refresh_token')
    params.append('refresh_token', token.refreshToken!)
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
    const tokens: TokenSet = await response.json()

    if (!response.ok) throw tokens
    return {
      ...token,
      accessToken: tokens.access_token,
      expiresAt: Math.floor(Date.now() / 1000 + 60),
      refreshToken: tokens.refresh_token ?? token.refreshToken,
    }
  } catch (error) {
    console.error('Error refreshing access token', error)
    return { ...token, error: 'RefreshAccessTokenError' as const }
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
      user,
    }: {
      token: JWT
      account: Account | null
      user: User
    }): Promise<JWT> {
      if (account && user) {
        return {
          accessToken: account.access_token!,
          expiresAt: Math.floor(Date.now() / 1000 + 60), //
          refreshToken: account.refresh_token!,
          user,
        }
      }

      if (Date.now() < 1000 * token.expiresAt!) {
        return token
      }

      return await refreshAccessToken(token)
    },

    async session({
      session,
      token,
    }: {
      session: Session
      token: JWT
    }): Promise<Session> {
      session.user = token.user
      session.accessToken = token.accessToken
      session.error = token.error
      return session
    },
  },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
