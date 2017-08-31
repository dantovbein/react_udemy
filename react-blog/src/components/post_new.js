import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createPost } from "../actions";

class PostNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : "" }`

    return(
      <div className={className}>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
        { touched ? error : "" }
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={ this.renderField }
        />
        <Field
          label="Categories"
          name="categories"
          component={ this.renderField }
        />
        <Field
          label="Content"
          name="content"
          component={ this.renderField }
        />
        <input type="submit" className="btn btn-primary" />
        <Link
          className="btn btn-danger"
          to="/"
        >Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  let errors = {};

  if(!values.title) errors.title = "Error in title";
  if(!values.categories) errors.categories = "Error in Categories";
  if(!values.content) errors.content = "Error in Content";

  return errors;
}

export default reduxForm({
  validate,
  form: "FormPostNew"
})(connect(null,
  { createPost })
(PostNew));


