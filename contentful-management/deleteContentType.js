const contentful = require('contentful-management')
require('dotenv').config()

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

client.getSpace(process.env.CONTENTFUL_SPACE_ID)
.then((space) => space.getContentType('3KgiAymAK1bU56CgU4KaSn'))
.then((contentType) => contentType.delete())
.then(() => console.log('Content type deleted.'))
.catch(console.error) 