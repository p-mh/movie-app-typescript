import mockAxios from "jest-mock-axios";
import * as apiCalls from "./apiCalls";

describe("fetchTrendingMovie", () => {
  afterAll(() => {
    mockAxios.get.mockReset();
  });
  test("should called the server with correct adress", async () => {
    mockAxios.get.mockResolvedValue({ data: { results: {} } });
    apiCalls.fetchTrendingMovie();
    expect(mockAxios.get).toHaveBeenCalledWith("/trendingMovies");
  });
});

describe("fetchTrendingMovie", () => {
  afterAll(() => {
    mockAxios.get.mockReset();
  });
  test("should called the server with correct adress and correct movieId", async () => {
    mockAxios.get.mockResolvedValue({ data: { results: {} } });
    apiCalls.fetchMovieInfos("1");
    expect(mockAxios.get).toHaveBeenCalledWith("/movie/1");
  });
});

describe("fetchTVInfos", () => {
  afterAll(() => {
    mockAxios.get.mockReset();
  });
  test("should called the server with correct adress and correct serieId", async () => {
    mockAxios.get.mockResolvedValue({ data: { results: {} } });
    apiCalls.fetchTVInfos("1");
    expect(mockAxios.get).toHaveBeenCalledWith("/tv/1");
  });
});

describe("fetchPersonInfos", () => {
  afterAll(() => {
    mockAxios.get.mockReset();
  });
  test("should called the server with correct adress and correct personId", async () => {
    mockAxios.get.mockResolvedValue({ data: { results: {} } });
    apiCalls.fetchPersonInfos("1");
    expect(mockAxios.get).toHaveBeenCalledWith("/person/1");
  });
});

describe("fetchSearchMovieSerirOrPeople", () => {
  afterAll(() => {
    mockAxios.get.mockReset();
  });
  test("should called the server with correct adress and correct query", async () => {
    mockAxios.get.mockResolvedValue({ data: { results: {} } });
    apiCalls.fetchSearchMovieSerirOrPeople("query");
    expect(mockAxios.get).toHaveBeenCalledWith("/searchMulti/query");
  });
});
