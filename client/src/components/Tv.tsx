import React from "react";
import { fetchTVInfos } from "../services/apiCalls";
import { RouteComponentProps } from "react-router";
import { ISerie, ISeason } from "../type/serie";

interface IProps extends RouteComponentProps<{ tvId: string }> {}

interface IState {
  tvInfos: ISerie | undefined;
  isLoading: boolean;
}

class Tv extends React.Component<IProps, IState> {
  state = {
    tvInfos: undefined,
    isLoading: true
  };

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.match.params.tvId !== this.props.match.params.tvId) {
      const { tvId } = this.props.match.params;
      this.setState({ isLoading: true });
      this.getTVInfos(tvId);
    }
  }

  componentDidMount() {
    const { tvId } = this.props.match.params;
    this.getTVInfos(tvId);
  }

  getTVInfos = async (tvId: string) => {
    const tvInfos = await fetchTVInfos(tvId);
    this.setState({
      tvInfos,
      isLoading: false
    });
  };

  render() {
    const {
      isLoading,
      tvInfos: { title = "", posterPath = "", overview = "", seasons = [] } = {}
    } = this.state;

    const loader = isLoading && <p>Loading...</p>;

    const showSeasons = seasons.map(
      ({ id, name, overview, posterPath, seasonNumber, airDate, episodeCount }: ISeason) => (
        <div key={id}>
          <h4>
            {name} ({seasonNumber})
          </h4>
          <span>{airDate}</span>
          <img src={posterPath} alt={`poster of ${name}`} />
          <span>{overview}</span>
          <span>{episodeCount} episodes</span>
        </div>
      )
    );

    const showTVInfos = (
      <div>
        <h2>{title}</h2>
        <img src={posterPath} alt={`poster of ${title}`} />
        <span>{overview}</span>
        <h3>Seasons :</h3>
        {showSeasons}
      </div>
    );

    return <div>{loader || showTVInfos}</div>;
  }
}

export default Tv;
