import * as formatData from "./formatData";

describe("formatMovieCast", () => {
  test("should return the formated array with movie cast actors", () => {
    expect(formatData.formatMovieCast([unformatedMovieCastActor])).toEqual([
      formatedMovieCastActor
    ]);
  });

  test("should return an array with maximum 10 movie actors", () => {
    expect(formatData.formatMovieCast(new Array(15).fill(unformatedMovie))).toHaveLength(10);
  });
});

describe("formatMovie", () => {
  test("should return the formated movie object", () => {
    expect(formatData.formatMovie(unformatedMovie)).toEqual(formatedMovie);
  });
});

describe("formatSeason", () => {
  test("should return the formated array with serie's seasons", () => {
    expect(formatData.formatSeason([unformatedSeason])).toEqual([formatedSeason]);
  });
});

describe("formatSerie", () => {
  test("should return the formated serie object", () => {
    expect(formatData.formatSerie(unformatedSerie)).toEqual(formatedSerie);
  });
});

describe("formatMovieCast", () => {
  test("should return the formated array with actore movies cast", () => {
    expect(formatData.formatPeopleCast([unformatedPersonMovieCast])).toEqual([
      formatedPersonMovieCast
    ]);
  });
  test("should return an array with maximum 10 movies", () => {
    expect(formatData.formatMovieCast(new Array(15).fill(unformatedPersonMovieCast))).toHaveLength(
      10
    );
  });
});

describe("formatPerson", () => {
  test("should return the formated actor object", () => {
    expect(formatData.formatPeople(unformatedPerson)).toEqual(formatedPerson);
  });
});

describe("formatMulti", () => {
  test("should return all the element in correct format", () => {
    expect(formatData.formatMulti([unformatedMovie, unformatedSerie, unformatedPerson])).toEqual([
      { id: 123, title: "Movie Title", mediaType: "movie" },
      { id: 234, title: "Serie Title", mediaType: "tv" },
      { id: 456, title: "Toto", mediaType: "person" }
    ]);
  });
});

const unformatedMovieCastActor = {
  id: 123,
  name: "Toto",
  character: "Tutu",
  profile_path: "profile_path.png"
};

const formatedMovieCastActor = {
  id: 123,
  name: "Toto",
  character: "Tutu",
  profilePath: "https://image.tmdb.org/t/p/w200/profile_path.png"
};

const unformatedMovie = {
  poster_path: "poster_path.png",
  id: 123,
  title: "Movie Title",
  overview: "azerty",
  media_type: "movie",
  cast: [unformatedMovieCastActor]
};

const formatedMovie = {
  posterPath: "https://image.tmdb.org/t/p/w300/poster_path.png",
  id: 123,
  title: "Movie Title",
  overview: "azerty",
  mediaType: "movie",
  cast: [formatedMovieCastActor]
};

const unformatedSeason = {
  id: 234,
  name: "Season 1",
  overview: "lorem ipsum",
  poster_path: "poster_path.jpg",
  season_number: 1,
  air_date: "2019-01-01",
  episode_count: 24
};

const formatedSeason = {
  id: 234,
  name: "Season 1",
  overview: "lorem ipsum",
  posterPath: "https://image.tmdb.org/t/p/w200/poster_path.jpg",
  seasonNumber: 1,
  airDate: "2019-01-01",
  episodeCount: 24
};

const unformatedSerie = {
  poster_path: "poster_path.png",
  id: 234,
  name: "Serie Title",
  overview: "lorem ipsum",
  media_type: "tv",
  seasons: [unformatedSeason]
};

const formatedSerie = {
  posterPath: "https://image.tmdb.org/t/p/w300/poster_path.png",
  id: 234,
  title: "Serie Title",
  overview: "lorem ipsum",
  mediaType: "tv",
  seasons: [formatedSeason]
};

const unformatedPersonMovieCast = {
  id: 456,
  character: "Tutu",
  title: "Movie Title",
  poster_path: "poster_path.jpg"
};

const formatedPersonMovieCast = {
  id: 456,
  character: "Tutu",
  title: "Movie Title",
  posterPath: "https://image.tmdb.org/t/p/w200/poster_path.jpg"
};

const unformatedPerson = {
  id: 456,
  name: "Toto",
  profile_path: "profile_path.png",
  biography: "lorem ipsum",
  media_type: "person",
  cast: [unformatedPersonMovieCast]
};

const formatedPerson = {
  id: 456,
  title: "Toto",
  profilePath: "https://image.tmdb.org/t/p/w300/profile_path.png",
  biography: "lorem ipsum",
  mediaType: "person",
  cast: [formatedPersonMovieCast]
};
