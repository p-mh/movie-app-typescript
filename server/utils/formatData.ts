import {
  IUnformatedPeopleCast,
  IPeopleCast,
  IUnformaredPeople,
  IPeople
} from "../../commons/types/people";
import {
  IUnformatedMovie,
  IMovie,
  IUnformatedMovieCast,
  IMovieCast
} from "../../commons/types/movie";
import { IUnformatedSerie, ISerie, IUnformatedSeason, ISeason } from "../../commons/types/series";
import {
  MovieSerieOrPeople,
  isMovie,
  isPeople,
  isSerie
} from "../../commons/types/movieSerieOrPeople";

import { BASE_URL_300, PLACEHOLDER_300, BASE_URL_200, PLACEHOLDER_200 } from "../utils/constantes";

const formatMovieCast = (movieCast: IUnformatedMovieCast[]): IMovieCast[] =>
  movieCast
    .map(({ id, name, character, profile_path }) => ({
      id,
      name,
      character,
      profilePath: profile_path ? `${BASE_URL_200}${profile_path}` : PLACEHOLDER_200
    }))
    .slice(0, 10);

export const formatMovie = ({
  poster_path,
  id,
  title,
  overview,
  media_type,
  cast
}: IUnformatedMovie): IMovie => ({
  posterPath: poster_path ? `${BASE_URL_300}${poster_path}` : PLACEHOLDER_300,
  id,
  title,
  overview,
  mediaType: media_type,
  cast: cast ? formatMovieCast(cast) : []
});

export const formatMovies = (movies: IUnformatedMovie[]): IMovie[] => movies.map(formatMovie);

const formatSeason = (seasons: IUnformatedSeason[]): ISeason[] =>
  seasons.map(({ id, name, overview, poster_path, season_number, air_date, episode_count }) => ({
    id,
    name,
    overview,
    posterPath: poster_path ? `${BASE_URL_200}${poster_path}` : PLACEHOLDER_200,
    seasonNumber: season_number,
    airDate: air_date,
    episodeCount: episode_count
  }));

export const formatSerie = ({
  poster_path,
  id,
  name,
  overview,
  media_type,
  seasons
}: IUnformatedSerie): ISerie => ({
  posterPath: poster_path ? `${BASE_URL_300}${poster_path}` : PLACEHOLDER_300,
  id,
  title: name,
  overview,
  mediaType: media_type,
  seasons: seasons ? formatSeason(seasons) : []
});

const formatPeopleCast = (peopleCast: IUnformatedPeopleCast[]): IPeopleCast[] =>
  peopleCast
    .map(({ id, character, title, poster_path }) => ({
      id,
      character,
      title,
      posterPath: poster_path ? `${BASE_URL_200}${poster_path}` : PLACEHOLDER_200
    }))
    .slice(0, 10);

export const formatPeople = ({
  id,
  name,
  profile_path,
  biography,
  media_type,
  cast
}: IUnformaredPeople): IPeople => ({
  profilePath: profile_path ? `${BASE_URL_300}${profile_path}` : PLACEHOLDER_300,
  id,
  title: name,
  biography,
  mediaType: media_type,
  cast: cast ? formatPeopleCast(cast) : []
});

export const formatMulti = (movieSerieAndPeople: (MovieSerieOrPeople)[]) =>
  movieSerieAndPeople
    .map((movieSerieOrPeople: MovieSerieOrPeople) => {
      if (isMovie(movieSerieOrPeople)) {
        return formatMovie(movieSerieOrPeople);
      }
      if (isSerie(movieSerieOrPeople)) {
        return formatSerie(movieSerieOrPeople);
      }
      if (isPeople(movieSerieOrPeople)) {
        return formatPeople(movieSerieOrPeople);
      }
    })
    .map(({ id, title, mediaType }) => ({
      id,
      title,
      mediaType
    }));
