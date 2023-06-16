import { AlbumObject, Artist } from './musical-object'

export interface TrackObject {
  id: string
  href?: string
  type: string
  name: string
  artists: Artist[]
  album?: AlbumObject
}
