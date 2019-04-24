import React from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../../commons/types/movie";
import { fetchTrendingMovie } from "../services/apiCalls";

interface IProps {}

interface IState {
  movies: IMovie[];
  isLoading: boolean;
}

class Homepage extends React.Component<IProps, IState> {
  state = { movies: [], isLoading: true };

  componentDidMount() {
    this.getTrendingMovies();
  }

  getTrendingMovies = async () => {
    const movies = await fetchTrendingMovie();
    this.setState({ movies, isLoading: false });
  };

  render() {
    const { isLoading, movies } = this.state;
    const loader = isLoading && <p>Loading...</p>;
    const showMovies = movies.map(({ title, posterPath, id }) => (
      <div key={id}>
        <Link to={`/movie/${id}`}>
          <img src={posterPath} alt={`poster of ${title}`} />
        </Link>
        <h2>{title}</h2>
      </div>
    ));
    return <div>{loader || showMovies}</div>;
  }
}

export default Homepage;
