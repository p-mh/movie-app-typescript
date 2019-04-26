import axios from "axios";
import API_KEY from "./auth";

import { IUnformatedMovie, IUnformatedMovieCast } from "../../commons/types/movie";
import { IUnformatedSerie } from "../../commons/types/series";
import { IUnformaredPeople, IUnformatedPeopleCast } from "../../commons/types/people";
import { MovieSerieOrPeople } from "../../commons/types/movieSerieOrPeople";

import { BASE_URL } from "../utils/constantes";

interface IResponse<T> {
  results: T;
}

interface ICast<T> {
  cast: T;
}

export const getTrendingWeekMovies = async () => {
  const {
    data: { results }
  } = await axios.get<IResponse<IUnformatedMovie[]>>(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return results;
};

export const getMovie = async (movieId: string) => {
  const [
    { data: movie },
    {
      data: { cast }
    }
  ] = await Promise.all([
    axios.get<IUnformatedMovie>(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`),
    axios.get<ICast<IUnformatedMovieCast[]>>(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    )
  ]);
  return { ...movie, cast };
};

export const getTV = async (TVId: string) => {
  const { data } = await axios.get<IUnformatedSerie>(`${BASE_URL}/tv/${TVId}?api_key=${API_KEY}`);
  return data;
};

export const getPeople = async (personId: string) => {
  const [
    { data: person },
    {
      data: { cast }
    }
  ] = await Promise.all([
    axios.get<IUnformaredPeople>(`${BASE_URL}/person/${personId}?api_key=${API_KEY}`),
    axios.get<ICast<IUnformatedPeopleCast[]>>(
      `${BASE_URL}/person/${personId}/movie_credits?api_key=${API_KEY}`
    )
  ]);
  return { ...person, cast };
};

export const getSearchMulti = async (query: string) => {
  const {
    data: { results }
  } = await axios.get<IResponse<MovieSerieOrPeople[]>>(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
  );
  return results;
};
