import { IUnformatedMovie } from "./movie";
import { IUnformatedSerie } from "./series";
import { IUnformaredPeople } from "./people";

export type MovieSerieOrPeople = IUnformatedMovie | IUnformatedSerie | IUnformaredPeople;

export const isMovie = (
  movieSerieOrPeople: MovieSerieOrPeople
): movieSerieOrPeople is IUnformatedMovie => {
  return movieSerieOrPeople.media_type === "movie";
};
export const isSerie = (
  movieSerieOrPeople: MovieSerieOrPeople
): movieSerieOrPeople is IUnformatedSerie => {
  return movieSerieOrPeople.media_type === "tv";
};
export const isPeople = (
  movieSerieOrPeople: MovieSerieOrPeople
): movieSerieOrPeople is IUnformaredPeople => {
  return movieSerieOrPeople.media_type === "person";
};
export interface IMovieSerieOrPeople {
  id: number;
  posterPath: string;
  mediaType: string;
  overview: string;
  title: string;
}
