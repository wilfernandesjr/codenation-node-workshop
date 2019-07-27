const cors = require('cors')
const env = process.env.NODE_ENV || 'development'
let whiteList = require('../../settings/cors.json')[env]

class EnableCors {
  constructor (permissions) {
    let options = this.setOptions(permissions)
    return cors(options)
  }

  setOptions (permissions) {
    if (permissions === 'allow all') {
      whiteList = []
    }

    return {
      origin: function (origin, callback) {
        if (whiteList.indexOf(origin) > -1 || whiteList.length === 0) {
          callback(null, true)
        } else {
          callback(new Error(`You aren't allowed to access this endpoint.`))
        }
      },
      credentials: true
    }
  }
}

module.exports = function (permissions) {
  return new EnableCors(permissions)
}
