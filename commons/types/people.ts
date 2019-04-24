interface IBasePeople {
  id: number;
  biography: string;
}

interface IBasePeopleCast {
  id: number;
  character: string;
  title: string;
}

export interface IUnformatedPeopleCast extends IBasePeopleCast {
  poster_path: string;
}

export interface IPeopleCast extends IBasePeopleCast {
  posterPath: string;
}

export interface IUnformaredPeople extends IBasePeople {
  profile_path: string;
  media_type: string;
  name: string;
  cast: IUnformatedPeopleCast[];
}

export interface IPeople extends IBasePeople {
  profilePath: string;
  mediaType: string;
  title: string;
  cast: IPeopleCast[];
}
