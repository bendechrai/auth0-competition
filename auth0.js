createAuth0Client({

  domain: 'AUTH0-DOMAIN',
  client_id: 'AUTH0-CLIENT-ID'

}).then(auth0 => {

  const query = window.location.search
  if (query.includes("code=") && query.includes("state=")) {
    auth0.handleRedirectCallback().then(result => {
      history.pushState(null, "", location.href.split("?")[0])
      auth0.getUser().then(user => {
        renderUser(user)
      })
    })
  }

  document.getElementById('login').addEventListener('click', () => {
    auth0.loginWithRedirect({
      redirect_uri: 'http://127.0.0.1:8080/'
    }).then(token => {
      console.log(token)
      auth0.getUser().then(user => {
        console.log(user)
      })
    })
  })

  document.getElementById('logout').addEventListener('click', () => {
    auth0.logout({
      returnTo: 'http://127.0.0.1:8080/'
    })
  })

})
