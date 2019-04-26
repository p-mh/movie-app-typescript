import mockAxios from "jest-mock-axios";
import * as apiCalls from "./apiCalls";

import API_KEY from "./auth";
import { BASE_URL } from "../utils/constantes";

// afterEach(() => {
//   mockAxios.reset();
// });

describe("getTrendingWeekMovies", () => {
  afterAll(() => {
    mockAxios.get.mockReset();
  });
  test("should called the moviedb with correct adress", async () => {
    mockAxios.get.mockResolvedValue({ data: { results: {} } });
    apiCalls.getTrendingWeekMovies();
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
  });
});

describe("getMovie", () => {
  afterEach(() => {
    mockAxios.get.mockReset();
  });
  test("should called axios 2 times", async () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getMovie("1");
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });
  test("should called the moviedb with correct adress and correct movieId to get movie's cast", () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getMovie("1");
    expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/movie/1/credits?api_key=${API_KEY}`);
  });
  test("should called the moviedb with correct adress and correct movieId to get movie's infos", () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getMovie("1");
    expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/movie/1?api_key=${API_KEY}`);
  });
});

describe("getTV", () => {
  afterEach(() => {
    mockAxios.get.mockReset();
  });
  test("should called the moviedb with correct adress and correct serieId to get serie's infos", () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getTV("1");
    expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/tv/1?api_key=${API_KEY}`);
  });
});

describe("getPeople", () => {
  afterEach(() => {
    mockAxios.get.mockReset();
  });
  test("should called axios 2 times", async () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getPeople("1");
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
  });
  test("should called the moviedb with correct adress and correct personId to get movie's credits", () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getPeople("1");
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${BASE_URL}/person/1/movie_credits?api_key=${API_KEY}`
    );
  });
  test("should called the moviedb with correct adress and correct movieId to get person's infos", () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getPeople("1");
    expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/person/1?api_key=${API_KEY}`);
  });
});

describe("getSearchMulti", () => {
  afterEach(() => {
    mockAxios.get.mockReset();
  });
  test("hould called the moviedb with correct adress and correct query", async () => {
    mockAxios.get.mockResolvedValue({ data: {} });
    apiCalls.getSearchMulti("query");
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=query`
    );
  });
});
