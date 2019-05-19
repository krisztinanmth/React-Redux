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
      return <div>isSignedIn is null</div>
    } else if (this.state.isSignedIn) {
      return <div>user is signed in</div>
    } else {
      return <div>user is not signed in</div>
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
