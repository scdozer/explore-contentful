const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
//   environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
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