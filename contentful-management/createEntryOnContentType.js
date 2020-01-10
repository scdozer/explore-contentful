const contentful = require('contentful-management')
require('dotenv').config()

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

//Create content type and fields
client.getSpace(process.env.CONTENTFUL_SPACE_ID)
.then((space) => space.createEntry('3o2HSFP598DnfmxYuS8eNM', {
  fields: {
    adminName : {
        'en-US': 'Component 2'
      },
      name: {
        'en-US': 'Component 2'
      },
      listName1: {
        'en-US': 'Component 2'
      },
      listName2: {
        'en-US': 'Component 2'
      },
      fishBowlId: {
        'en-US': 'Component 2'
      },
      slug: {
        'en-US': 'Component 2'
      },
      cost: {
        'en-US': 20.00
      },
      wattage: {
        'en-US': 100
      },

  }
}))
.then((entry) => console.log(entry))
.catch(console.error)



// Update entry
// client.getSpace('<space_id>')
// .then((space) => space.getEntry('<entry_id>'))
// .then((entry) => {
//   entry.fields.title['en-US'] = 'New entry title'
//   return entry.update()
// })
// .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
// .catch(console.error)