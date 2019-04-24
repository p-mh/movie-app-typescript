import axios from "axios";

import { ISerie } from "../../../commons/types/series";
import { IMovie } from "../../../commons/types/movie";
import { IPeople } from "../../../commons/types/people";
import { IMovieSerieOrPeople } from "../../../commons/types/movieSerieOrPeople";

export const fetchTrendingMovie = async () => {
  const { data } = await axios.get<IMovie[]>("/trendingMovies");
  return data;
};

export const fetchMovieInfos = async (movieId: string) => {
  const { data } = await axios.get<IMovie>(`/movie/${movieId}`);
  return data;
};

export const fetchTVInfos = async (TVId: string) => {
  const { data } = await axios.get<ISerie>(`/tv/${TVId}`);
  return data;
};

export const fetchPersonInfos = async (personId: string) => {
  const { data } = await axios.get<IPeople>(`/person/${personId}`);
  return data;
};

export const fetchSearchMovieSerirOrPeople = async (query: string) => {
  const { data } = await axios.get<IMovieSerieOrPeople[]>(`/searchMulti/${query}`);
  return data;
};
