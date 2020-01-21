
// -How to Link/Relate components to products that dont exist 
//     -do i need to create a content type to link to. that can then be updated. 
// -How to create my own ID's that match the mongo IDs for foreign keys. 


// -Images in mongo are coming through as a foreign Key
//    -Need to be able to use "createAssets.js" to go through and add all assets to contentful.
//    -Stop need for S3, use contentful for all image assets.
//    -How to use createEntryOnContentTypes.js with default values and make images and links work. 
//    -Something like run createAsset on all current images. 
//    -createEntryOnContentTypes for all components, including links to assets created. 
//    -Can we update ID's to match so we dont break everything. OR create field for meteorID.
      

// -Contentful should become source of truth after sending to/from mongo. 



// Can I update images/assets with a specific ID?
  //If so, use that to try and connect components with the correct images. 
    //Upload all images to contentful with correct ID. 
    //Use ID to set reference in Contentful to the correct image. 
// image link: https://falcon-builder-production.s3.amazonaws.com/





//Stuff that gets loaded on main page and template page for product types
Router.route 'templates/:model',
      return [
        Meteor.subscribe 'components'
        Meteor.subscribe 'products'
        Meteor.subscribe 'build-sets'
        Meteor.subscribe 'types'
        Meteor.subscribe 'build-templates'
      ]