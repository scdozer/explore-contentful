
//Help Text Must be set in web app..



const contentful = require('contentful-management')
require('dotenv').config();

const client = contentful.createClient({
    accessToken: 'CFPAT-qMr4QljL5zbiw4MoX-m9CqHj_OmRz-a5873Y3smj1vY'
})

// Create content type
client.getSpace('htpx3sotflll')
.then( (space) => space.getEnvironment('master'))
.then((space) => space.createContentTypeWithId('nuancefields', {
  name: 'Nuance Fields',
  fields: [
    // Force Image field to have specific asset sizes. 
    {
        id: 'galleryImage',
        name: 'Component Gallery Slideshow',
        // Must be set in web app...
        // helpText: '(1800x1000 or 1100x1000 .jpg)',
        required: false,
        type: 'Link',
        linkType: 'Asset',
        validations: [{
            'assetImageDimensions': {
                'width': {
                    'min': 1000,
                    'max': 1000
                },
                'height': {
                    'min': 2300,
                    'max': 2300
                }
            }
        }]
    },
    // 
    // Use Default Field UI Extension
    //
    {
        id: 'active',
        name: 'Active',
        required: false,
        type: 'Boolean',
        //How to add defaults
      },
  ]
}))
.then((contentType) => console.log(contentType))
.catch(console.error)


// Update content type
// client.getSpace('<space_id>')
// .then((space) => space.getContentType('nuancefields'))
// .then((contentType) => {
//   contentType.fields : 
//   {
//     id: 'adminName',
//     name: 'Admin Name',
//     required: true,
//     type: 'Symbol',
//   },
//   return contentType.update()
// })
// .then((contentType) => console.log(`Content type ${contentType.sys.id} renamed.`))
// .catch(console.error)