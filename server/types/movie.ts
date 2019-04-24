interface IBaseMovie {
  id: number;
  title: string;
  overview: string;
}

export interface IUnformatedMovie extends IBaseMovie {
  poster_path: string;
  media_type: string;
  cast: IUnformatedMovieCast[];
}

export interface IMovie extends IBaseMovie {
  posterPath: string;
  mediaType: string;
  cast: IMovieCast[];
}

interface IBaseMovieCast {
  id: number;
  name: string;
  character: string;
}

export interface IUnformatedMovieCast extends IBaseMovieCast {
  profile_path: string;
}

export interface IMovieCast extends IBaseMovieCast {
  profilePath: string;
}
