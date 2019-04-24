export interface IMovieCast {
    profilePath: string,
    id: number,
    name: string,
    character: string,
}

export interface IMovie {
    id: number,
    posterPath: string,
    mediaType: string,
    overview: string,
    title: string,
    cast: IMovieCast[]
}
