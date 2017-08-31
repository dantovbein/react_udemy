import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostShow extends Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  deletePost() {
    const {id} = this.props.match.params;
    this.props.deletePost(id, ()=> {
      this.props.history.push("/");
    })
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return(
        <div>Loading ...</div>
      )
    }

    return(
      <div>
        <Link to="/">Back to index</Link>
        <div
          className="btn btn-danger xs-right"
          onClick={this.deletePost.bind(this)}
        >Delete</div>
        <h3>{ this.props.post.title }</h3>
        <h6>{ this.props.post.categories }</h6>
        <p>{ this.props.post.content }</p>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {
  fetchPost, deletePost
})(PostShow);