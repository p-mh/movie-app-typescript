import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchMovieSerirOrPeople } from '../services/apiCalls';
import { IMovieSerieOrPeople } from '../type/moviesSerieOrPeople';

interface IProps {}

interface IState {
  searchInput: string;
  results: IMovieSerieOrPeople[];
}

class SearchBar extends React.Component<IProps, IState> {
  state = {
    searchInput: '',
    results: [],
  };

  searchMovieSerieOrPeople = async (query: string) => {
    if (!query) {
      this.emptySearchResults();
    } else {
      const results = await fetchSearchMovieSerirOrPeople(query);
      this.setState({ results });
    }
  };

  changeSearchInput = ({
    currentTarget: { value: searchInput },
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput });
    this.searchMovieSerieOrPeople(searchInput);
  };

  emptySearchResults = () => {
    this.setState({ results: [] });
  };

  render() {
    const { searchInput, results } = this.state;
    const showResults =
      results &&
      results.map(({ title, mediaType, id }) => (
        <div key={id}>
          <Link to={`/${mediaType}/${id}`} onClick={this.emptySearchResults}>
            {title}
          </Link>
        </div>
      ));

    return (
      <div>
        <input
          type="text"
          placeholder="search..."
          value={searchInput}
          onChange={this.changeSearchInput}
        />
        {showResults}
      </div>
    );
  }
}

export default SearchBar;
