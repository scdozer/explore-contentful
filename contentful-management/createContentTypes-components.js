const contentful = require('contentful-management')

const client = contentful.createClient({
  // from Contentful API settings
  accessToken: 'CFPAT-qMr4QljL5zbiw4MoX-m9CqHj_OmRz-a5873Y3smj1vY'
})

//Create content type and fields
// htpx3sotflll is the Space ID from Contentful API settings
client.getSpace('htpx3sotflll')
.then((space) => space.createContentType({
  name: 'Components - From API',
  description: 'Add-on components for Falcon Computers',
  fields: [
    {
      id: 'adminName',
      name: 'Admin Name',
      required: true,
      type: 'Symbol',
    },
    {
      id: 'name',
      name: 'Name',
      required: false,
      type: 'Symbol',
      //Check components.coffee for autoValue info...   
    },
    {
      id: 'listName1',
      name: 'List Name 1',
      required: true,
      type: 'Symbol',

    },
    {
      id: 'listName2',
      name: 'List Name 2',
      required: false,
      type: 'Symbol'
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
      type: 'Symbol'
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
    },
    {
      id: 'detailBullets',
      name: 'Detail Bullets',
      required: false,
      type: 'Array',
      items: { 'type': 'Symbol' }
    },
    {
      id: 'detailLearnMore',
      name: 'Detail Learn More',
      required: false,
      type: 'Symbol',
    },
    {
      id: 'configureImage',
      name: 'Configuration List Image (1100x1000 JPEG)',
      required: false,
      type: 'Link',
      linkType: 'Asset',
      //How do configImage1x and configImage2x work
      //Should this just be a link to S3?
    },
    {
      id: 'detailImage',
      name: 'Detail Image (1800wx1000 JPEG)',
      required: false,
      type: 'Link',
      linkType: 'Asset'
      //How do detailImage1x and detailImage2x work
    },
    {
      id: 'listImage',
      name: 'Config List Selected Image',
      helpText: '(1200x600 JPEG w/ #000000 Background)',
      required: false,
      type: 'Link',
      linkType: 'Asset',
      // //How do listImage1x and listImage2x work
    },
    {
      id: 'galleryImage',
      name: 'Component Gallery Slideshow',
      helpText: '(1800x1000 or 1100x1000 .jpg)',
      required: false,
      type: 'Link',
      linkType: 'Asset',
      //Needs to be an array of linked image assets
      //How do galleryImage1x and galleryImage2x work
    },
    {
      id: 'overrideBuildTime',
      name: 'Set Build Time in days',
      helpText: '(overrides product-specific build time)',
      required: false,
      type: 'Integer',
    },
    {
      id: 'additionalBuildTime',
      name: 'Build time modifier in days',
      appearance: {
        helpText: '(adds to or subtracts from total build time specified by product or above override)'
      },
      required: false,
      type: 'Integer',
    },
    {
      id: 'tags',
      name: 'Tags',
      required: false,
      type: 'Array',
      items: { "type": "Symbol" }
      //How to find already used tags....
    },
    {
      id: 'products',
      name: 'Available for:',
      required: false,
      type: 'Link',
      linkType: 'Entry'
    },
    {
      id: 'type',
      name: 'Type',
      required: true,
      type: 'Symbol',
      //Not sure what Type actually is. 
    },
    {
      id: 'active',
      name: 'Active',
      required: false,
      type: 'Boolean',
      //How to add defaults
    },
    {
      id: 'archived',
      name: 'Archive',
      required: true,
      type: 'Boolean',
      //Has custom component currently
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
          id: 'shippingSize',
          name: "Shipping Box Dimensions",
          helpText: '(Leave empty or 0 unless component requires it\'s own shipping box)',
          required: false,
              type: 'Object',
              items : {
                  "weight" : "Number",
                  "pounds" : "Number",
                  "width"  : "Number",
                  "height" : "Number",
                  "length" : "Number",
              }
        },
        // {
    //   id: '',
    //   name: '',
    //   required: false,
    //   type: '',
        // },

    
  ]
}))



.then((contentType) => console.log(contentType))

// Publish Content Type
.then((contentType) => contentType.publish())
.then((contentType) => console.log(`Content type ${contentType.sys.id} activated.`))
.catch(console.error)
