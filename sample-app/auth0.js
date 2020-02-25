createAuth0Client({

  domain: 'auth0-domain-here',
  client_id: 'auth0-client-id-here'

}).then(auth0 => {

  document.getElementById('login').addEventListener('click', () => {
    auth0.loginWithRedirect({ redirect_uri: window.location.href })
  })

  document.getElementById('logout').addEventListener('click', () => {
    auth0.logout({ returnTo: window.location.href })
  })

  auth0.handleRedirectCallback().then(result => {
    history.pushState(null, "", location.href.split("?")[0])
    auth0.getUser().then(renderUser)
  })

})
