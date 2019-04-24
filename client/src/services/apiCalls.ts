import { ISerie } from './../type/serie';
import { IMovie } from '../type/movie';
import axios from 'axios'
import { IMovieSerieOrPeople } from '../type/moviesSerieOrPeople'

export const fetchTrendingMovie = async () => {
    const { data } = await axios.get<IMovieSerieOrPeople[]>('/trendingMovies');
    return data
}

export const fetchMovieInfos = async (movieId: string) => {
    const { data } = await axios.get<IMovie>(`/movie/${movieId}`);
    return data;
}

export const fetchTVInfos = async (TVId: string) => {
    const { data } = await axios.get<ISerie>(`/tv/${TVId}`);
    return data
}

export const fetchPersonInfos = async (personId: string) => {
    const { data } = await axios.get(`/person/${personId}`);
    return data
}

export const fetchSearchMovieSerirOrPeople = async (query: string) => {
    const { data } = await axios.get<IMovieSerieOrPeople[]>(`/searchMulti/${query}`)
    return data
}