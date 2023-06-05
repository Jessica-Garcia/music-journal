import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

export const authOption = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID || '',
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/',
  },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
