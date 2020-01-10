var client = require('./contentfulClient').client

function cfGetComponents (contentType) {
    client.getEntries({
        content_type: contentType
      })
      .then((response) => console.log(response.items))
      .catch(console.error)
}

module.exports = {
  cfGetComponents
}
