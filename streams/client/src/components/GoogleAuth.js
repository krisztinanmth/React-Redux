import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '563886721453-qs7cu1hvk6gdp9ko1mcigcfjr4bi1vds.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render() {
    return (
      <div>GoogleAuth</div>
    )
  }
}

export default GoogleAuth
