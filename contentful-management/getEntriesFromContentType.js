const contentful = require('contentful')

const client = contentful.createClient({
  space: 'htpx3sotflll',
//   environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: 'WB7BUq8iyL5buXFKh-aNoQrrmNBItyGALosEYwbxqD4'
})

client.getEntries({
  content_type: '3o2HSFP598DnfmxYuS8eNM'
})
.then((response) => console.log(response.items))
.catch(console.error)


// GET ALL ENTRIES NO MATTER THE CONTENT TYPE
// client.getEntries()
// .then((response) => console.log(response.items))
// .catch(console.error)