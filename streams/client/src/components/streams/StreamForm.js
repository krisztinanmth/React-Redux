import React from 'react'
import { reduxForm, Field } from 'redux-form'

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }

  renderInput = ({ label, input, meta }) => {
    // console.log('formProps', formProps)
    // console.log(meta)
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    // console.log('props from redux form', this.props)
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          component={this.renderInput}
          label="enter title:"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="enter description:"
        />
        <button className="ui button secondary">submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const error = {}

  if (!formValues.title) {
    error.title = 'you must enter a title'
  }
  if (!formValues.description) {
    error.description = 'you must enter a description'
  }
  return error
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)
