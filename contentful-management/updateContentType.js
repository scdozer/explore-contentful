const contentful = require('contentful-management')

const client = contentful.createClient({
  // from Contentful API settings
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
  
// Update content type
// htpx3sotflll is the Space ID from Contentful API settings
client.getSpace(process.env.CONTENTFUL_SPACE_ID)
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