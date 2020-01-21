const contentful = require('contentful-management')

const client = contentful.createClient({
    accessToken: 'CFPAT-qMr4QljL5zbiw4MoX-m9CqHj_OmRz-a5873Y3smj1vY'
})

// Create asset
client.getSpace('htpx3sotflll')
.then((space) => space.createAssetWithId(assetid, {
  fields: {
    title: {
      'en-US': 'Talon Hero Glow'
    },
    description: {
      'en-US': 'Talon Hero Glow'
    },
    file: {
      'en-US': {
        contentType: 'image/jpeg',
        fileName: '1068249100578-talon_hero-glow-720wx720h@2x.jpg',
        upload: 'https://falcon-builder-production.s3.amazonaws.com/1068249100578-talon_hero-glow-720wx720h@2x.jpg'
      }
    }
  }
}))
.then((asset) => asset.processForAllLocales())
.then((asset) => console.log(asset))
.catch(console.error)

// Update asset
// client.getSpace('<space_id>')
// .then((space) => space.getAsset('<asset_id>'))
// .then((asset) => {
//   asset.fields.title['en-US'] = 'New asset title'
//   return asset.update()
// })
// .then((asset) => console.log(`Asset ${asset.sys.id} updated.`))
// .catch(console.error)

// Publish 
// client.getSpace('htpx3sotflll')
// .then((space) => space.getAsset('<asset_id>'))
// .then((asset) => asset.publish())
// .then((asset) => console.log(`Asset ${asset.sys.id} published.`))
// .catch(console.error)