import React from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../type/movie";
import { fetchMovieInfos } from "../services/apiCalls";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps<{ movieId: string }> {}

interface IState {
  movieInfos: IMovie | undefined;
  isLoading: boolean;
}

class Movie extends React.Component<IProps, IState> {
  state = {
    movieInfos: undefined,
    isLoading: true
  };

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.match.params.movieId !== this.props.match.params.movieId) {
      const { movieId } = this.props.match.params;
      this.setState({ isLoading: true });
      this.getMovieInfo(movieId);
    }
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.getMovieInfo(movieId);
  }

  getMovieInfo = async (movieId: string) => {
    const movieInfos = await fetchMovieInfos(movieId);
    this.setState({
      movieInfos,
      isLoading: false
    });
  };

  render() {
    const {
      isLoading,
      movieInfos: { title = "", posterPath = "", overview = "", cast = [] } = {}
    } = this.state;

    const loader = isLoading && <p>Loading...</p>;

    const showCast = cast.map(({ id, name, character, profilePath }) => (
      <div key={id}>
        <Link to={`/person/${id}`}>
          <img src={profilePath} alt={name} />
        </Link>
        <span>
          {name} : {character}
        </span>
      </div>
    ));

    const showMovieInfos = (
      <div>
        <h2>{title}</h2>
        <img src={posterPath} alt={`poster of ${title}`} />
        <span>{overview}</span>
        {showCast}
      </div>
    );

    return <div>{loader || showMovieInfos}</div>;
  }
}

export default Movie;
