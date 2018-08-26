const Keygen = require('eosjs-keygen').Keygen

const generate = (callback) => {
  return Keygen.generateMasterKeys().then((keys) => {
    callback(null, keys)
    return keys
  }).catch(callback)
}

module.exports = {
  generate
}