const contentful = require('contentful-management')

const client = contentful.createClient({
  // from Contentful API settings
  accessToken: 'CFPAT-qMr4QljL5zbiw4MoX-m9CqHj_OmRz-a5873Y3smj1vY'
})
  
// Update content type
// htpx3sotflll is the Space ID from Contentful API settings
client.getSpace('htpx3sotflll')
// 36dH7fVW1uzU8vfM5cTQup is the ID of the Content Type from Contentful.
.then((space) => space.getContentType('36dH7fVW1uzU8vfM5cTQup'))
.then((contentType) => {
  contentType.name = 'Component'
  contentType.fields = [
    {
        id: 'adminName',
        name: 'Admin Name - Updated',
        required: true,
        localized: false,
        type: 'Text'
      },
      {
        id: 'name',
        name: 'Name - Updated',
        required: false,
        localized: false,
        type: 'Text'
      }

  ]
  return contentType.update()
})
.then((contentType) => console.log(`Content type ${contentType.sys.id} updated.`))
.catch(console.error) 