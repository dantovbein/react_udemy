import React from 'react';
import { Component } from 'react';

import './styles.scss'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ evt => this.onSearchTermChange(evt.target.value) } />
      </div>
    );
  }

  onSearchTermChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
