var fs = require('fs')
var path = require('path')

const uuidv1 = require('uuid/v1')

module.exports = (userRequest, userResponse) => {

  let htmlsrc = fs.readFileSync( path.join(__dirname, '../sample-app/index.html'), 'utf8')
  let jssrc   = fs.readFileSync( path.join(__dirname, '../sample-app/auth0.js'  ), 'utf8')

  userResponse.json({
    demokey: uuidv1(),
    htmlsrc: htmlsrc,
    jssrc: jssrc
  })

}

