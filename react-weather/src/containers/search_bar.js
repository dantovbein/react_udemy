import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(evt) {
    this.setState({
      term: evt.target.value
    });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    if(this.state.term === "") return;
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" })
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="get a five-day forecast in your cities."
          value={ this.state.term }
          onChange={ this.onInputChange }/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


function dispatchMapToProps(dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeather
  }, dispatch);
}

export default connect(null, dispatchMapToProps)(SearchBar);
