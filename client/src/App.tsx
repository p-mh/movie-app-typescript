import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import Homepage from './components/Homepage';
import Movie from './components/Movie';
import Tv from './components/Tv';
import Person from './components/Person';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>
          <Link to={`/`}>Movie App</Link>
        </h1>
        <SearchBar />
        <Route exact path="/" component={Homepage} />
        <Route path="/movie/:movieId" component={Movie} />
        <Route path="/tv/:tvId" component={Tv} />
        <Route path="/person/:personId" component={Person} />
      </BrowserRouter>
    </div>
  );
};

export default App;
