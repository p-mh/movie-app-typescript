export interface IPeopleCast {
    posterPath: string,
    id: number,
    character: string,
    title: string,
}


export interface IPerson {
    id: number,
    biography: string,
    profilePath: string,
    mediaType: string,
    title: string,
    cast: IPeopleCast[]
}

