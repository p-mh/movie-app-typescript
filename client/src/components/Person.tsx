import React from "react";
import { Link } from "react-router-dom";
import { IPerson } from "../type/person";
import { fetchPersonInfos } from "../services/apiCalls";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps<{ personId: string }> {}

interface IState {
  PersonInfos: IPerson | undefined;
  isLoading: boolean;
}

class Person extends React.Component<IProps, IState> {
  state = {
    PersonInfos: undefined,
    isLoading: true
  };

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.match.params.personId !== this.props.match.params.personId) {
      const { personId } = this.props.match.params;
      this.setState({ isLoading: true });
      this.getPersonInfo(personId);
    }
  }

  componentDidMount() {
    const { personId } = this.props.match.params;
    this.getPersonInfo(personId);
  }

  getPersonInfo = async (PersonId: string) => {
    const PersonInfos = await fetchPersonInfos(PersonId);
    this.setState({
      PersonInfos,
      isLoading: false
    });
  };

  render() {
    const {
      isLoading,
      PersonInfos: { title = "", profilePath = "", biography = "", cast = [] } = {}
    } = this.state;

    const loader = isLoading && <p>Loading...</p>;

    const showMovieCast = cast.map(({ id, title, character, posterPath }) => (
      <div key={id}>
        <Link to={`/movie/${id}`}>
          <img src={posterPath} alt={title} />
        </Link>
        <span>
          {title} : {character}
        </span>
      </div>
    ));

    const showPersonInfos = (
      <div>
        <h2>{title}</h2>
        <img src={profilePath} alt={`poster of ${title}`} />
        <span>{biography}</span>
        {showMovieCast}
      </div>
    );

    return <div>{loader || showPersonInfos}</div>;
  }
}

export default Person;
