import React from 'react'
import { reduxForm, Field } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput(formProps) {
    // console.log('formProps', formProps)
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div>{formProps.meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log('formValues:', formValues)
  }

  render() {
    // console.log('props from redux form', this.props)
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
  form: 'streamCreate',
  validate
})(StreamCreate)
