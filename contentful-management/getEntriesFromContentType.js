const contentful = require('contentful')

const client = contentful.createClient({
  space: 'htpx3sotflll',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'WB7BUq8iyL5buXFKh-aNoQrrmNBItyGALosEYwbxqD4'
})

client.getEntries({
  content_type: '3Wp7oSwONFfxoDpHMikfEd'
})
.then((response) => console.log(response.items))
.catch(console.error)