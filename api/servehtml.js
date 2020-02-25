var fetch = require('node-fetch')

module.exports = (userRequest, userResponse) => {

  const demokey = userRequest.url.replace('/', '')
  const getUrl = process.env.auth0_competition_storageurl + '/demo/' + demokey

  fetch(getUrl)
  .then(fetchRes => fetchRes.text())
  .then(body => {
    let data = JSON.parse(body);
    userResponse.send(data.result.htmlsrc)
  })
  .catch(error => console.log(error))

}

