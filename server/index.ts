import express from "express";
import {
  formatMovie,
  formatMovies,
  formatSerie,
  formatPeople,
  formatMulti
} from "./utils/formatData";
const app = express();

import {
  getTrendingWeekMovies,
  getMovie,
  getTV,
  getSearchMulti,
  getPeople
} from "./services/apiCalls";

app.get("/trendingMovies", async (req, res) => {
  const movies = await getTrendingWeekMovies();
  res.json(formatMovies(movies));
});

app.get("/movie/:movieId", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await getMovie(movieId);
    res.json(formatMovie(movie));
  } catch (e) {
    res.sendStatus(400);
    console.error(e);
  }
});

app.get("/searchMulti/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const searchResults = await getSearchMulti(query);
    res.json(formatMulti(searchResults));
  } catch (e) {
    res.sendStatus(400);
    console.error(e);
  }
});

app.get("/tv/:tvId", async (req, res) => {
  try {
    const { tvId } = req.params;
    const tv = await getTV(tvId);
    res.json(formatSerie(tv));
  } catch (e) {
    res.sendStatus(400);
    console.error(e);
  }
});

app.get("/person/:personId", async (req, res) => {
  try {
    const { personId } = req.params;
    const person = await getPeople(personId);
    res.json(formatPeople(person));
  } catch (e) {
    res.sendStatus(400);
    console.error(e);
  }
});

app.listen(8080, () => console.error("Server started"));
