const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: 'CFPAT-qMr4QljL5zbiw4MoX-m9CqHj_OmRz-a5873Y3smj1vY'
})
  
// Publish Content Type based on ID.
client.getSpace('htpx3sotflll')
// 36dH7fVW1uzU8vfM5cTQup is the ID of the Content Type from Contentful.
.then((space) => space.getContentType('36dH7fVW1uzU8vfM5cTQup'))
.then((contentType) => contentType.publish())
.then((contentType) => console.log(`Content type ${contentType.sys.id} activated.`))
.catch(console.error) 