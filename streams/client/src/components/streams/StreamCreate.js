import React from 'react'
import { reduxForm, Field } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput (formProps) {
    return (
      <div>
        <input {...formProps.input} />
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
