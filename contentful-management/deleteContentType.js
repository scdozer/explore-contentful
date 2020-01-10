const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: 'CFPAT-qMr4QljL5zbiw4MoX-m9CqHj_OmRz-a5873Y3smj1vY'
})

client.getSpace('htpx3sotflll')
.then((space) => space.getContentType('3KgiAymAK1bU56CgU4KaSn'))
.then((contentType) => contentType.delete())
.then(() => console.log('Content type deleted.'))
.catch(console.error) 