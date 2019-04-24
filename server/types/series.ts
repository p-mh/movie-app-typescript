interface IBaseSeason {
  id: number;
  name: string;
  overview: string;
}

export interface IUnformatedSeason extends IBaseSeason {
  poster_path: string;
  season_number: number;
  air_date: string;
  episode_count: number;
}

export interface ISeason extends IBaseSeason {
  posterPath: string;
  seasonNumber: number;
  airDate: string;
  episodeCount: number;
}

interface IBaseSerie {
  id: number;
  overview: string;
}

export interface IUnformatedSerie extends IBaseSerie {
  poster_path: string;
  media_type: string;
  name: string;
  seasons: IUnformatedSeason[];
}

export interface ISerie extends IBaseSerie {
  posterPath: string;
  mediaType: string;
  title: string;
  seasons: ISeason[];
}
