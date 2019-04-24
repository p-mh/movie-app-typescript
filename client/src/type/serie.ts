export interface ISeason {
    id: number,
    name: string,
    overview: string,
    posterPath: string,
    seasonNumber: number,
    airDate: string,
    episodeCount: number,
}

export interface ISerie {
    id: number,
    overview: string
    posterPath: string,
    mediaType: string,
    title: string,
    seasons: ISeason[]
}