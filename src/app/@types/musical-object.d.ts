import { TrackObject } from './track-object'

export interface ImageObject {
  url: string
  height?: number
  width?: number
}

export interface Genre {
  genre: string
}

export interface Artist {
  id?: string
  name: string
  type?: string
  genres?: Genre[]
  href?: string
  images?: ImageObject[]
  uri?: string
}

export interface AlbumObject {
  id?: string
  album_type?: string
  images?: ImageObject[]
  name: string
  type: string
  genres?: Genre[]
  href?: string
  total_tracks?: number
  uri?: string
  artists?: Artist[]
  items?: TrackObject[]
  release_date?: string
}

export interface User {
  id?: string
  images?: ImageObject[]
  display_name?: string
}

/* export interface Playlist {
  id: string
  href: string
  images: ImageObject[]
  tracks: TrackObject[]
} */
