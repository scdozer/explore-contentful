const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
  
// Publish Content Type based on ID.
client.getSpace(process.env.CONTENTFUL_SPACE_ID)
// 36dH7fVW1uzU8vfM5cTQup is the ID of the Content Type from Contentful.
.then((space) => space.getContentType('36dH7fVW1uzU8vfM5cTQup'))
.then((contentType) => contentType.publish())
.then((contentType) => console.log(`Content type ${contentType.sys.id} activated.`))
.catch(console.error) 