import React from 'react'

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '563886721453-qs7cu1hvk6gdp9ko1mcigcfjr4bi1vds.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange()
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === 0) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui blue google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui blue google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      )
    }
  }

  render() {
    console.log(this.auth)

    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth
