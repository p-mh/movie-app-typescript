export interface IMovie {
    id: number,
    title: string,
    overview: string,
    posterPath: string,
}

export interface IMovieSerieOrPeople {
    id: number,
    posterPath: string,
    mediaType: string,
    overview: string,
    title: string,
}