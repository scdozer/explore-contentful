const contentful = require('contentful-management')
// require('dotenv').config();

const client = contentful.createClient({
  // from Contentful API settings
  accessToken: 'CFPAT-FreEECeIR6jh2oPzk-Q6zqG5sCLT41_ARU5oPk-SXSg'
})

//Create content type and fields
client.getSpace('t336ktc4bw1v')
.then((space) => space.createContentType({
  name: 'Components',
  description: 'With Mongo helper fields for now.',
  fields: [
    {
      id: 'adminName',
      name: 'Admin Name',
      required: true,
      type: 'Symbol',
      validations: [{
        'size': {
            'min': 0,
            'max': 100
        }
      }]
    },
    {
      id: 'name',
      name: 'Name',
      required: false,
      type: 'Symbol',
      validations: [{
        'size': {
            'min': 0,
            'max': 60
        }
      }]
      //Auto Value  
    },
    {
      id: 'listName1',
      name: 'List Name 1',
      required: true,
      type: 'Symbol',
      validations: [{
        'size': {
            'min': 0,
            'max': 30
        }
      }]
    },
    {
      id: 'listName2',
      name: 'List Name 2',
      required: false,
      type: 'Symbol',
      validations: [{
        'size': {
            'min': 0,
            'max': 30
        }
      }]
    },
    {
      id: 'fishBowlId',
      name: 'FishBowl ID',
      required: false,
      type: 'Symbol',
    },
    {
      id: 'slug',
      name: 'Slug',
      required: false,
      type: 'Symbol',
      validations: [{
        'size': {
            'min': 0,
            'max': 60
        }
      }]
    },
    {
      id: 'cost',
      name: 'Price',
      required: true,
      type: 'Number'
    },
    {
      id: 'costEquation',
      name: 'Cost Equation',
      required: false,
      type: 'Text',
    },
    {
      id: 'wattage',
      name: 'Wattage',
      required: false,
      type: 'Number',
    // Check components.coffee for defaults
    },
    {
      id: 'detailDescription',
      name: 'Detail Description',
      required: false,
      type: 'Text',
      validations: [{
        'size': {
            'min': 0,
            'max': 320
        }
      }]
    },
    {
      id: 'detailBullets',
      name: 'Detail Bullets',
      required: false,
      type: 'Array',
      items: { 'type': 'Symbol' },
      // max count : 20 ??
      validations: [{
        'size': {
            'min': 0,
            'max': 60
        }
      }]
    },
    {
      id: 'detailLearnMore',
      name: 'Detail Learn More',
      required: false,
      type: 'Symbol',
      validations: [{
        'size': {
            'min': 0,
            'max': 120
        }
      }]
    },
    {
      id: 'configureImage',
      name: 'Configuration List Image',
      required: false,
      type: 'Link',
      linkType: 'Asset',
      validations: [{
        'assetImageDimensions': {
            'width': {
                'min': 1100,
                'max': 1100
            },
            'height': {
                'min': 1000,
                'max': 1000
            }
        }
    }]
    },
    {
      id: 'detailImage',
      name: 'Detail Image',
      required: false,
      type: 'Link',
      linkType: 'Asset',
      validations: [{
        'assetImageDimensions': {
            'width': {
                'min': 1800,
                'max': 1800
            },
            'height': {
                'min': 1000,
                'max': 1000
            }
        }
    }]
    },
    {
      id: 'listImage',
      name: 'Config List Selected Image',
      // helpText: '(1200x600 JPEG w/ #000000 Background)',
      required: false,
      type: 'Link',
      linkType: 'Asset',
      validations: [{
        'assetImageDimensions': {
            'width': {
                'min': 1200,
                'max': 1200
            },
            'height': {
                'min': 600,
                'max': 600
            }
        }
      }]
    },
    {
      id: 'galleryImage',
      name: 'Gallery Slideshow',
      // description: '(1800x1000 or 1100x1000 .jpg)',
      required: false,
      type: 'Array',
      items: {
        type: 'Link',
        linkType: 'Asset',
        validations: [{
          'assetImageDimensions': {
              'width': {
                  'min': 1000,
                  'max': 1000
              }
          }
        }]
      },
    },
    {
      id: 'overrideBuildTime',
      name: 'Set Build Time in days',
      // description: '(overrides product-specific build time)',
      required: false,
      type: 'Integer',
    },
    {
      id: 'additionalBuildTime',
      name: 'Build time modifier (Days)',
      // description: '(adds to or subtracts from total build time specified by product or above override)',
      required: false,
      type: 'Integer',
    },
    {
      id: 'tags',
      name: 'Tags',
      required: false,
      type: 'Array',
      items: { "type": "Symbol" }
      //Should These Reference another Content Type
    },
    {
      id: 'products',
      name: 'Available for:',
      required: false,
      type: 'Array',
      items: {
        type: 'Link',
        linkType: 'Entry'
      },
    },
    {
      id: 'type',
      name: 'Type',
      required: true,
      type: 'Link',
      linkType: 'Entry'
      //Type is the product type. ie headphones/chassis/logo/ssd/.... 
    },
    {
      id: 'active',
      name: 'Active',
      required: false,
      type: 'Boolean'
    },
    {
      id: 'archived',
      name: 'Archive',
      required: true,
      type: 'Boolean',
    },
    {
      id: 'archivedDate',
      name: 'Archive Date',
      required: false,
      type: 'Date',
    },
    {
      id: 'additionalShippingCost',
      name: 'Additional Shipping Cost',
      required: false,
      type: 'Number',
    },
    {
      id: 'shippingSizeWeight',
      name: 'Shipping Box Weight',
      required: true,
      type: 'Number',
    }, 
    {
      id: 'shippingSizeWidth',
      name: 'Shipping Box Width',
      required: true,
      type: 'Number',
    },
    {
      id: 'shippingSizeHeight',
      name: 'Shipping Box Height',
      required: true,
      type: 'Number',
    },
    {
      id: 'shippingSizeLength',
      name: 'Shipping Box Length',
      required: true,
      type: 'Number',
    },
    {
      id: 'mongoId',
      name: 'ID from Mongo',
      required: true,
      type: 'Symbol',
      validations: [{
        'size': {
            'min': 0,
            'max': 100
        }
      }]
    },
    {
      id: 'productsMongo',
      name: 'Products - From Mongo',
      required: false,
      type: 'Array',
      items: { "type": "Symbol" }
    },
    {
      id: 'typeMongo',
      name: 'Type - From Mongo',
      required: false,
      type: 'Array',
      items: { "type": "Symbol" }
    },
  ]
}))



.then((contentType) => console.log(contentType))

// Publish Content Type
.then((contentType) => contentType.publish())
.then((contentType) => console.log(`Content type ${contentType.sys.id} activated.`))
.catch(console.error)
