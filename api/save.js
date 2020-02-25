var fetch = require('node-fetch')

module.exports = (userRequest, userResponse) => {

  if (userRequest.body) {

    const data = JSON.parse(userRequest.body)
    const postUrl = process.env.auth0_competition_storageurl + '/demo/' + data.demokey

    fetch(postUrl, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(fetchRes => fetchRes.text())
    .then(body => {
      userResponse.json({ saved: true })
    })
    .catch(error => console.log(error))

  } else {

    userResponse.json({ saved: false })

  }

}

