var client = require('./contentfulClient').client

function cfGetComponents (contentType) {
    // client.getEntries({
    //     content_type: contentType
    //   })
    //   .then((response) => console.log(response.items))
    //   .catch(console.error)
    client.getEntries({
      'content_type': contentType
    })
    .then(function (entries) {
        console.log(JSON.stringify(entries))
                entries.items.forEach(function (entry) {
                console.log(JSON.stringify(entry.fields.companyName))
        })
    })
      
}

function cfGetProducts (contentType) {
  client.getEntries({
    content_type: contentType
  })
  .then((response) => console.log(response.items))
  .catch(console.error)
}

module.exports = {
  cfGetComponents
}
