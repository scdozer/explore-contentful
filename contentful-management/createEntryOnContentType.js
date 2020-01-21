const contentful = require('contentful-management')
require('dotenv').config()

const client = contentful.createClient({
  accessToken: 'CFPAT-qMr4QljL5zbiw4MoX-m9CqHj_OmRz-a5873Y3smj1vY'
})

//Create content type and fields
client.getSpace('htpx3sotflll')
.then((space) => space.createEntry('3Wp7oSwONFfxoDpHMikfEd', {
  sys:{
    id: '2F6WwZhGoRjoc79Sn', 
    entry_id: '2F6WwZhGoRjoc79Sn'
  },
  fields: {
    mongoId: {
      'en-US': '2F6WwZhGoRjoc79Sn'
    },
    adminName : {
      'en-US': 'Test With Mongo'
    },
    name: {
      'en-US': 'Test With Mongo, 20 Threads, 3.5 GHz'
    },
    listName1: {
      'en-US': 'Intel® Core™ i7 6950X Extreme'
    },
    listName2: {
      'en-US': '10 Cores, 20 Threads, 3.5 GHz'
    },
    fishBowlId: {
      'en-US': 'INTCI76950X'
    },
    slug: {
      'en-US': 'intel®-core™-i7-6950k-3.5ghz'
    },
    cost: {
      'en-US': 1895
    },
    costEquation: {
      'en-US': ''
    },
    wattage: {
      'en-US': -175
    },
    detailDescription: {
      'en-US': 'Intel, the Intel Logo, Intel Inside, Intel Core, and Core Inside are trademarks of Intel Corporation in the U.S. and other countries.'
    },
    detailBullets: {
      'en-US': [
        "10 Cores",
        "20 Threads",
        "3.0GHz Base Frequency",
        "3.5GHz Max Turbo Frequency",
        "25MB Smart Cache",
        "FCLGA 2011-3 Socket",
        "40 PCI Express Lanes",
        "Unlocked"
      ]
    },
    detailLearnMore: {
      'en-US': ''
    },
    // configureImage: {
    //   'title': {
    //     'en-US': 'Test'
    //   },
    //   'file': {
    //     'en-US': {
    //       contentType: 'image/jpeg',
    //       fileName: 'TESTLINK.jpg',
    //       uploadFrom: {
    //         sys: {
    //           type: 'Link',
    //           linkType: 'Upload'
    //         }
    //       }
    //     }
    //   }
    // },
    // configureImage: {
    //   'en-US': {}
    // },
    // detailImage: {
    //   'en-US': {}
    // },
    // listImage: {
    //   'en-US': {}
    // },
    galleryImage: {
      'en-US': []
    },
    overrideBuildTime: {
      'en-US': 0
    },
    additionalBuildTime: {
      'en-US': 0
    },
    tags: {
      'en-US': [
        "28ZB4vioTfDvMvA8H",
        "vH3mykuqEgmJWAGCW"
      ]
    },
    products: {
      'en-US': []
    },
    // how to set up a referance on type that doesnt exist!!?
    // type: {
    //   'en-US': {}
    // },
    active: {
      'en-US': true
    },
    archived: {
      'en-US': false
    },
    archivedDate: {
      'en-US': 0
    },
    additionalShippingCost: {
      'en-US': 0
    },
    shippingSizeWeight: {
      'en-US': 0
    },
    shippingSizeWidth: {
      'en-US': 0
    },
    shippingSizeHeight: {
      'en-US': 0
    },
    shippingSizeLength: {
      'en-US': 0
    },
    productsMongo: {
      'en-US': [
        "otsNtD5JtdX2jJYzM",
        "dx4RPZXrwkzGRMp2A",
        "4Prqe4XBMqE82vC2s"
      ]
    },
    typeMongo: {
      'en-US': [
        "MzvAsrRyjpu2pkGde"
      ]
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